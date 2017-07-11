app.controller('usuarioRegistro', function($scope, $http, $mdToast, $mdDialog) {

    $scope.preguntas = [
    "Lugar de nacimiento de la madre",
    "Primera mascota",
    "Nombre abuela",
    "Canción preferida"]

    $scope.agregarUsuario = function() {


        data = {

            nombres: $scope.formulario.nombre,
            user: $scope.formulario.usuario,
            pass: $scope.formulario.contrasena,
            tipo: $scope.formulario.tipo,
            pregunta: $scope.formulario.pregunta,
            respuesta: $scope.formulario.respuesta
        }




        $http.post('/agregarUsuario', data).then(function(respuesta) {

            if (respuesta.data == "registrado") {


                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('¡Exito!')
                    .textContent('Nuevo usuario Registrado.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('¡Entendido!')
                );


                 $scope.formulario = {};

            } else {




                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Error')
                    .textContent('Nombre de usuario en uso.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('¡Entendido!')
                );


            }




        });

    };

});



app.controller('operacionesBaseDatos', function($scope, $http, $mdDialog, $mdMedia) {



    $scope.eliminarxbeneficio = function(beneficio) {

        var confirm = $mdDialog.confirm()
            .title('Eliminacion de registros')
            .textContent('¿Te gustaria eliminar todos los registros de beca ' + beneficio + '?')
            .ariaLabel('Lucky day')
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {

            $http.delete('/eliminarxbeneficio', { params: { beneficio: beneficio } }).then(function(callback) {



                if (callback) {

                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Exito')
                        .textContent('Se han eliminado todos los registros.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Entendido!')
                    );
                }




            })


        }, function() {

        });






    }
        $scope.respaldo = function(){
        $http.get('/respaldar').then(function(response){   

            if(response.data == 1){
                alert("Respaldo realizado.")
            }else{

                alert("Error respaldando.")
            }

        })
    }


    $scope.obtenertodo = function(beneficio) {


        var confirm = $mdDialog.confirm()
            .title('Mover registros')
            .textContent('¿Te gustaria mover todos los registros de beca ' + beneficio + ' a expediente ?')
            .ariaLabel('Lucky day')
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {


                $http.get('/obtenertodo', { params: { beneficio: beneficio } }).then(function(callback) {



                    if (callback) {

                        $mdDialog.show(
                            $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Exito')
                            .textContent('Se han movido todos los registros a los expedientes.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Entendido!')
                        );
                    }

                })
            },
            function() {

            });

    }



    $scope.restaurartodo = function(beneficio) {


        var confirm = $mdDialog.confirm()
            .title('Restaurar registros')
            .textContent('¿Te gustaria restaurar todos los registros de beca ' + beneficio + ' de expediente a activos ?')
            .ariaLabel('Lucky day')
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {


                $http.get('/restaurartodo', { params: { beneficio: beneficio } }).then(function(callback) {



                    if (callback) {

                        $mdDialog.show(
                            $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Exito')
                            .textContent('Se han activado todos los registros.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Entendido!')
                        );
                    }

                })
            },
            function() {

            });

    }



    $scope.eliminartodoexpediente = function(beneficio){

            var confirm = $mdDialog.confirm()
            .title('Eliminar expedientes')
            .textContent('¿Te gustaria eliminar todos los registros de beca ' + beneficio + ' de expediente ?')
            .ariaLabel('Lucky day')
            .ok('Si')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {


                $http.delete('/eliminartodoexpediente', { params: { beneficio: beneficio } }).then(function(callback) {



                    if (callback) {

                        $mdDialog.show(
                            $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Exito')
                            .textContent('Se han removido todos los registros.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Entendido!')
                        );
                    }

                })
            },
            function() {

            });



    }


});

