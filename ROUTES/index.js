var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('vistas/login', { title: 'Login' });
});





router.get('/probando',function(req,res,next){

  res.send("Esto es una prueba para probar las session" + req.session.confirmacion)

})
module.exports = router;


