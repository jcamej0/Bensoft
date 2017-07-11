var express = require('express');
var svgCaptcha = require('svg-captcha');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var Usuario = require('./model/usuario').Usuario;
var EdicionLog = require('./model/edicionLog').Edicion;
var Beneficiarios = require('./model/beneficiarios').Beneficiario;
var Preparaduria = require('./model/preparaduria').Preparaduria;
var eliminarLog = require('./model/eliminarLog').Eliminar;
var Logueo = require('./model/logueo').Logueo;
var Ayudantia = require('./model/ayudantia').Ayudantia;
var Comedor = require('./model/comedor').Comedor;
var Expediente = require('./model/expedientes').Expedientes;
var session = require('express-session');
var backup = require('mongodb-backup');
var bitacora = require('./model/bitacora').Bitacora;

var app = express();
app.use(express.static(__dirname + '/public'));

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
var mongodbUri = 'mongodb://prueba:prueba@ds147872.mlab.com:47872/beneficios';
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

app.get('/respaldar',function(req,res){
    console.log("Funcionado")
backup({
    uri: 'mongodb://localhost/bienestar',
    root: './respaldo',
    tar: 'respaldo.tar',
    callback: function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('finish');
            res.send('1');
        }
    },
});
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'secreto' }));
app.use('/', routes);
app.use('/users', users);

app.listen(4000, function() {  });






app.get('/salir', function(req, res) {

    req.session.destroy();
    res.render('vistas/login')

})








//Aqui consulto info de las 4 becas
app.get('/consultaInfo', function(req, res) {

    Beneficiarios.find({ cedula: req.query.cedula }, function(err, resultado) {
        res.send(resultado);
    })




})

app.get('/captcha',function(req,res){
var captcha = svgCaptcha.create();
    req.session.captcha = captcha.text;
    
    console.log(req.session.captcha)
    res.set('Content-Type', 'image/svg+xml');
    res.status(200).send(captcha.data);
})

//Aqui consulto info de alguien del comedor
app.get('/consultaInfoComedor', function(req, res) {

    Comedor.find({ cedula: req.query.cedula }, function(err, resultado) {
        res.send(resultado);
    })

})


app.get('/consultaInfoPreparaduria', function(req, res) {

    Preparaduria.find({ cedula: req.query.cedula }, function(err, resultado) {
        res.send(resultado);
    })

})


app.get('/consultaInfoAyudantia', function(req, res) {

    Ayudantia.find({ cedula: req.query.cedula }, function(err, resultado) {
        res.send(resultado);
    })

})

app.get('/consultaInfoExpedientes', function(req, res) {

    Expediente.find({ cedula: req.query.cedula }, function(err, resultado) {
        res.send(resultado);
    })

});



app.get('/consultaInfoX', function(req, res) {



    Beneficiarios.find({ _id: req.query._id }, function(err, resultado) {
        res.send(resultado);
    })



})


//Consult info de comedor para editar
app.get('/consultaInfoX2', function(req, res) {



    Comedor.find({ _id: req.query._id }, function(err, resultado) {
        res.send(resultado);
    })



})


app.get('/consultaInfoX3', function(req, res) {



    Preparaduria.find({ _id: req.query._id }, function(err, resultado) {
        res.send(resultado);
    })



})


app.get('/consultaInfoX4', function(req, res) {



    Ayudantia.find({ _id: req.query._id }, function(err, resultado) {
        res.send(resultado);
    })



})
app.get('/consultarPanelUsuarios', function(req, res) {


    Usuario.find(function(err, data) {

        res.send(data);


    });



})

app.get('/consultarModificaciones',function(req,res){

    EdicionLog.find(function(err,respuesta){

        res.send(respuesta);

    })


})

//Aqui agrego a nuevos Usuarios al SISTEMA.
app.post('/agregarUsuario', function(req, res) {

    var user = new Usuario({

        nombre: req.body.nombres,
        user: req.body.user,
        contrasena: req.body.pass,
        tipo: req.body.tipo,
        pregunta: req.body.pregunta,
        respuesta: req.body.respuesta
    })


    user.save(function(err) {
        if (err) res.send("ERROR")
        else {
            res.send("registrado");
        }
    })


})


app.post('/actualizarUsuario', function(req, res) {



    var id = req.body.ide;


    if (req.body.tipo == undefined) {

        update = {


            contrasena: req.body.pass,
        }
    } else {
        update = {

            contrasena: req.body.pass,
            tipo: req.body.tipo
        }
    }



    Usuario.hasheoContrasena(update.contrasena,function(pass,cb){

        update.contrasena = pass;

            Usuario.findByIdAndUpdate(id, update, function(err, resultado) {

        if (err) {
            console.log('Error actualizando');
        }

        res.send(resultado);


    });


    })





})

app.post('/actualizar', function(req, res) {





    var id = req.body._id;

    update = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        modificadoPor: req.body.modificadoPor,
        copiacedula: req.body.copiacedula

    };

     var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];



    var audit = [];
    var nombreBeneficiario;

    Beneficiarios.findById(id,function(err,result){

        result = result.toObject();
        nombreBeneficiario = result['nombres']+result['apellidos'];
        var a = result;
        var dateTwo =  new Date(update.fecnac);
var updated = update;

    updated['fecnac']    = dateTwo;
    updated['fecnac']    =     updated['fecnac'].   getTime();
    result['fecnac']   =    result['fecnac'].     getTime();



        for(var r  in updated){


            if(updated[r] != result[r]){

                    audit.push(r);
            }
        }


                var xe = new bitacora({
                modificacion: "Editó a",
                beneficiario: req.body.nombres + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                beneficio: result.beneficio,
                ide: req.session.ide,

            })
                        xe.save();

    });

    Beneficiarios.findByIdAndUpdate(id, update, function(err, resultado) {

       if (err) {
            console.log('Error actualizando');
        }else{

        res.send(resultado);
        var editado = {
            modificaciones: audit,
            usuario: req.body.modificadoPor,
            beneficiario: nombreBeneficiario
        }
        var x = new EdicionLog(editado);
        x.save();


    }
    })


})

