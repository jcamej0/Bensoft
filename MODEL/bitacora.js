var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schemaBitacora = new Schema({

  fecha: { type: Date, default: Date.now },
  modificacion: String,
  usuario: String,
  cedula: String,
  beneficiario: String,
  ip: String,
  ide: String,
  beneficio: String

})


var Bitacora = mongoose.model('bitacora', schemaBitacora);


module.exports.Bitacora = Bitacora;
