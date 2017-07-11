var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schemaEdicion = new Schema({

  fecha: { type: Date, default: Date.now },
  modificaciones: [],
  usuario: String,
  beneficiario: String

})


var Edicion = mongoose.model('edicion', schemaEdicion);


module.exports.Edicion = Edicion;