app.post('/actualizarAyudantia', function(req, res) {





    var id = req.body._id;
    update = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        fecinicio: req.body.fecinicio,
        depasignado: req.body.depasignado,
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        modificadoPor: req.body.modificadoPor,
        copiacedula: req.body.copiacedula

    };

             var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
        var xe = new bitacora({
                modificacion: "Modificó a",
                beneficiario: req.body.nombres +' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
        


            })


    var audit = [];
    var nombreBeneficiario;

    Ayudantia.findById(id,function(err,result){

        result = result.toObject();
        nombreBeneficiario = result['nombres']+result['apellidos'];
        var a = result;
        var dateOne =  new Date(update.fecinicio);
        var dateTwo =  new Date(update.fecnac);
var updated = update;

    updated['fecinicio'] = dateOne;
    updated['fecnac']    = dateTwo;
    updated['fecinicio'] = updated['fecinicio'].    getTime();
    updated['fecnac']    =     updated['fecnac'].   getTime();
    result['fecinicio'] =  result['fecinicio'].   getTime();
    result['fecnac']   =    result['fecnac'].     getTime();



        for(var r  in updated){


            if(updated[r] != result[r]){

                    audit.push(r);
            }
        }

    });

    Ayudantia.findByIdAndUpdate(id, update, function(err, resultado) {

       if (err) {
            console.log('Error actualizando');
        }else{

            console.log(resultado['fecinicio'])
        res.send(resultado);
        var editado = {
            modificaciones: audit,
            usuario: req.body.modificadoPor,
            beneficiario: nombreBeneficiario
        }
        var x = new EdicionLog(editado);
        xe.save();
        x.save();

    }
    })



})


app.post('/actualizarPreparaduria', function(req, res) {





    var id = req.body._id;

    update = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        fecinicio: req.body.fecinicio,
        depasignado: req.body.depasignado,
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        modificadoPor: req.body.modificadoPor,
        copiacedula: req.body.copiacedula

    };

     var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
        var xe = new bitacora({
                modificacion: "Editó a",
                beneficiario: req.body.nombres +' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: 'Preparaduria'
        


            })

    var audit = [];
    var nombreBeneficiario;

    Preparaduria.findById(id,function(err,result){

        result = result.toObject();
        nombreBeneficiario = result['nombres']+result['apellidos'];
        var a = result;
        var dateOne =  new Date(update.fecinicio);
        var dateTwo =  new Date(update.fecnac);
        var updated = update;
         updated['fecinicio'] = dateOne;
         updated['fecnac']    = dateTwo;
         updated['fecinicio'] = updated['fecinicio'].    getTime();
         updated['fecnac']    =     updated['fecnac'].   getTime();
         result['fecinicio'] =  result['fecinicio'].   getTime();
         result['fecnac']   =    result['fecnac'].     getTime();



        for(var r  in updated){


            if(updated[r] != result[r]){

                    audit.push(r);
            }
        }



    });

    Preparaduria.findByIdAndUpdate(id, update, function(err, resultado) {

       if (err) {
            console.log('Error actualizando');
        }else{

        res.send(resultado);
        var editado = {
            modificaciones: audit,
            usuario: req.body.modificadoPor,
            beneficiario: nombreBeneficiario
        }
        var x = new EdicionLog(editado);
        xe.save();
        x.save();

    }
    })



})



//Aqui actualizo a comedor

app.post('/actualizarComedor', function(req, res) {





    var id = req.body._id;

    update = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        comedor: req.body.comedor,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        modificadoPor: req.body.modificadoPor,
        copiacedula: req.body.copiacedula

    };


         var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
        var xe = new bitacora({
                modificacion: "Modificó a",
                beneficiario: req.body.nombres + ' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
        


            })
    
    var audit = [];
    var nombreBeneficiario;

    Comedor.findById(id,function(err,result){

        nombreBeneficiario = result['nombres']+result['apellidos'];
        for(var r  in update){

            if(update[r] != result[r]){
                console.log(r);

                audit.push(r);
            }
        }

    });

    Comedor.findByIdAndUpdate(id, update, function(err, resultado) {

       if (err) {
            console.log('Error actualizando');
        }else{

        res.send(resultado);
        var editado = {
            modificaciones: audit,
            usuario: req.body.modificadoPor,
            beneficiario: nombreBeneficiario
        }
        var x = new EdicionLog(editado);
        xe.save();
        x.save();

    }
    })



})





//Aqui elimino todos los de un beneficio

app.delete('/eliminarxbeneficio', function(req, res) {

    if (req.query.beneficio != undefined && req.query.beneficio != 'Comedor' && req.query.beneficio != 'Ayudantia' && req.query.beneficio != 'Preparaduria') {

        Beneficiarios.find({ beneficio: req.query.beneficio }).remove(function(err, resultado) {

            res.send(resultado);


        });
    } else if (req.query.beneficio == 'Comedor') {

        Comedor.find({ beneficio: req.query.beneficio }).remove(function(err, resultado) {

            res.send(resultado);


        });

    } else if (req.query.beneficio == 'Ayudantia') {

        Ayudantia.find({ beneficio: req.query.beneficio }).remove(function(err, resultado) {

            res.send(resultado);


        });

    } else if (req.query.beneficio == 'Preparaduria') {

        Preparaduria.find({ beneficio: req.query.beneficio }).remove(function(err, resultado) {

            res.send(resultado);


        });

    } else {

        Beneficiarios.find().remove(function(err, resultado) {

            Comedor.find().remove(function(err, resultado) {



                Ayudantia.find().remove(function(err, resultado) {




                    Preparaduria.find().remove(function(err, resultado) {


                            res.send(resultado);




                    })


                })



            })

        })




    }

});