app.controller('auditoria',function($scope, $http, $mdToast, $mdDialog, $mdDateRangePicker){
var usuarios = [];

 

  var tmpToday = new Date();




        $scope.selectedRange = {

            dateStart: null,
            dateEnd: null,
            showTemplate: false,
            fullscreen: false
        };
        $scope.onSelect = function(scope) {
            console.log($scope.selectedRange.selectedTemplateName);
            return $scope.selectedRange.selectedTemplateName;
        };
        $scope.pick = function($event, showTemplate) {
            $scope.selectedRange.showTemplate = showTemplate;
            $mdDateRangePicker.show({
                targetEvent: $event,
                model: $scope.selectedRange
            }).then(function(result) {
                if (result) $scope.selectedRange = result;
            })
        };
        $scope.clear = function() {
            $scope.selectedRange.selectedTemplate = null;
            $scope.selectedRange.selectedTemplateName = null;
            $scope.selectedRange.dateStart = null;
            $scope.selectedRange.dateEnd = null;
        }


$scope.consultarBitacora = function(){



    if($scope.nombreElegidoBitacora == null){
        alert("Debe elegir un usuario");
    }else if ($scope.selectedRange.dateStart == null){
        alert("Debe elegir una fecha")
    }else{




        var x = new Date($scope.selectedRange.dateStart);
        x.setHours(-3,0,0);
        x = x.toISOString();
        var y = new Date($scope.selectedRange.dateEnd);
        y.setHours(19,59,59);
        y = y.toISOString();
 




    $http.get('/consultarBitacora',{params: {fechaInicio: x, fechaFinal: y, nombre: $scope.nombreElegidoBitacora}}).then(function(data){

            console.log("presionado");
    var bitacora = data.data;
    bitacora.forEach(function(eachObj){
        var hora = new Date(eachObj.fecha);
        eachObj.hora = hora.toTimeString();
    })


    $scope.bitacora = bitacora;

})

    }

}


$http.get('/consultarModificaciones').then(function(data){

    var modificaciones = data.data;
    modificaciones.forEach(function(eachObj){
        var hora = new Date(eachObj.fecha);
        eachObj.hora = hora.toTimeString();
    })


    $scope.modificaciones = modificaciones;

})

$http.get('/consultarLogueo').then(function(data){

var resultadosAuditoria = data.data;
  

resultadosAuditoria.forEach(function(eachObj){
    var hora = new Date(eachObj.fecha);
    eachObj.hora = hora.toTimeString();
})


  $scope.total = resultadosAuditoria;


})

 $http.get('/consultarPanelUsuarios').then(function(data){
   for(x = 0; x<data.data.length; x++){

    var user = {
        nombre: data.data[x].nombre,
        id : data.data[x]["_id"]

    }
usuarios.push(user);



}

    var userNull = {
        nombre: "TODOS",
        id: "TODOS"
    }

usuarios.push(userNull);



 })
 $scope.myDate = new Date();
 $scope.usuarios = usuarios;

 $scope.buscar = function(){
if($scope.nombreElegido != null && $scope.fechaElegida == null){

if($scope.nombreElegido == "TODOS"){
console.log("ENTRE")

 $http.get('/consultarLogueo').then(function(data){
$scope.total = [];
var resultadosAuditoria = data.data;
  

resultadosAuditoria.forEach(function(eachObj){
var hora = new Date(eachObj.fecha);

eachObj.hora = hora.toTimeString();
})


  $scope.total = resultadosAuditoria;


})

}
else{


$http.get('/consultarLogueoNombre', { params: { ide: $scope.nombreElegido } }).then(function(respuesta) {

$scope.total = [];
var resultadosAuditoria = respuesta.data;

resultadosAuditoria.forEach(function(eachObj){
    var hora = new Date(eachObj.fecha);

    eachObj.hora = hora.toTimeString();
})


  $scope.total = resultadosAuditoria;



})

}

}else if($scope.fechaElegida != null && $scope.nombreElegido == null){

var fecha = $scope.fechaElegida.toLocaleDateString("en-US");
console.log(fecha)
    
$http.get('/consultarLogueoFecha', { params: { fecha: fecha } }).then(function(respuesta) {

$scope.total = [];
var resultadosAuditoria = respuesta.data;

resultadosAuditoria.forEach(function(eachObj){
    var hora = new Date(eachObj.fecha);

    eachObj.hora = hora.toTimeString();
})


  $scope.total = resultadosAuditoria;



});




}else if($scope.fechaElegida != null && $scope.nombreElegido != null){
   
if($scope.nombreElegido == "TODOS"){
var fecha = $scope.fechaElegida.toLocaleDateString("en-US");
console.log(fecha)
    
$http.get('/consultarLogueoFecha', { params: { fecha: fecha } }).then(function(respuesta) {

$scope.total = [];
var resultadosAuditoria = respuesta.data;

resultadosAuditoria.forEach(function(eachObj){
    var hora = new Date(eachObj.fecha);

    eachObj.hora = hora.toTimeString();
})


  $scope.total = resultadosAuditoria;



});

    
}


else{




var fecha = $scope.fechaElegida.toLocaleDateString("en-US");
var ide = $scope.nombreElegido;
    
$http.get('/consultarLogueoFechaNombre', { params: { fecha: fecha, ide:ide } }).then(function(respuesta) {

$scope.total = [];
var resultadosAuditoria = respuesta.data;

resultadosAuditoria.forEach(function(eachObj){
    var hora = new Date(eachObj.fecha);

    eachObj.hora = hora.toTimeString();
})


  $scope.total = resultadosAuditoria;



});



}
}
else{
alert("Debe seleccionar almenos una opcion");
}
 }



$scope.editadosx = [];


$scope.cambiarEditados = function(editados){

    $scope.editadosx = editados;
}






})


