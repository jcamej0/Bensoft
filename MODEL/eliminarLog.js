var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schemaEliminar = new Schema({

    nombres: String,
    fecha: { type: Date, default: Date.now },
    idBeneficiado: String,
    Beneficio: String,
    NombreBeneficiado: String

})


var Eliminar = mongoose.model('eliminar', schemaEliminar);


module.exports.Eliminar = Eliminar;