//Aqui ocurre la magia donde TODOS los registros pasan a los expedientes y son eliminados de activo.
app.get('/obtenertodo', function(req, res) {


    if (req.query.beneficio != undefined && req.query.beneficio != 'Comedor' && req.query.beneficio != 'Ayudantia' && req.query.beneficio != 'Preparaduria') {

        Beneficiarios.find({ beneficio: req.query.beneficio }, function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {

                nuevo = new Expediente(resultado[x]);

                nuevo.save();


            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

                
                Beneficiarios.find({ cedula: cedula }).remove(function() {});

            }


            res.send(resultado);

        });
    } else if (req.query.beneficio == 'Comedor') {


      
        Comedor.find({ beneficio: req.query.beneficio }, function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {

                nuevo = new Expediente(resultado[x]);

                nuevo.save();


            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

               
                Comedor.find({ cedula: cedula }).remove(function() {});

            }


            res.send(resultado);

        });

    } else if (req.query.beneficio == 'Ayudantia') {


        Ayudantia.find({ beneficio: req.query.beneficio }, function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {

                nuevo = new Expediente(resultado[x]);

                nuevo.save();


            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

              
                Ayudantia.find({ cedula: cedula }).remove(function() {});

            }


            res.send(resultado);

        });

    } else if (req.query.beneficio == 'Preparaduria') {


 
        Preparaduria.find({ beneficio: req.query.beneficio }, function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {

                nuevo = new Expediente(resultado[x]);

                nuevo.save();


            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

              
                Preparaduria.find({ cedula: cedula }).remove(function() {});

            }


            res.send(resultado);

        });

    } else {

        Beneficiarios.find(function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {


                nuevo = new Expediente(resultado[x]);

                nuevo.save();


            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

              
                Beneficiarios.find({ cedula: cedula }).remove(function() {});


            }



            Comedor.find(function(err, resultado) {

                for (var x = 0; x < resultado.length; x++) {


                    nuevo = new Expediente(resultado[x]);

                    nuevo.save();


                }

                for (var x = 0; x < resultado.length; x++) {

                    cedula = resultado[x]['cedula'];

                   
                    Comedor.find({ cedula: cedula }).remove(function() {});


                }




            });



            Ayudantia.find(function(err, resultado) {

                for (var x = 0; x < resultado.length; x++) {


                    nuevo = new Expediente(resultado[x]);

                    nuevo.save();


                }

                for (var x = 0; x < resultado.length; x++) {

                    cedula = resultado[x]['cedula'];

               
                    Ayudantia.find({ cedula: cedula }).remove(function() {});


                }




            });


            Preparaduria.find(function(err, resultado) {

                for (var x = 0; x < resultado.length; x++) {


                    nuevo = new Expediente(resultado[x]);

                    nuevo.save();


                }

                for (var x = 0; x < resultado.length; x++) {

                    cedula = resultado[x]['cedula'];

                  
                    Preparaduria.find({ cedula: cedula }).remove(function() {});


                }


                res.send(resultado);

            });


        });




    }


})


app.get('/restaurartodo', function(req, res) {


    if (req.query.beneficio != undefined && req.query.beneficio != 'Comedor' && req.query.beneficio != 'Ayudantia' && req.query.beneficio != 'Preparaduria') {

        Expediente.find({ beneficio: req.query.beneficio }, function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {

                nuevo = new Beneficiarios(resultado[x]);

                nuevo.save();


            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

             
                Expediente.find({ cedula: cedula }).remove(function() {});

            }


            res.send(resultado);

        });
    } else if (req.query.beneficio == 'Comedor') {

        Expediente.find({ beneficio: 'Comedor' }, function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {

                nuevo = new Comedor(resultado[x]);

                nuevo.save();


            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

                
                Expediente.find({ cedula: cedula }).remove(function() {});

            }


            res.send(resultado);

        });
    } else if (req.query.beneficio == 'Ayudantia') {

        Expediente.find({ beneficio: 'Ayudantia' }, function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {

                nuevo = new Ayudantia(resultado[x]);

                nuevo.save();


            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

               

                Expediente.find({ cedula: cedula }).remove(function() {});

            }


            res.send(resultado);

        });
    } else if (req.query.beneficio == 'Preparaduria') {

        Expediente.find({ beneficio: 'Preparaduria' }, function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {

                nuevo = new Preparaduria(resultado[x]);

                nuevo.save();


            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

               
                Expediente.find({ cedula: cedula }).remove(function() {});

            }


            res.send(resultado);

        });
    } else {

        Expediente.find(function(err, resultado) {


            for (var x = 0; x < resultado.length; x++) {

                if (resultado[x].beneficio == 'Comedor') {

                    nuevo = new Comedor(resultado[x]);

                    nuevo.save();
                } else if (resultado[x].beneficio == 'Ayudantia') {

                    nuevo = new Ayudantia(resultado[x]);

                    nuevo.save();
                } else if (resultado[x].beneficio == 'Preparaduria') {

                    nuevo = new Preparaduria(resultado[x]);

                    nuevo.save();
                } else {



                    nuevo = new Beneficiarios(resultado[x]);

                    nuevo.save();

                }

            }

            for (var x = 0; x < resultado.length; x++) {

                cedula = resultado[x]['cedula'];

                
                Expediente.find({ cedula: cedula }).remove(function() {});

            }


            res.send(resultado);

        });

    }

})


//Aqui elimino a todos de expedientes o de algun beneficio.
app.delete('/eliminartodoexpediente', function(req, res) {
    if (req.query.beneficio != undefined) {




        Expediente.find({ beneficio: req.query.beneficio }).remove(function() {

            res.send('done')
        });

    } else {

        Expediente.find().remove(function() {

            res.send('done')
        });
    }



})


//Aqui elimino a un estudiante de algun beneficio
app.delete('/eliminar', function(req, res) {

    var ci = req.query.cedula;
    
     var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];

       
        Beneficiarios.find({cedula : ci },function(err,resultadox){


            var eliminado = new eliminarLog({
            nombres: GLOBAL.nombre,
            idBeneficiado: req.query.cedula,
            Beneficio: resultadox[0].beneficio,
            NombreBeneficiado: resultadox[0].nombres

        })

                    var x = new bitacora({
                modificacion: "Eliminó a",
                beneficiario: resultadox[0].nombres + ' ' + resultadox[0].apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: resultadox[0].cedula,
                ide: req.session.ide,
                beneficio: resultadox[0].beneficio
        


            })

        eliminado.save();
        x.save();
        

        Beneficiarios.find({ cedula: ci }).remove(function(err, resultado) {   res.send(resultado);  });
        })
   


});

