var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schemaBeneficiario = new Schema({

    nombres: String,
    apellidos: String,
    cedula: { type: Number, unique: true },
    tipocedula: String,
    codigo: { type: Number, unique: true },
    pnf: String,
    trayecto: String,
    trimestre: String,
    sexo: String,
    estado: String,
    municipio: String,
    fecnac: String,
    direccion: String,
    telefono: String,
    correo: String,
    twitter: String,
    facebook: String, 
    residencia: String,
    civil: String,
    residencia2: String,
    paga: String,
    monto: String,
    viaja: String,
    tlocal: String,
    tprocedencia: String,
    trabaja: String,
    direccionfamiliar: String,
    direcciontrabajo: String,
    ingreso: String,
    aportes: String,
    asignan: String,
    apellidonombre1: String,
    parentesco1: String,
    edad1: String,
    instruccion1: String,
    ocupacion1: String,
    ingreso1: String,
    apellidonombre2: String,
    parentesco2: String,
    edad2: String,
    instruccion2: String,
    ocupacion2: String,
    ingreso2: String,
    apellidonombre3: String,
    parentesco3: String,
    edad3: String,
    instruccion3: String,
    ocupacion3: String,
    ingreso3: String,
    apellidonombre4: String,
    parentesco4: String,
    edad4: String,
    instruccion4: String,
    ocupacion4: String,
    ingreso4: String,
    apellidonombre5: String,
    parentesco5: String,
    edad5: String,
    instruccion5: String,
    ocupacion5: String,
    ingreso5: String,
    apellidonombre6: String,
    parentesco6: String,
    edad6: String,
    instruccion6: String,
    ocupacion6: String,
    ingreso6: String,
    apellidonombre7: String,
    parentesco7: String,
    edad7: String,
    instruccion7: String,
    ocupacion7: String,
    ingreso7: String,
    apellidonombre8: String,
    parentesco8: String,
    edad8: String,
    instruccion8: String,
    ocupacion8: String,
    ingreso8: String,
    recomendaciones: String,
    historial: Boolean,
    horario: Boolean,
    foto: Boolean,
    civilopiacedula: Boolean,
    persona: String,
    comedor: String,
    beneficio: String,
    copiacedula: Boolean,
    modificadoPor: String,
    persona: String,
    fecinicio: Date,
    depasignado: String,
    ultimaModificacion: { type: Date, default: Date.now }
})


var Expedientes = mongoose.model('expediente', schemaBeneficiario);


module.exports.Expedientes = Expedientes;