app.controller('usuarioModificacion', function($scope, $http, $mdToast, $mdDialog, $window ) {




  





  /*********************/

    $scope.preguntas = [
    "Lugar de nacimiento de la madre",
    "Primera mascota",
    "Nombre abuela",
    "Canción preferida"]

if($window.ide){

    $scope.ide = $window.ide;
}


$scope.actualizar = function(){
    $http.get('/primeraModificacion',{params:{pregunta: $scope.formulario.pregunta, respuesta: $scope.formulario.respuesta,
 contrasena: $scope.formulario.contrasena, ide: $scope.ide }}).then(function(response){
    console.log("La respuestas",response.data)
    if(response.data == 1){
        alert("Perfíl actualizado, sera redirigido a la pagina de acceso.");
        $window.location.href = 'salir';
    }
 })

}

$scope.actualizarContrasena = function(){
    $http.get('/cambiarContrasena',{params:{contrasena: $scope.formulario.contrasena, ide: $scope.ide }}).then(function(response){
    if(response.data == 1){
        alert("Contraseña cambiada con exito, sera redirigido a la pagina de acceso.");
        $window.location.href = 'salir';
    }
 })

}

$scope.actualizarPregunta = function(){
    $http.get('/cambiarPregunta',{params:{pregunta: $scope.formulario.pregunta, respuesta: $scope.formulario.respuesta, ide: $scope.ide }}).then(function(response){
    if(response.data == 1){
        alert("Pregunta y respuesta secreta cambiadas con exito, sera redirigido a la pagina de acceso.");
        $window.location.href = 'salir';
    }
 })
 }
})
.directive('passwordStrength', [
    function() {
      return {
        require: 'ngModel',
        restrict: 'E',
        scope: {
          password: '=ngModel'
        },

        link: function(scope, elem, attrs, ctrl) {
          scope.$watch('password', function(newVal) {

            scope.strength = isSatisfied(newVal && newVal.length >= 8) +
              isSatisfied(newVal && /[A-z]/.test(newVal)) +
              isSatisfied(newVal && /(?=.*\W)/.test(newVal)) +
              isSatisfied(newVal && /\d/.test(newVal));

            function isSatisfied(criteria) {
              return criteria ? 1 : 0;
            }
          }, true);
        },
        template: '<div class="progress">' +
          '<div class="progress-bar progress-bar-danger" style="width: {{strength >= 1 ? 25 : 0}}%"></div>' +
          '<div class="progress-bar progress-bar-warning" style="width: {{strength >= 2 ? 25 : 0}}%"></div>' +
          '<div class="progress-bar progress-bar-warning" style="width: {{strength >= 3 ? 25 : 0}}%"></div>' +
          '<div class="progress-bar progress-bar-success" style="width: {{strength >= 4 ? 25 : 0}}%"></div>' +
          '</div>'
      }
    }
  ])
  app.directive('patternValidator', [
    function() {
      return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, elem, attrs, ctrl) {
          ctrl.$parsers.unshift(function(viewValue) {
            
            var patt = new RegExp(attrs.patternValidator);
            
            var isValid = patt.test(viewValue);

            ctrl.$setValidity('passwordPattern', isValid);

            // angular does this with all validators -> return isValid ? viewValue : undefined;
            // But it means that the ng-model will have a value of undefined
            // So just return viewValue!
            return viewValue;
            
          });
        }
      };
    }
  ]);;