//Elimino a alguien del comedor
app.delete('/eliminarComedor', function(req, res) {

         var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];


    Comedor.find({ cedula: req.query.cedula },function(err,resultado){


                var x = new bitacora({
                modificacion: "Eliminó a",
                beneficiario: resultado[0].nombres + ' ' + resultado[0].apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: resultado[0].cedula,
                ide: req.session.ide,
                beneficio: 'Comedor'

            });
                Comedor.remove({cedula: req.query.cedula},function(err){
                         x.save();
                })
               

                res.send(resultado);
        



    })

});


app.delete('/eliminarPreparaduria', function(req, res) {

         var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];


    Preparaduria.find({ cedula: req.query.cedula },function(err,resultado){


                var x = new bitacora({
                modificacion: "Eliminó a",
                beneficiario: resultado[0].nombres + ' ' + resultado[0].apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: resultado[0].cedula,
                ide: req.session.ide,
                beneficio: 'Preparaduria'

            });
                Preparaduria.remove({cedula: req.query.cedula},function(err){
                         x.save();
                })
               

                res.send(resultado);
        



    })

});



app.delete('/eliminarAyudantia', function(req, res) {

         var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];


    Ayudantia.find({ cedula: req.query.cedula },function(err,resultado){


                var x = new bitacora({
                modificacion: "Eliminó a",
                beneficiario: resultado[0].nombres + ' ' + resultado[0].apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: resultado[0].cedula,
                ide: req.session.ide,
                beneficio: 'Ayudantia'

            });
                Ayudantia.remove({cedula: req.query.cedula},function(err){
                         x.save();
                })
               

                res.send(resultado);
        




});

});
//Aqui elimino a un USUARIO
app.delete('/eliminarUsuario', function(req, res) {

    var ide = req.query.id;

    Usuario.findById(ide).remove(function(err, resultado) {

        res.send(resultado);

    })

})


//Eliminar un estudiante del expediente
app.delete('/eliminarExpediente', function(req, res) {

    Expediente.find({ cedula: req.query.cedula },function(err, resultado) {

                     var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];





                var xe= new bitacora({
                modificacion: "Eliminó expediente",
                beneficiario: resultado[0].nombres + ' ' + resultado[0].apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: resultado[0].cedula,
                ide: req.session.ide,
                beneficio: resultado[0].beneficio

            });

                xe.save();
               Expediente.find({cedula: req.query.cedula}).remove(function(err){
                    res.send(resultado);
               })

    })

});


app.get('/login', function(req, res, next) {

    var pass = req.query.contrasena;
    var user = req.query.user;
    var captcha = req.query.captcha;

    if(captcha != req.session.captcha){
        res.send('10');
    }else{



       Usuario.autenticar(user,pass,function(err, respuesta,cb){
        console.log(cb);
        if(respuesta == 1){
            res.send('1');
        }

           else if(cb){

                if(cb.primerLogueo == true){
                    req.session.primerlogueo = true;
                    req.session.ide = cb['_id'];
                }
                req.session.ide = cb['_id'];
                req.session.login = true;
                req.session.nivel = cb;
                var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
                var fecha = new Date();
                var log = new Logueo({
                nombres:cb.nombre,
                ip: ip,
                idUsuario: cb["_id"],
                fechaDos: fecha.toLocaleDateString("en-US")
            })

            global.nombre = cb;
            log.save();
            res.send(cb);
           }

           else if(respuesta == 2){
            res.send('clave');
           }
           else if(respuesta == 3){
                res.send('error');
           }
            

        })

}


});


app.get('/desbloquear',function(req,res,next){

    var usuario = req.query.ide;

    Usuario.desbloquearIde(usuario,function(err,cb){

        if(cb == 1){
            res.send('1');
        }else{
            res.send('2');
        }


    })


})


app.get('/desbloquearRespuesta',function(req,res,next){

    var usuario = req.query.ide;

    Usuario.desbloquearIdeRespuesta(usuario,function(err,cb){

        if(cb == 1){
            res.send('1');
        }else{
            res.send('2');
        }


    })


})

app.get('/consultarPregunta',function(req,res,next){

    var usuario = req.query.user;

    Usuario.consultaPregunta(usuario,function(err,cb){

            res.send(cb);

    })


})

app.get('/compararRespuestas',function(req,res,next){

    var usuario = req.query.user;
    var respuesta = req.query.respuesta;

    Usuario.respuestaConsulta(usuario,respuesta,function(err,ide,cb){

       if(cb == 1){
        res.send({codigo: 1 , ide: ide});
       }else if(cb == 2){
        res.send({codigo:2});
       }else if(cb == 5){
        res.send({codigo:5})
       }


    })


})

app.get('/cambiarContrasena',function(req,res,next){
  
    Usuario.hasheoContrasena(req.query.contrasena,function(pass,cb){

        console.log("Esto es el pass",pass)
        var update = {
            contrasena: pass
        }
        Usuario.findByIdAndUpdate(req.query.ide,update,function(err,resultado){
            if(resultado){
                Usuario.desbloquearIntentos(resultado.user,function(err,cb){

                    console.log(cb)
                    if(cb == 1){
                        res.send("1");
                    }
                })
            }


        })
    })

})


app.get('/primeraModificacion',function(req,res,ext){

      
        Usuario.hasheoContrasena(req.query.contrasena,function(pass,cb){

   
        var update = {
            contrasena: pass
        }



                update.pregunta = req.query.pregunta;
                Usuario.hasheoRespuesta(req.query.respuesta,function(respuesta,cb){
                    update.respuesta = respuesta;
                     Usuario.findByIdAndUpdate(req.query.ide,update,function(err,resultado){
                        console.log("El resultado",resultado)
                        resultado.quitarLogueo(resultado,function(err,respuesta){
                            res.send('1')

                  })

                })
            })
       

  
    
})
})

