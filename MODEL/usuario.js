var mongoose = require('mongoose');
var Schema = mongoose.Schema;
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10,
    intentos_maximos = 3;


var schemaUsuario = new Schema({
	nombre: String,
	user: { type: String, unique: true },
	contrasena: {type: String, required: true},
	tipo: Number,
    pregunta: String,
    respuesta: String,
    intentosLogueos: {type: Number, required:true, default:0},
    intentosRespuesta: {type: Number, required:true, default:0},
    bloqueado: {type: Boolean, default:0},
    primerLogueo: {type:Boolean, default: true}
})

schemaUsuario.virtual('esbloqueado').get(function(){
    return(this.bloqueado);
})

schemaUsuario.pre('save', function(next) {
    var user = this;


if (!user.isModified('contrasena')) return next();


bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

   
    bcrypt.hash(user.contrasena, salt, function(err, hash) {
        if (err) return next(err);

        user.contrasena = hash;
     
    
    });
 
        bcrypt.hash(user.respuesta, salt, function(err, hash) {
        if (err) return next(err);

        user.respuesta = hash;
        next();
    
    });


  });



});




schemaUsuario.methods.comparar = function(candidatecontrasena, cb) {
    bcrypt.compare(candidatecontrasena, this.contrasena, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


schemaUsuario.methods.compararRespuesta = function(respuesta, cb) {
    bcrypt.compare(respuesta, this.respuesta, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

schemaUsuario.methods.conteo = function(cb){
var aumentar = {$inc:{intentosLogueos: 1}};

if(this.intentosLogueos == intentos_maximos  && !this.esbloqueado){
        aumentar.$set = {bloqueado: true};
}

return this.update(aumentar,cb);
}

var razones = schemaUsuario.statics.falloLogueo = {
    cotraseña_incorrecta: 1
}

schemaUsuario.methods.restaurar = function(cb){
    var bloqueado = {$set:{bloqueado:false,intentosLogueos:0}};

    return this.update(bloqueado,cb);

}

schemaUsuario.methods.restaurarRespuesta = function(cb){
    var bloqueado = {$set:{intentosRespuesta:0}};

    return this.update(bloqueado,cb);

}

schemaUsuario.methods.restaurarIntentos = function(cb){
    var bloqueado = {$set:{intentosLogueos:0}};

    return this.update(bloqueado,cb);

}

schemaUsuario.statics.autenticar = function(user,password,cb){
   
    this.findOne({user:user}, function(err,user){
        if(!user){

            return cb(null,3,null);
        }

       else if(user){
            if(user.esbloqueado){

                return cb(null,razones.cotraseña_incorrecta,null);
            }

            user.comparar(password,function(err,usuario){
                
                    if(usuario){
                        var updates ={
                            $set:{intentosLogueos: 0,bloqueado:false}
                        }
                        return user.update(updates,function(err){
                            console.log("Comparando usuario",updates)
                            return cb(null,null,user)

                        })
                       
            
  
                    }else{

                    user.conteo(function(err){
                       
                        return cb(null,2,null)
                    })
                        
                    }
            })
        }

    })

}

schemaUsuario.statics.desbloquear = function(user,cb){

    this.findOne({user:user},function(err,usuario){

        if(usuario){
            console.log("Encontre al usuario")
            usuario.restaurar(function(err){
                return cb(null,1)
            })
        }
    })

}


schemaUsuario.statics.desbloquearIde = function(user,cb){

    this.findById(user,function(err,usuario){

        if(usuario){
            console.log("Encontre al usuario")
            usuario.restaurar(function(err){
                return cb(null,1)
            })
        }
    })

}


schemaUsuario.statics.desbloquearIdeRespuesta = function(user,cb){

    this.findById(user,function(err,usuario){

        if(usuario){
            console.log("Encontre al usuario")
            usuario.restaurarRespuesta(function(err){
                return cb(null,1)
            })
        }
    })

}

schemaUsuario.statics.desbloquearIntentos = function(user,cb){

    this.findOne({user:user},function(err,usuario){

        if(usuario){
            console.log("Encontre al usuario")
            usuario.restaurarIntentos(function(err){
                return cb(null,1)
            })
        }
    })

}



schemaUsuario.statics.respuestaConsulta = function(user,respuesta,cb){

this.findOne({user:user},function(err,usuario){

    if(usuario){
        console.log("Este usuario se encontro")
            if(usuario.intentosRespuesta >= 3){
                return cb(null,null,5)
            }
            else{

            
        usuario.compararRespuesta(respuesta,function(err,resultado){
            console.log("Estoy comparando las respuestas");
            if(resultado){
                console.log("Respuestas iguales");
                return cb(null,usuario['_id'],1);
            }else{
                console.log("Respuesta erronea");
                var update = {
                    $inc:{intentosRespuesta: 1},
                }

                usuario.update(update,cb);
                return cb(null,null,2);
            }
        })
        }
    }
})

}

schemaUsuario.statics.consultaPregunta = function(user,cb){

    this.findOne({user:user},function(err,usuario){

        return cb(null,usuario)
    })

}






schemaUsuario.statics.hasheoContrasena=function(pass,cb){

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    bcrypt.hash(pass, salt, function(err, hash) {
     pass = hash;
     console.log("Interno",pass);
     return cb(pass,null);
  })

});

}




schemaUsuario.statics.hasheoRespuesta=function(respuesta,cb){

     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    bcrypt.hash(respuesta, salt, function(err, hash) {
     respuesta = hash;
     console.log("Interno",respuesta);
     return cb(respuesta,null);
  })

});


}


schemaUsuario.methods.quitarLogueo = function(user,cb){

    var updates = {
        $set:{primerLogueo:false}
    }  

     user.update(updates,function(err){
           return cb(null,"primer logueo desactivado")

      })
}

schemaUsuario.statics.primeraModificacion = function(ide,cb){

    this.findById(ide,function(usuario){




    })

}


module.exports.Usuario = mongoose.model("usuario", schemaUsuario)