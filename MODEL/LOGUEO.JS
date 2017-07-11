var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schemaLogueo = new Schema({

    nombres: String,
    fecha: { type: Date, default: Date.now },
    ip: String,
    idUsuario: String,
    fechaDos: String

})


var Logueo = mongoose.model('logueo', schemaLogueo);


module.exports.Logueo = Logueo;