app.get('/cambiarPregunta',function(req,res,ext){



        Usuario.hasheoPregunta(req.query.pregunta,function(pregunta,cb){

               var  update ={
                    pregunta:pregunta
               }
                Usuario.hasheoRespuesta(req.query.respuesta,function(respuesta,cb){
                    update.respuesta = respuesta;
                     Usuario.findByIdAndUpdate(req.query.ide,update,function(err,resultado){
                        console.log("El resultado",resultado)
                        resultado.quitarLogueo(resultado,function(err,respuesta){
                            res.send('1')

                  })

                })
            })
        })

  
    
})




//Aqui entro al sistema y el menu se adapta a los niveles de usuario
app.get('/dashboard', function(req, res) {
    if (!req.session.login) {

        res.send('ERROR')
    } else if (req.session.primerlogueo == true){

        res.render('dashboard', { data: { nivel: req.session.nivel.tipo }, data2: { nombre: req.session.nivel.nombre }, data3: {logueo: true}, data4: {ide: req.session.ide} });

    }


    else {

        res.render('dashboard', { data: { nivel: req.session.nivel.tipo }, data2: { nombre: req.session.nivel.nombre }, data4: {ide: req.session.ide}, data3:{logueo: false}});
    }

})

//Aqui agrego alguien de comedor
app.post('/agregarComedor', function(req, res) {


    var user = new Comedor({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: new Date(req.body.fecnac),
        residencia: req.body.residencia,
        comedor: req.body.comedor,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor,
        beneficio: req.body.beneficio




        });


         var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
            var xe = new bitacora({
                modificacion: "Registró a",
                beneficiario: req.body.nombres + ' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
        


            })


        user.save(function(err) {
            if (err) res.send("ERROR")
        else {
            xe.save();
            res.send("registrado");

        }
        })





});

app.post('/agregarPreparaduria', function(req, res) {


    var user = new Preparaduria({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: new Date(req.body.fecnac),
        fecinicio: req.body.fecinicio,
        residencia: req.body.residencia,
        depasignado: req.body.depasignado,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor,
        beneficio: req.body.beneficio




    });


         var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
        var xe = new bitacora({
                modificacion: "Registró a",
                beneficiario: req.body.nombres + ' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
        


            })

    user.save(function(err) {
        if (err) res.send("ERROR")
        else {

            xe.save();
            res.send("registrado");
        }
    })





});












app.post('/agregarAyudantia', function(req, res) {


    var user = new Ayudantia({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: new Date(req.body.fecnac),
        fecinicio: new Date(req.body.fecinicio),
        residencia: req.body.residencia,
        depasignado: req.body.depasignado,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor,
        beneficio: req.body.beneficio




    });


             var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
        var xe = new bitacora({
                modificacion: "Registró a",
                beneficiario: req.body.nombres +' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
        


            })


    user.save(function(err) {
        if (err) res.send("ERROR")
        else {
            xe.save();
            res.send("registrado");
        }
    })





});



//Aqui agrego a un Estudiante a algun beneficio.
app.post('/agregar', function(req, res) {


    var user = new Beneficiarios({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: new Date(req.body.fecnac),
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor,
        beneficio: req.body.beneficio




    });

     var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
        var x = new bitacora({
                modificacion: "Registró a",
                beneficiario: req.body.nombres + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
        


            })


    user.save(function(err) {
        if (err) res.send("ERROR")
        else {
    

            x.save(function(err){
                if(err) res.send("ERROR")
                    else{
                          res.send("registrado");

                    }
              
            })
                    

        }
    })





});




app.get('/verificarExpediente', function(req, res) {


    var user = req.query.cedula;


    Expediente.find(({ cedula: user }), function(err, data) {

      

        if (data.length <= 0) {
        
            res.send("registra");
        } else {
     
            res.send('expediente');
        }

    });
})



//Muevo a alguien para los expedientes
app.post('/moverExpediente', function(req, res) {


    var expediente = new Expediente({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        beneficio: req.body.beneficio,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor




    });
     var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];

                    var x = new bitacora({
                modificacion: "Movió a expediente",
                beneficiario: req.body.nombres + ' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
        


            })

    expediente.save(function(err) {
        if (err) res.send("ERROR")
        else {
            x.save();
            res.send("Movido a expedientes");
        }
    })




});

//Muevo a alguien de comedor para los expedientes
app.post('/moverExpedienteComedor', function(req, res) {


    var expediente = new Expediente({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        residencia: req.body.residencia,
        comedor: req.body.comedor,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        beneficio: req.body.beneficio,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor




    });




         var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];




                var x = new bitacora({
                modificacion: "Movió a expediente",
                beneficiario: req.body.nombres + ' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: 'Comedor'

            });



    expediente.save(function(err) {
        if (err) res.send("ERROR")
        else {
            x.save();
            res.send("Movido a expedientes");
        }
    })

});


app.post('/moverExpedienteAyudantia', function(req, res) {


    var expediente = new Expediente({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        fecinicio: req.body.fecinicio,
        depasignado: req.body.depasignado,
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        beneficio: req.body.beneficio,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor




    });

             var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
        var xe = new bitacora({
                modificacion: "Movió a expediente",
                beneficiario: req.body.nombres +' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
        


            })


    expediente.save(function(err) {
        if (err) res.send("ERROR")
        else {
            xe.save();
            res.send("Movido a expedientes");
        }
    })




});

app.post('/moverExpedientePreparaduria', function(req, res) {


    var expediente = new Expediente({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        fecinicio: req.body.fecinicio,
        depasignado: req.body.depasignado,
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        beneficio: req.body.beneficio,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor




    });


         var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];
        var xe = new bitacora({
                modificacion: "Movió a expediente",
                beneficiario: req.body.nombres +' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
        


            })

    expediente.save(function(err) {
        if (err) res.send("ERROR")
        else {
            xe.save();
            res.send("Movido a expedientes");
        }
    })




});


app.post('/moveraBeneficio', function(req, res) {


    var user = new Beneficiarios({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        beneficio: req.body.beneficio,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor




    });

                 var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];





                var xe= new bitacora({
                modificacion: "Movió a activos",
                beneficiario: req.body.nombres + ' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: req.body.beneficio
            });


    user.save(function(err) {
        if (err) res.send("ERROR")
        else {
            xe.save();
            res.send("Movido a Beneficios!");
        }
    })




});


app.post('/moveraBeneficioAyudantia', function(req, res) {


    var user = new Ayudantia({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        fecinicio: req.body.fecinicio,
        depasignado: req.body.depasignado,
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        beneficio: req.body.beneficio,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor




    });
                 var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];





                var xe= new bitacora({
                modificacion: "Movió a activos",
                beneficiario: req.body.nombres + ' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: 'Ayudantia'

            });



    user.save(function(err) {
        if (err) res.send("ERROR")
        else {
            xe.save();
            res.send("Movido a Beneficios!");
        }
    })




});

app.post('/moveraBeneficioPreparaduria', function(req, res) {


    var user = new Preparaduria({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        fecnac: req.body.fecnac,
        fecinicio: req.body.fecinicio,
        depasignado: req.body.depasignado,
        correo: req.body.correo,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        telefono: req.body.telefono,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        beneficio: req.body.beneficio,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor




    });


                 var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];





                var xe= new bitacora({
                modificacion: "Movió a activos",
                beneficiario: req.body.nombres + ' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: 'Preparaduria'

            });

    user.save(function(err) {
        if (err) res.send("ERROR")
        else {
            xe.save();
            res.send("Movido a Beneficios!");
        }
    })




});



app.post('/moveraBeneficioComedor', function(req, res) {


    var user = new Comedor({

        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.cedula,
        tipocedula: req.body.tipocedula,
        codigo: req.body.codigo,
        pnf: req.body.pnf,
        trayecto: req.body.trayecto,
        trimestre: req.body.trimestre,
        sexo: req.body.sexo,
        estado: req.body.estado,
        municipio: req.body.municipio,
        comedor: req.body.comedor,
        residencia: req.body.residencia,
        civil: req.body.civil,
        residencia2: req.body.residencia2,
        paga: req.body.paga,
        monto: req.body.monto,
        viaja: req.body.viaja,
        tlocal: req.body.tlocal,
        tprocedencia: req.body.tprocedencia,
        trabaja: req.body.trabaja,
        direcciontrabajo: req.body.direcciontrabajo,
        ingreso: req.body.ingreso,
        aportes: req.body.aportes,
        asignan: req.body.asignan,
        direccionfamiliar: req.body.direccionfamiliar,
        apellidonombre1: req.body.apellidonombre1,
        parentesco1: req.body.parentesco1,
        edad1: req.body.edad1,
        instruccion1: req.body.instruccion1,
        ocupacion1: req.body.ocupacion1,
        ingreso1: req.body.ingreso1,
        apellidonombre2: req.body.apellidonombre2,
        parentesco2: req.body.parentesco2,
        edad2: req.body.edad2,
        instruccion2: req.body.instruccion2,
        ocupacion2: req.body.ocupacion2,
        ingreso2: req.body.ingreso2,
        apellidonombre3: req.body.apellidonombre3,
        parentesco3: req.body.parentesco3,
        edad3: req.body.edad3,
        instruccion3: req.body.instruccion3,
        ocupacion3: req.body.ocupacion3,
        ingreso3: req.body.ingreso3,
        apellidonombre4: req.body.apellidonombre4,
        parentesco4: req.body.parentesco4,
        edad4: req.body.edad4,
        instruccion4: req.body.instruccion4,
        ocupacion4: req.body.ocupacion4,
        ingreso4: req.body.ingreso4,
        apellidonombre5: req.body.apellidonombre5,
        parentesco5: req.body.parentesco5,
        edad5: req.body.edad5,
        instruccion5: req.body.instruccion5,
        ocupacion5: req.body.ocupacion5,
        ingreso5: req.body.ingreso5,
        apellidonombre6: req.body.apellidonombre6,
        parentesco6: req.body.parentesco6,
        edad6: req.body.edad6,
        instruccion6: req.body.instruccion6,
        ocupacion6: req.body.ocupacion6,
        ingreso6: req.body.ingreso6,
        apellidonombre7: req.body.apellidonombre7,
        parentesco7: req.body.parentesco7,
        edad7: req.body.edad7,
        instruccion7: req.body.instruccion7,
        ocupacion7: req.body.ocupacion7,
        ingreso7: req.body.ingreso7,
        apellidonombre8: req.body.apellidonombre8,
        parentesco8: req.body.parentesco8,
        edad8: req.body.edad8,
        instruccion8: req.body.instruccion8,
        ocupacion8: req.body.ocupacion8,
        ingreso8: req.body.ingreso8,
        recomendaciones: req.body.recomendaciones,
        historial: req.body.historial,
        horario: req.body.horario,
        foto: req.body.foto,
        copiacedula: req.body.copiacedula,
        beneficio: req.body.beneficio,
        persona: req.body.persona,
        modificadoPor: req.body.modificadoPor




    });


             var ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress).split(",")[0];





                var xe= new bitacora({
                modificacion: "Movió a activos",
                beneficiario: req.body.nombres + ' ' + req.body.apellidos,
                usuario: req.session.nivel.nombre,
                ip: ip,
                cedula: req.body.cedula,
                ide: req.session.ide,
                beneficio: 'Comedor'

            });


    user.save(function(err) {
        if (err) res.send("ERROR")
        else {
            xe.save();
            res.send("Movido a Beneficios!");
        }
    })




});


app.get('/beneficiariosTodos', function(req, res) {

    Beneficiarios.where({}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});




app.get('/informacion', function(req, res) {

    Beneficiarios.where({ beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});



app.get('/informacionayudantia', function(req, res) {

    Ayudantia.where({ beneficio: 'Ayudantia' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});



app.get('/informacionpreparaduria', function(req, res) {

    Preparaduria.where({ beneficio: 'Preparaduria' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});




/**************GLOBAL****************/
app.get('/informacion1g', function(req, res) {

    Beneficiarios.where({ sexo: 'Masculino'}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});

app.get('/informacion2g', function(req, res) {

    Beneficiarios.where({ sexo: 'Femenino'}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion3g', function(req, res) {

    Beneficiarios.where({ pnf: 'Administracion'}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion4g', function(req, res) {

    Beneficiarios.where({ pnf: 'Mecanica'}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion5g', function(req, res) {

    Beneficiarios.where({ pnf: 'Construccion Civil'}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion6g', function(req, res) {

    Beneficiarios.where({ pnf: 'Instrumentacion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion7g', function(req, res) {

    Beneficiarios.where({ pnf: 'Electricidad'}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion8g', function(req, res) {

    Beneficiarios.where({ pnf: 'Informatica'}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion9g', function(req, res) {

    Beneficiarios.where({ pnf: 'Quimica'}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion10g', function(req, res) {

    Beneficiarios.where({ pnf: 'Agroalimentacion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }

    })
});


app.get('/informacion11g', function(req, res) {

    Beneficiarios.where({ pnf: 'Contaduria'}).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


/*************************************/


app.get('/informacion1', function(req, res) {

    Beneficiarios.where({ sexo: 'Masculino', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});

app.get('/informacion2', function(req, res) {

    Beneficiarios.where({ sexo: 'Femenino', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion3', function(req, res) {

    Beneficiarios.where({ pnf: 'Administracion', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion4', function(req, res) {

    Beneficiarios.where({ pnf: 'Mecanica', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion5', function(req, res) {

    Beneficiarios.where({ pnf: 'Construccion Civil', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion6', function(req, res) {

    Beneficiarios.where({ pnf: 'Instrumentacion', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion7', function(req, res) {

    Beneficiarios.where({ pnf: 'Electricidad', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion8', function(req, res) {

    Beneficiarios.where({ pnf: 'Informatica', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion9', function(req, res) {

    Beneficiarios.where({ pnf: 'Quimica', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion10', function(req, res) {

    Beneficiarios.where({ pnf: 'Agroalimentacion', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }

    })
});


app.get('/informacion11', function(req, res) {

    Beneficiarios.where({ pnf: 'Contaduria', beneficio: req.query.beneficio }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});





app.get('/informaciondemocraciacomedor', function(req, res) {

    Comedor.find({ comedor: req.query.comedor }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })
});


app.get('/informacioncamilacomedor', function(req, res) {

    Comedor.find({ comedor: req.query.comedor }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })
});

app.get('/informaciondacacomedor', function(req, res) {

    Comedor.find({ comedor: req.query.comedor }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })
});

app.get('/informacionfederacioncomedor', function(req, res) {

    Comedor.find({ comedor: req.query.comedor }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })
});

app.get('/informacioncomedor', function(req, res) {

    Comedor.find().count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })


});

app.get('/informacion1comedor', function(req, res) {

    Comedor.find({ sexo: 'Masculino' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});

app.get('/informacion2comedor', function(req, res) {

    Comedor.find({ sexo: 'Femenino' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion3comedor', function(req, res) {

    Comedor.find({ pnf: 'Administracion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion4comedor', function(req, res) {

    Comedor.find({ pnf: 'Mecanica' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion5comedor', function(req, res) {

    Comedor.find({ pnf: 'Construccion Civil' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion6comedor', function(req, res) {

    Comedor.find({ pnf: 'Instrumentacion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion7comedor', function(req, res) {

    Comedor.find({ pnf: 'Electricidad' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion8comedor', function(req, res) {

    Comedor.find({ pnf: 'Informatica' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion9comedor', function(req, res) {

    Comedor.find({ pnf: 'Quimica' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion10comedor', function(req, res) {

    Comedor.find({ pnf: 'Agroalimentacion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }

    })
});


app.get('/informacion11comedor', function(req, res) {

    Comedor.find({ pnf: 'Contaduria' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});





/*--------------------*/

app.get('/informacion1ayudantia', function(req, res) {

    Ayudantia.find({ sexo: 'Masculino' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});

app.get('/informacion2ayudantia', function(req, res) {

    Ayudantia.find({ sexo: 'Femenino' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion3ayudantia', function(req, res) {

    Ayudantia.find({ pnf: 'Administracion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion4ayudantia', function(req, res) {

    Ayudantia.find({ pnf: 'Mecanica' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion5ayudantia', function(req, res) {

    Ayudantia.find({ pnf: 'Construccion Civil' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion6ayudantia', function(req, res) {

    Ayudantia.find({ pnf: 'Instrumentacion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion7ayudantia', function(req, res) {

    Ayudantia.find({ pnf: 'Electricidad' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion8ayudantia', function(req, res) {

    Ayudantia.find({ pnf: 'Informatica' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion9ayudantia', function(req, res) {

    Ayudantia.find({ pnf: 'Quimica' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion10ayudantia', function(req, res) {

    Ayudantia.find({ pnf: 'Agroalimentacion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }

    })
});


app.get('/informacion11ayudantia', function(req, res) {

    Ayudantia.find({ pnf: 'Contaduria' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


/************************/


app.get('/informacion1preparaduria', function(req, res) {

    Preparaduria.find({ sexo: 'Masculino' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});

app.get('/informacion2preparaduria', function(req, res) {

    Preparaduria.find({ sexo: 'Femenino' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion3preparaduria', function(req, res) {

    Preparaduria.find({ pnf: 'Administracion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion4preparaduria', function(req, res) {

    Preparaduria.find({ pnf: 'Mecanica' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion5preparaduria', function(req, res) {

    Preparaduria.find({ pnf: 'Construccion Civil' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion6preparaduria', function(req, res) {

    Preparaduria.find({ pnf: 'Instrumentacion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion7preparaduria', function(req, res) {

    Preparaduria.find({ pnf: 'Electricidad' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion8preparaduria', function(req, res) {

    Preparaduria.find({ pnf: 'Informatica' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion9preparaduria', function(req, res) {

    Preparaduria.find({ pnf: 'Quimica' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});


app.get('/informacion10preparaduria', function(req, res) {

    Preparaduria.find({ pnf: 'Agroalimentacion' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }

    })
});


app.get('/informacion11preparaduria', function(req, res) {

    Preparaduria.find({ pnf: 'Contaduria' }).count(function(err, resultado) {
        if (err) res.send("ERROR")
        else {
            var x = resultado.toString();
            res.send(x);
        }
    })

});





//Aqui consulto la info de los beneficiarios de X eneficio
app.get('/beneficiarios', function(req, res) {




    if (req.query.beneficio.lenght == 0) {



        Beneficiarios.find(({ beneficio: 'Social Critica' }), function(err, data) {

            res.send(data);


        });

    } else {


        Beneficiarios.find(({ beneficio: req.query.beneficio })).sort({ apellidos: 'asc' }).exec(function(err, data) {

            res.send(data);


        });
    }
});





app.get('/beneficiariosComedor', function(req, res) {




    if (req.query.beneficio.lenght == 0) {



        Comedor.find(({ beneficio: 'Comedor' }), function(err, data) {

            res.send(data);


        });

    } else {


        Comedor.find(({ beneficio: req.query.beneficio })).sort({ apellidos: 'asc' }).exec(function(err, data) {

            res.send(data);


        });
    }
});



app.get('/beneficiariosPreparaduria', function(req, res) {




    if (req.query.beneficio.lenght == 0) {



        Preparaduria.find(({ beneficio: 'Preparaduria' }), function(err, data) {

            res.send(data);


        });

    } else {


        Preparaduria.find(({ beneficio: req.query.beneficio })).sort({ apellidos: 'asc' }).exec(function(err, data) {

            res.send(data);


        });
    }
});



app.get('/beneficiariosAyudantia', function(req, res) {




    if (req.query.beneficio.lenght == 0) {



        Ayudantia.find(({ beneficio: 'Ayudantia' }), function(err, data) {

            res.send(data);


        });

    } else {


        Ayudantia.find(({ beneficio: req.query.beneficio })).sort({ apellidos: 'asc' }).exec(function(err, data) {

            res.send(data);


        });
    }
});


app.get('/beneficiariosComedor', function(req, res) {





    Comedor.find(({ beneficio: req.query.beneficio })).sort({ apellidos: 'asc' }).exec(function(err, data) {

        
        res.send(data);


    });

});



app.get('/beneficiariosC', function(req, res) {


    if (req.query.comedor == 'Todos') {

        Comedor.find(({})).sort({ apellidos: 'asc' }).exec(function(err, data) {

            
            res.send(data);


        });

    } else {


        Comedor.find(({ comedor: req.query.comedor })).sort({ apellidos: 'asc' }).exec(function(err, data) {

            
            res.send(data);


        });

    }

});


app.get('/beneficiariosBecas', function(req, res) {


    if (req.query.beneficio == 'Todos') {

        Beneficiarios.find(({})).sort({ apellidos: 'asc' }).exec(function(err, data) {

            
            res.send(data);


        });

    } else if (req.query.beneficio == 'Social Critica') {


        Beneficiarios.find(({ beneficio: req.query.beneficio })).sort({ apellidos: 'asc' }).exec(function(err, data) {

            
            res.send(data);


        });

    }else if (req.query.beneficio == 'Academica') {


        Beneficiarios.find(({ beneficio: req.query.beneficio })).sort({ apellidos: 'asc' }).exec(function(err, data) {

            
            res.send(data);


        });

    }else if (req.query.beneficio == 'Deporte') {


        Beneficiarios.find(({ beneficio: req.query.beneficio })).sort({ apellidos: 'asc' }).exec(function(err, data) {

            
            res.send(data);


        });

    }else if (req.query.beneficio == 'Discapacidad') {


        Beneficiarios.find(({ beneficio: req.query.beneficio })).sort({ apellidos: 'asc' }).exec(function(err, data) {

            
            res.send(data);


        });

    }

});


app.get('/exbeneficiarios', function(req, res) {



    Expediente.find(({ beneficio: req.query.beneficio }), function(err, data) {

        res.send(data);


    });

});


/*SECCION PARA CONSULTAS DE AUDITORIA */

app.get('/consultarBitacora', function(req, res) {



 if(req.query.nombre ==  'TODOS'){
 console.log("Esta 3")
                bitacora.find({fecha:{"$gte": req.query.fechaInicio, "$lt": req.query.fechaFinal }},function(err, data) {
                    console.log(data);
        res.send(data);
    })

    }else {


                bitacora.find({fecha:{"$gte": req.query.fechaInicio, "$lt": req.query.fechaFinal }, ide: req.query.nombre},function(err, data) {
                    console.log(data);
        res.send(data);

    })



}

})




app.get('/consultarLogueo', function(req, res) {


    Logueo.find(function(err, data) {

        res.send(data);


    });



})

app.get('/consultarLogueoNombre', function(req, res) {


    Logueo.find(({ idUsuario: req.query.ide }), function(err, data) {

        res.send(data);


    });



})

app.get('/consultarLogueoFecha', function(req, res) {


    Logueo.find(({ fechaDos: req.query.fecha }), function(err, data) {

        res.send(data);


    });



})


app.get('/consultarLogueoFechaNombre', function(req, res) {


    Logueo.find(({ fechaDos: req.query.fecha, idUsuario: req.query.ide }), function(err, data) {

        res.send(data);


    });



})





// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



app.get('/kinduser', function(req, res) {

    res.send(req.session.login)
})








module.exports = app;
