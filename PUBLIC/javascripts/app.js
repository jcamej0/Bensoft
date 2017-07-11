var app = angular.module('bienestar', ["chart.js",'ui.router', 'ngMaterial', 'logueo', 'angularUtils.directives.dirPagination', 'md.data.table','ngMaterialDateRangePicker']);


app.config(function($stateProvider) {




    var main = {

        name: 'main',
        url: "/",
        templateUrl: 'menu.ejs'
    }


        var perfil = {

        name: 'perfil',
        url: "/perfilInicio",
        templateUrl: 'perfil.ejs'
    }
           var perfilDos = {

        name: 'perfilDos',
        url: "/perfil",
        templateUrl: 'perfilDos.ejs'
    }
    var dashboard = {
        name: 'dashboard',
        url: "/dashboard",
        templateUrl: 'dashboard.ejs'
    }

    var expedientes = {
        name: 'expedientes',
        url: "/expedientes",
        templateUrl: 'expedientes.ejs'
    }


    var reportes =  {
        name: 'reportes',
        url: "/reportes",
        templateUrl: 'reportes.ejs'
    }

    var reportesbecas = {
        name: 'reportesbecas',
        url: "/reportes/becas",
        templateUrl: 'reportesBecas.ejs'
    }


    var reportescomedor = {
        name: 'reportescomedor',

        url: "/reportes/comedor",
        templateUrl: 'reportesComedor.ejs'
    }


  var reportespreparadurias = {
        name: 'reportespreparadurias',
        url: "/reportes/preparadurias",
        templateUrl: 'reportesPreparadurias.ejs'
    }



    var reportesayudantias = {
        name: 'reportesayudantias',
        url: "/reportes/ayudantias",
        templateUrl: 'reportesAyudantias.ejs'
    }


    var expedientesacademica = {
        name: 'expedientesacademica',
        url: "/expediente/academica",
        templateUrl: 'expedientesacademica.ejs'
    }

    var expedientesdeporte = {
        name: 'expedientesdeporte',
        url: "/expediente/deporte",
        templateUrl: 'expedientesdeporte.ejs'
    }

    var expedientesdiscapacidad= {
            name: 'expedientesdiscapacidad',
            url: "/expediente/discapacidad",
            templateUrl: 'expedientesdiscapacidad.ejs'
        }

     var expedientescomedor= {
            name: 'expedientescomedor',
            url: "/expediente/comedor",
            templateUrl: 'expedientescomedor.ejs'
        }

    var expedientespreparadurias ={
        name:'expedientespreparadurias',
        url: "/expediente/preparadurias",
        templateUrl: 'expedientesPreparaduria.ejs'
    }

   var expedientesayudantia={
        name:'expedientesayudantia',

        url: "/expediente/ayudantias",
        templateUrl: 'expedientesAyudantia.ejs'
    }

    var expedientesinfo =  {
        name: 'expedientesinfo',
        url: "/expedientesInfo/consultar/:ci",
        templateUrl: 'expedientesInfo.ejs'
    }

   var expedientesinfocomedor ={
        name: 'expedientesinfocomedor',
        url: "/expedientesInfoComedor/consultar/:ci",
        templateUrl: 'expedientesInfoComedor.ejs'
    }


   var expedientesinfoayudantia={
        name: 'expedientesinfoayudantia',
        url: "/expedientesInfoAyudantia/consultar/:ci",
        templateUrl: 'expedientesInfoAyudantia.ejs'
    }

   var expedientesinfopreparaduria= {
            name:'expedientespreparaduriax',
            url: "/expedientesInfoPreparaduria/consultar/:ci",
            templateUrl: 'expedientesInfoPreparaduria.ejs'
        }


    var estadisticas = {
                name: 'estadisticas',
                url: "/estadisticas",
                templateUrl: 'estadisticas.ejs'
            }

        
   var estadisticasbeneficios =  {
            name: 'estadisticasbeneficios',
            url: "/estadisticas/becas",
            templateUrl: 'estadisticasBecas.ejs'
        }


    var estadisticascomedor = {
        name: 'estadisticascomedor',
        url: "/estadisticas/comedor",
        templateUrl: 'estadisticasComedor.ejs'
    }


    var estadisticasayudantia =  {
        name: 'estadisticasayudantia',
        url: "/estadisticas/ayudantias",
        templateUrl: 'estadisticasAyudantia.ejs'
    }


    var estadisticaspreparaduria =  {
        name: 'estadisticaspreparaduria',
        url: "/estadisticas/preparadurias",
        templateUrl: 'estadisticasPreparaduria.ejs'
    }

    var pcontrol =  {
        name: 'pcontrol',
        url: "/pcontrol",
        templateUrl: 'pcontrol.ejs'

    }

   var pcontrolregistro = {
        name: 'pcontrolregistro',
        url: "/pcontrol/registro",
        templateUrl: 'PanelControl/panel-registro.ejs'

    }

    var pcontrolbdatos = {
            name: 'pcontrolbdatos',
            url: "/pcontrol/bdatos",
            templateUrl: 'PanelControl/panel-bdatos.ejs'

        }

          var auditar = {
            name: 'auditar',
            url: "/pcontrol/auditoria",
            templateUrl: 'PanelControl/auditoria.ejs'

        }
    
    var pcontrolconsultar = {
            name: 'pcontrolconsultar',
            url: "/pcontrol/consultar",
            templateUrl: 'PanelControl/pcontrolUsuarios.ejs'

        }

     var socialcritica1 =  {
            name: 'socialcritica1',
            url: "/socialcritica",
            templateUrl: 'SocialCritica/socialcritica.ejs'
        }

   var  socialcritica2 = {
            name: 'socialcritica2',
            url: "/socialcritica/registro",
            templateUrl: 'SocialCritica/socialcritica-registro.ejs',

        }
    var socialcritica3 =  {
            name: 'socialcritica3',
            url: "/socialcritica/consultar",
            templateUrl: 'SocialCritica/socialcritica-consulta.ejs',

        }

    var socialcritica4 = {
            name: 'socialcritica4',
            url: "/socialcritica/beneficiado/consultar/:ci",
            templateUrl: 'SocialCritica/cinfoSocialCritica.ejs',

        }


 var socialcritica5 = {
            name: 'socialcritica5',
            url: "/socialcritica/modificardatos/:code",
            templateUrl: 'SocialCritica/socialcritica-modidatos.ejs',

        }

var socialcritica6 = {
            name: 'socialcritica6',
            url: "/socialcritica/estadisticas",
            templateUrl: 'SocialCritica/socialcritica-estadisticas.ejs',

        }
var socialcritica7 =  {
            name:'socialcritica7',
            url: "/socialcritica/reportes",
            templateUrl: 'SocialCritica/socialcritica-reportes.ejs',

        }



    /* ROUTING PARA ACADEMICA*/ /////////////////////////////////////////////////////////////


 var academica1 = {
            name: 'academica1',
            url: "/academica",
            templateUrl: 'Academica/academica.ejs',
        }
 var academica2 =  {
            name: 'academica2',
            url: "/academica/registro",
            templateUrl: 'Academica/academica-registro.ejs',

        }

var academica3 =  {
            name: 'academica3',
            url: "/academica/consultar",
            templateUrl: 'Academica/academica-consulta.ejs',
        }
 var academica4 = {
            name: 'academica4',
            url: "/academica/modificardatos/:code",
            templateUrl: 'Academica/academica-modidatos.ejs',

        }

 var academica5 =  {
            name: 'academica5',
            url: "/academica/beneficiado/consultar/:ci",
            templateUrl: 'Academica/cinfoAcademica.ejs',
        }


  var academica6 = {
        name: 'academica6',
        url: "/academica/reportes",
        templateUrl: 'Academica/academica-reportes.ejs',

    }


   var academica7 = {
        name: 'academica7',
        url: "/academica/estadisticas",
        templateUrl: 'Academica/academica-estadisticas.ejs',

    }

    /* ROUTING PARA DEPORTE*/ /////////////////////////////////////////////////////////////


    var deporte1 = {
            name: 'deporte1',
            url: "/deporte",
            templateUrl: 'Deporte/deporte.ejs',
        }

      var deporte2 = {
            name: 'deporteRegistro',
            url: "/deporte/registro",
            templateUrl: 'Deporte/deporte-registro.ejs',
        }

    var deporte3 = {
            name: 'deporte3',
            url: "/deporte/consultar",
            templateUrl: 'Deporte/deporte-consulta.ejs',
        }

     var deporte4 = {
            name: 'deporte4',
            url: "/deporte/modificardatos/:code",
            templateUrl: 'Deporte/deporte-modidatos.ejs',
        }
    var deporte5 = {
            name: 'deporte5',
            url: "/deporte/beneficiado/consultar/:ci",
            templateUrl: 'Deporte/cinfoDeporte.ejs',
        }



   var deporte6 = {
        name: 'deporte6',
        url: "/deporte/reportes",
        templateUrl: 'Deporte/deporte-reportes.ejs',

    }


    var deporte7 =  {
        name: 'deporte7',
        url: "/deporte/estadisticas",
        templateUrl: 'Deporte/deporte-estadisticas.ejs',

    }





    /*ROUTING PARA DISCAPACIDAD*/ ///////////////////////////////////

    var discapacidad1 =  {
            name: 'discapacidad1',
            url: "/discapacidad",
            templateUrl: 'Discapacidad/discapacidad.ejs',
        }
    var discapacidad2 = {
            name: 'discapacidad2',
            url: "/discapacidad/registro",
            templateUrl: 'Discapacidad/discapacidad-registro.ejs',

        }

    var discapacidad3 = {
            name: 'discapacidad3',
            url: "/discapacidad/consultar",
            templateUrl: 'Discapacidad/discapacidad-consulta.ejs',

        }

     var discapacidad4 = {
            name: 'discapacidad4',
            url: "/discapacidad/modificardatos/:code",
            templateUrl: 'Discapacidad/discapacidad-modidatos.ejs',

        }
    var discapacidad5 =  {
            name: 'discapacidad5',
            url: "/discapacidad/beneficiado/consultar/:ci",
            templateUrl: 'Discapacidad/cinfoDiscapacidad.ejs',

        }



    var discapacidad6 = {

        name: 'discapacidad6',
        url: "/discapacidad/reportes",
        templateUrl: 'Discapacidad/discapacidad-reportes.ejs',

    }


    var discapacidad7 = {
        name: 'discapacidad7',
        url: "/discapacidad/estadisticas",
        templateUrl: 'Discapacidad/discapacidad-estadisticas.ejs',

    }



    /*ROUTING PARA COMEDOR*/ //////////////////////////////


    var comedor1={
            name: 'comedor1',
            url: "/comedor",
            templateUrl: 'Comedor/comedor.ejs',
        }
    var comedor2 ={
            name: 'comedor2',
            url: "/comedor/registro",
            templateUrl: 'Comedor/comedor-registro.ejs',

        }

   var comedor3= {
            name: 'comedor3',
            url: "/comedor/consultar",
            templateUrl: 'Comedor/comedor-consulta.ejs',

        }

    var comedor4= {
            name: 'comedor4',
            url: "/comedor/modificardatos/:code",
            templateUrl: 'Comedor/comedor-modidatos.ejs',

        }
    var comedor5={
            name: 'comedor5',
            url: "/comedor/beneficiado/consultar/:ci",
            templateUrl: 'Comedor/cinfocomedor.ejs',

        }

   var comedor6 ={
        name: 'comedor6',
        url: "/comedor/estadisticas",
        templateUrl: 'Comedor/comedor-estadisticas.ejs',

    }


   var comedor7={
        name:'comedor7',
        url: "/comedor/reportes",
        templateUrl: 'Comedor/comedor-reportes.ejs',

    }


    //Routing para Preparaduria y ayudantias!!

   var pya1 = {
        name: 'pya1',
        url: "/pya",
        templateUrl: 'PreparaduriaAyudantia/pya.ejs',
    }


    var pya2 = {
        name: 'pya2',

        url: "/pya/registrar/preparaduria",
        templateUrl: 'PreparaduriaAyudantia/registrarPreparaduria.ejs',
    }


    var pya3 = {
        name : 'pya3',
        url: "/pya/consultar/preparaduria",
        templateUrl: 'PreparaduriaAyudantia/consultarPreparaduria.ejs',
    }

    var pya4 =  {
        name : 'pya4',
        url: "/pya/preparaduria/consultar/:ci",
        templateUrl: 'PreparaduriaAyudantia/cinfoPreparaduria.ejs',

    }


    var pya5 = {

        name: 'pya5',
        url: "/pya/preparaduria/modificardatos/:code",
        templateUrl: 'PreparaduriaAyudantia/preparaduria-modidatos.ejs',

    }

    var pya6 = {

        name: 'pya6',
        url: "/pya/reportes/preparaduria",
        templateUrl: 'PreparaduriaAyudantia/preparaduria-reportes.ejs',

    }





    var pya7 = {

        name: 'pya7',
        url: "/pya/registrar/ayudantia",
        templateUrl: 'PreparaduriaAyudantia/registrarAyudantia.ejs',
    }




    var pya8 = {
        name:'pya8',

        url: "/pya/consultar/ayudantia",
        templateUrl: 'PreparaduriaAyudantia/consultarAyudantia.ejs',
    }

   var pya9 = {
    name: 'pya9',

        url: "/pya/ayudantia/consultar/:ci",
        templateUrl: 'PreparaduriaAyudantia/cinfoAyudantia.ejs',

    }


   var pya10 =  {
    name:'pya10',

        url: "/pya/ayudantia/modificardatos/:code",
        templateUrl: 'PreparaduriaAyudantia/ayudantia-modidatos.ejs',

    }

   var pya11 = {
        name: 'pya11',

        url: "/pya/reportes/ayudantia",
        templateUrl: 'PreparaduriaAyudantia/ayudantia-reportes.ejs',

    }

    var pya12  = {
        name:'pya12',

        url: "/pya/estadisticas/ayudantia",
        templateUrl: 'PreparaduriaAyudantia/ayudantia-estadisticas.ejs',

    }


   var pya13 = {
        name: 'pya13',

        url: "/pya/estadisticas/preparaduria",
        templateUrl: 'PreparaduriaAyudantia/preparaduria-estadisticas.ejs',
    }


  $stateProvider.state(main);
  $stateProvider.state(dashboard);
   $stateProvider.state(expedientes);
    $stateProvider.state(reportes);
     $stateProvider.state(reportesbecas);
      $stateProvider.state(reportescomedor);
       $stateProvider.state(reportespreparadurias);
        $stateProvider.state(reportesayudantias);
         $stateProvider.state(expedientesacademica);
          $stateProvider.state(expedientesdeporte);
           $stateProvider.state(expedientesdiscapacidad);
            $stateProvider.state(expedientescomedor);
             $stateProvider.state(expedientespreparadurias);
              $stateProvider.state(expedientesayudantia);
               $stateProvider.state(expedientesinfo);
                $stateProvider.state(expedientesinfocomedor);
                 $stateProvider.state(expedientesinfoayudantia);
                  $stateProvider.state(expedientesinfopreparaduria);
                   $stateProvider.state(estadisticas);
                    $stateProvider.state(estadisticasbeneficios);
                     $stateProvider.state(estadisticascomedor);
                      $stateProvider.state(estadisticasayudantia);
                       $stateProvider.state(estadisticaspreparaduria);
                        $stateProvider.state(pcontrol);
                         $stateProvider.state(pcontrolregistro);
                          $stateProvider.state(pcontrolbdatos);
                           $stateProvider.state(pcontrolconsultar);
                            $stateProvider.state(socialcritica1);
                            $stateProvider.state(socialcritica2);
                            $stateProvider.state(socialcritica3);
                            $stateProvider.state(socialcritica4);
                            $stateProvider.state(socialcritica5);
                            $stateProvider.state(socialcritica6);
                            $stateProvider.state(socialcritica7);
                            $stateProvider.state(academica1);
                            $stateProvider.state(academica2);
                            $stateProvider.state(academica3);
                            $stateProvider.state(academica4);
                            $stateProvider.state(academica5);
                            $stateProvider.state(academica6);
                            $stateProvider.state(academica7);
                            $stateProvider.state(deporte1);
                            $stateProvider.state(deporte2);
                            $stateProvider.state(deporte3);
                            $stateProvider.state(deporte4);
                            $stateProvider.state(deporte5);
                            $stateProvider.state(deporte6);
                            $stateProvider.state(deporte7);
                            $stateProvider.state(discapacidad1);
                            $stateProvider.state(discapacidad2);
                            $stateProvider.state(discapacidad3);
                            $stateProvider.state(discapacidad4);
                            $stateProvider.state(discapacidad5);
                            $stateProvider.state(discapacidad6);
                            $stateProvider.state(discapacidad7);
                            $stateProvider.state(comedor1);
                            $stateProvider.state(comedor2);
                            $stateProvider.state(comedor3);
                            $stateProvider.state(comedor4);
                            $stateProvider.state(comedor5);
                            $stateProvider.state(comedor6);
                            $stateProvider.state(comedor7);
                            $stateProvider.state(pya1);
                             $stateProvider.state(pya2);
                              $stateProvider.state(pya3);
                               $stateProvider.state(pya4);
                                $stateProvider.state(pya5);
                                 $stateProvider.state(pya6);
                                  $stateProvider.state(pya7);
                                   $stateProvider.state(pya8);
                                    $stateProvider.state(pya9);
                                     $stateProvider.state(pya10);
                                      $stateProvider.state(pya11);
                                       $stateProvider.state(pya12);
                                        $stateProvider.state(pya13);
                                        $stateProvider.state(auditar);
                                            $stateProvider.state(perfil);
                                                $stateProvider.state(perfilDos);










});
app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);


app.directive('numbersOnly', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }

            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});


app.directive('nksOnlyNumber', function() {
    return {
        restrict: 'EA',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                var spiltArray = String(newValue).split("");
                if (spiltArray.length === 0) return;
                if (spiltArray.length === 1 && (spiltArray[0] == '-' || spiltArray[0] === '.')) return;
                if (spiltArray.length === 2 && newValue === '-.') return;

                /*Check it is number or not.*/
                if (isNaN(newValue)) {
                    ngModel.$setViewValue(oldValue);
                    ngModel.$render();
                }
            });
        }
    };
});




app.directive('phoneNumber', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, el, atts, ngModel) {

            /* called when model is changed from the input element */
            ngModel.$parsers.unshift(function(viewValue) {

                var numbers = viewValue.replace(/\D/g, ''),
                    char = { 0: '(', 4: ') ', 7: ' - ' };
                numbers = numbers.slice(0, 11);
                viewValue = '';

                for (var i = 0; i < numbers.length; i++) {
                    viewValue += (char[i] || '') + numbers[i];
                }

                // set the input to formatted value
                el.val(viewValue);

                return viewValue;
            });

            /* called when model is changed outside of the input element */
            ngModel.$formatters.push(function(modelValue) {
                return modelValue;
            });



        }
    }
});




(function() {

    app.directive('onlyLettersInput', onlyLettersInput);

    function onlyLettersInput() {
        return {
            require: 'ngModel',
            link: function(scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    var transformedInput = text.replace(/[^a-zñáéíóú A-ZÑÁÉÍÓÚ" "]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                ngModelCtrl.$parsers.push(fromUser);
            }
        };
    };

})();

app.controller('controladorPrincipal', function($scope, $http, $mdToast, $mdDialog, $mdMedia, $window, $filter) {

$scope.primeracceso = $window.primeracceso;

$scope.salir = function(){



    var confirm = $mdDialog.confirm()
          .title('Salir')
          .textContent('¿Esta seguro que desea salir?')
          .ariaLabel('Lucky day')
          .ok('Si')
          .cancel('No');
    $mdDialog.show(confirm).then(function() {
      $window.location.href = 'salir'
    }, function() {
    
    });


}



    $scope.nivel = window.x;



    $scope.PNF = [
        { nombre: 'Administracion' },
        { nombre: 'Agroalimentacion' },
        { nombre: 'Contaduria' },
        { nombre: 'Construccion Civil' },
        { nombre: 'Electricidad' },
        { nombre: 'Quimica' },
        { nombre: 'Instrumentacion' },
        { nombre: 'Informatica' },
        { nombre: 'Mecanica' },
        { nombre: 'Procesos Quimicos' }
    ]

    $scope.trayecto = [

        { nombre: 'I' },
        { nombre: 'II' },
        { nombre: 'III' },
        { nombre: 'IV' }

    ]


    $scope.trimestre = [{
            trimestre: 'I'
        },
        { trimestre: 'II' },
        { trimestre: 'III' }

    ]


    $scope.sexo = [{
            sexo: 'Masculino'
        },
        { sexo: 'Femenino' }

    ]


    $scope.civil = [

        {
            civil: 'Soltero'
        }, {
            civil: 'Casado'
        }

    ]


    $scope.residencia = [

        {
            tipo: 'Familiar'
        }, {
            tipo: 'Particular'
        },
        { tipo: 'Universitaria' }

    ]



    $scope.opcion = [

        {
            opcion: 'Si'
        }, {
            opcion: 'No'
        }

    ]



    $scope.comedores = [
        { comedor: 'Daca' },
        { comedor: 'Federación' },
        { comedor: 'Camila' },
        { comedor: 'Democracia' }
    ]



    $scope.cambiarMunicipio = function(estado) {



        if (estado == 'Falcón') {

            $scope.municipio = [
                { municipio: 'Acosta (San Juan de los Cayos)' },
                { municipio: 'Bolívar (San Luis)' },
                { municipio: 'Buchivacoa (Capatárida)' },
                { municipio: 'Cacique Manaure (Yaracal)' },
                { municipio: 'Carirubana (Punto Fijo)' },
                { municipio: 'Colina (La Vela de Coro)' },
                { municipio: 'Dabajuro (Dabajuro)' },
                { municipio: 'Democracia (Pedregal)' },
                { municipio: 'Falcón (Pueblo Nuevo)' },
                { municipio: 'Federación (Churuguara)' },
                { municipio: 'Jacura (Jacura)' },
                { municipio: 'Los Taques (Santa Cruz de Los Taques)' },
                { municipio: 'Mauroa (Mene de Mauroa)' },
                { municipio: 'Miranda (Santa Ana de Coro)' },
                { municipio: 'Monseñor Iturriza (Chichiriviche)' },
                { municipio: 'Palmasola (Palmasola)' },
                { municipio: 'Petit (Cabure)' },
                { municipio: 'Píritu (Píritu)' },
                { municipio: 'San Francisco (Mirimire)' },
                { municipio: 'Silva (Tucacas)' },
                { municipio: 'Sucre (La Cruz de Taratara)' },
                { municipio: 'Tocópero (Tocópero)' },
                { municipio: 'Unión (Santa Cruz de Bucaral)' },
                { municipio: 'Urumaco (Urumaco)' },
                { municipio: 'Zamora (Puerto Cumarebo)' }

            ];

        };



        if (estado == 'Guarico') {

            $scope.municipio = [
                { municipio: 'Esteros de Camaguan(Camaguan)' },
                { municipio: 'Chaguaramas(Chaguaramas)' },
                { municipio: 'El Socorro (El Socorro)' },
                { municipio: 'Francisco de Miranda (Calabozo)' },
                { municipio: 'José Félix Ribas (Tucupido)' },
                { municipio: 'José Tadeo Monagas (Altagracia de Orituco)' },
                { municipio: 'Juan Germán Roscio (San Juan de Los Morros)' },
                { municipio: 'Julián Mellado (El Sombrero)' },
                { municipio: 'Las Mercedes (Las Mercedes)' },
                { municipio: 'Leonardo Infante (Valle de La Pascua)' },
                { municipio: 'Pedro Zaraza (Zaraza)' },
                { municipio: 'Ortíz (Ortíz)' },
                { municipio: 'San Gerónimo de Guayabal (Guayabal)' },
                { municipio: 'San José de Guaribe (San José de Guaribe)' },
                { municipio: 'Santa María de Ipire (Santa María de Ipire)' }
            ];
        };

        if (estado == 'Lara') {


            $scope.municipio = [

                { municipio: 'Andrés Eloy Blanco (Sanare)' },
                { municipio: 'Crespo (Duaca)' },
                { municipio: 'Iribarren (Barquisimeto)' },
                { municipio: 'Jiménez (Quibor)' },
                { municipio: 'Morán (El Tocuyo)' },
                { municipio: 'Palavecino (Cabudare)' },
                { municipio: 'Simón Planas (Sarare)' },
                { municipio: 'Torres (Carora)' },
                { municipio: 'Urdaneta (Siquisique)' }

            ];

        };

        if (estado == 'Merida') {



            $scope.municipio = [

                { municipio: 'Alberto Adriani (El Vigía)' },
                { municipio: 'Andrés Bello (La Azulita)' },
                { municipio: 'Antonio Pinto Salinas (Santa Cruz de Mora)' },
                { municipio: 'Aricagua (Aricagua)' },
                { municipio: 'Arzobispo Chacón (Canaguá)' },
                { municipio: 'Campo Elías (Ejido)' },
                { municipio: 'Caracciolo Parra Olmedo (Tucaní)' },
                { municipio: 'Cardenal Quintero (Santo Domingo)' },
                { municipio: 'Guaraque (Guaraque)' },
                { municipio: 'Julio César Salas (Arapuey)' },
                { municipio: 'Justo Briceño (Torondoy)' },
                { municipio: 'Libertador (Merida)' },
                { municipio: 'Miranda (Timotes)' },
                { municipio: 'Obispo Ramos de Lora (Santa Elena de Arenales)' },
                { municipio: 'Padre Norega (Santa María de Caparo)' },
                { municipio: 'Pueblo Llano (Pueblo Llano)' },
                { municipio: 'Rangel (Mucuchíes)' },
                { municipio: 'Rivas Dávila (Bailadores)' },
                { municipio: 'Santos Marquina (Tabay)' },
                { municipio: 'Sucre (Lagunillas)' },
                { municipio: 'Tovar (Tovar)' },
                { municipio: 'Tulio Febres Cordero (Nueva Bolivia)' },
                { municipio: 'Zea (Zea)' }
            ]
        }

        if (estado == 'Miranda') {


            $scope.municipio = [

                { municipio: 'Acevedo (Caucagua)' },
                { municipio: 'Andrés Bello (San José de Barlovento)' },
                { municipio: 'Baruta (Baruta)' },
                { municipio: 'Brión (Higuerote)' },
                { municipio: 'Buroz (Mamporal)' },
                { municipio: 'Carrizal (Carrizal)' },
                { municipio: 'Chacao (Chacao)' },
                { municipio: 'Cristóbal Rojas (Charallave)' },
                { municipio: 'El Hatillo (El Hatillo)' },
                { municipio: 'Guaicaipuro (Los Teques)' },
                { municipio: 'Independencia (Santa Teresa del Tuy)' },
                { municipio: 'Lander (Ocumare del Tuy)' },
                { municipio: 'Los Salias (San Antonio de los Altos)' },
                { municipio: 'Páez (Río Chico)' },
                { municipio: 'Paz Castillo (Santa Lucía)' },
                { municipio: 'Pedro Gual (Cúpira)' },
                { municipio: 'Plaza (Guarenas)' },
                { municipio: 'Simón Bolívar (San Francisco de Yare)' },
                { municipio: 'Sucre (Petare)' },
                { municipio: 'Urdaneta (Cúa)' },
                { municipio: 'Zamora (Guatire)' }
            ]
        }
        if (estado == 'Monagas') {


            $scope.municipio = [
                { municipio: 'Acosta (San Antonio de Capayacuar)' },
                { municipio: 'Aguasay (Aguasay)' },
                { municipio: 'Bolívar (Caripito)' },
                { municipio: 'Caripe (Caripe)' },
                { municipio: 'Cedeño (Caicara)' },
                { municipio: 'Ezequiel Zamora (Punta de Mata)' },
                { municipio: 'Libertador (Temblador)' },
                { municipio: 'Maturín (Maturín)' },
                { municipio: 'Piar (Aragua)' },
                { municipio: 'Punceres (Quiriquire)' },
                { municipio: 'Santa Bárbara (Santa Bárbara)' },
                { municipio: 'Sotillo (Barrancas del Orinco)' },
                { municipio: 'Uracoa (Uracoa)' }
            ]
        }
        if (estado == 'Nueva Esparta') {

            $scope.municipio = [
                { municipio: 'Antolín del Campo (La Plaza de Paraguachí)' },
                { municipio: 'Arismendi (La Asunción)' },
                { municipio: 'Díaz (San Juan Bautista)' },
                { municipio: 'García (El Valle del Espíritu Santo)' },
                { municipio: 'Gómez (Santa Ana)' },
                { municipio: 'Maneiro (Pampatar)' },
                { municipio: 'Marcano (Juan Griego)' },
                { municipio: 'Mariño (Porlamar)' },
                { municipio: 'Península de Macanao (Boca de Río)' },
                { municipio: 'Tubores (Punta de Piedras)' },
                { municipio: 'Villalba (San Pedro de Coche)' }
            ]
        }
        if (estado == 'Portuguesa') {


            $scope.municipio = [

                { municipio: 'Agua Blanca (Agua Blanca)' },
                { municipio: 'Araure (Araure)' },
                { municipio: 'Esteller (Píritu)' },
                { municipio: 'Guanare (Guanare)' },
                { municipio: 'Guanarito (Guanarito)' },
                { municipio: 'Monseñor José Vicenti de Unda (Chabasquén de Unda)' },
                { municipio: 'Ospino (Ospino)' },
                { municipio: 'Páez (Acarigua)' },
                { municipio: 'Papelón (Papelón)' },
                { municipio: 'San Genaro de Boconoíto (Boconoíto)' },
                { municipio: 'San Rafael de Onoto (San Rafael de Onoto)' },
                { municipio: 'Santa Rosalía (El Playón)' },
                { municipio: 'Sucre (Biscucuy)' },
                { municipio: 'Turén (Villa Bruzual)' }
            ]
        }
        if (estado == 'Sucre') {


            $scope.municipio = [
                { municipio: 'Andrés Eloy Blanco (Casanay)' },
                { municipio: 'Andrés Mata (San José de Aerocuar)' },
                { municipio: 'Arismendi (Río Caribe)' },
                { municipio: 'Benítez (El Pilar)' },
                { municipio: 'Bermúdez (Carúpano)' },
                { municipio: 'Bolívar (Marigüitar)' },
                { municipio: 'Cajigal (Yaguaraparo)' },
                { municipio: 'Cruz Salmerón Acosta (Araya)' },
                { municipio: 'Libertador (Tunapuy)' },
                { municipio: 'Mariño (Irapa)' },
                { municipio: 'Mejía (San Antonio del Golfo)' },
                { municipio: 'Montes (Cumanacoa)' },
                { municipio: 'Ribero (Cariaco)' },
                { municipio: 'Sucre (Cumaná)' },
                { municipio: 'Valdez (Güiria)' }
            ]
        }
        if (estado == 'Tachira') {


            $scope.municipio = [

                { municipio: 'Andrés Bello(Cordero)' },
                { municipio: 'Antonio Rómulo Costa (Las Mesas)' },
                { municipio: 'Ayacucho (Colón)' },
                { municipio: 'Bolívar (San Antonio del Táchira)' },
                { municipio: 'Cárdenas (Táriba)' },
                { municipio: 'Córdoba (Santa Ana de Táchira)' },
                { municipio: 'Fernández Feo (San Rafael del Piñal)' },
                { municipio: 'Francisco de Miranda (San José de Bolívar)' },
                { municipio: 'García de Hevia (La Fría)' },
                { municipio: 'Guásimos (Palmira)' },
                { municipio: 'Independencia (Capacho Nuevo)' },
                { municipio: 'Jáuregui (La Grita)' },
                { municipio: 'José María Vargas (El Cobre)' },
                { municipio: 'Junín (Rubio)' },
                { municipio: 'Libertad (Capacho Viejo)' },
                { municipio: 'Libertador (Abejales)' },
                { municipio: 'Lobatera (Lobatera)' },
                { municipio: 'Michelena (Michelena)' },
                { municipio: 'Panamericano (Coloncito)' },
                { municipio: 'Pedro María Ureña (Ureña)' },
                { municipio: 'Rafael Urdaneta (Delicias)' },
                { municipio: 'Samuel Darío Maldonado (La Tendida)' },
                { municipio: 'San Cristóbal (San Cristóbal)' },
                { municipio: 'Seboruco (Seboruco)' },
                { municipio: 'Simón Rodríguez (San Simón)' },
                { municipio: 'Sucre (Queniquea)' },
                { municipio: 'Torbes (San Josecito)' },
                { municipio: 'Uribante (Pregonero)' },
                { municipio: 'San Judas Tadeo (Umoquena)' }
            ]
        }
        if (estado == 'Trujillo') {


            $scope.municipio = [
                { municipio: 'Andrés Bello (Santa Isabel)' },
                { municipio: 'Boconó (Boconó)' },
                { municipio: 'Bolívar (Sabana Grande)' },
                { municipio: 'Candelaria (Chejendé)' },
                { municipio: 'Carache (Carache)' },
                { municipio: 'Escuque (Escuque)' },
                { municipio: 'José Felipe Márquez Cañizalez (El Paradero)' },
                { municipio: 'Juan Vicente Campos Elías (Campo Elías)' },
                { municipio: 'La Ceiba (Santa Apolonia)' },
                { municipio: 'Miranda (El Dividive)' },
                { municipio: 'Monte Carmelo (Monte Carmelo)' },
                { municipio: 'Motatán (Motatán)' },
                { municipio: 'Pampán (Pampán)' },
                { municipio: 'Pampanito (Pampanito)' },
                { municipio: 'Rafael Rangel (Betijoque)' },
                { municipio: 'San Rafael de Carvajal (Carvajal)' },
                { municipio: 'Sucre (Sabana de Mendoza)' },
                { municipio: 'Trujillo (Trujillo)' },
                { municipio: 'Urdaneta (La Quebrada)' },
                { municipio: 'Valera (Valera)' }


            ]
        }
        if (estado == 'Vargas') {

            $scope.municipio = [
                { municipio: 'Vargas (La Guaira)' }
            ]
        }
        if (estado == 'Yaracuy') {

            $scope.municipio = [

                { municipio: 'Arístides Bastidas (San Pablo)' },
                { municipio: 'Bolívar (Aroa)' },
                { municipio: 'Bruzual (Chivacoa)' },
                { municipio: 'Cocorote (Cocorote)' },
                { municipio: 'Independencia (Independencia)' },
                { municipio: 'José Antonio Páez (Sabana de Parra)' },
                { municipio: 'La Trinidad (Boraure)' },
                { municipio: 'Manuel Monge (Yumare)' },
                { municipio: 'Nirgua (Nirgua)' },
                { municipio: 'Peña (Yaritagua)' },
                { municipio: 'San Felipe (San Felipe)' },
                { municipio: 'Sucre (Guama)' },
                { municipio: 'Urachiche (Urachiche)' },
                { municipio: 'Veroes (Farriar)' }
            ]

        }
        if (estado == 'Zulia') {


            $scope.municipio = [
                { municipio: 'Almirante Padilla (El Toro)' },
                { municipio: 'Baralt (San Timoteo)' },
                { municipio: 'Cabimas (Cabimas)' },
                { municipio: 'Catatumbo (Encontrados)' },
                { municipio: 'Colón (San Carlos del Zulia)' },
                { municipio: 'Francisco Javier Pulgar (Pueblo Nuevo-El Chivo)' },
                { municipio: 'Jesús Enrique Losada (La Concepción)' },
                { municipio: 'Jesús María Semprún (Casigua El Cubo)' },
                { municipio: 'La Cañada de Urdaneta (Concepción)' },
                { municipio: 'Lagunillas (Ciudat Ojeda)' },
                { municipio: 'Machiques de Perijá (Machiques)' },
                { municipio: 'Mara (San Rafael del Moján)' },
                { municipio: 'Maracaibo (Maracaibo)' },
                { municipio: 'Miranda (Los Puertos de Altagracia)' },
                { municipio: 'Páez (Sinamaica)' },
                { municipio: 'Rosario de Perijá (La Villa del Rosario)' },
                { municipio: 'San Francisco (San Francisco)' },
                { municipio: 'Santa Rita (Santa Rita)' },
                { municipio: 'Simón Bolívar (Tía Juana)' },
                { municipio: 'Sucre (Bobures)' },
                { municipio: 'Valmore Rodríguez (Bachaquero)' }
            ]
        }
        if (estado == 'Distrito Capital') {

            $scope.municipio = [
                { municipio: 'Libertador (Caracas)' }

            ]
        }

        if (estado == 'Amazonas') {

            $scope.municipio = [
                { municipio: 'Alto Orinoco' },
                { municipio: 'Atabapo' },
                { municipio: 'Atures' },
                { municipio: 'Autana' },
                { municipio: 'Manapiare' },
                { municipio: 'Maroa' },
                { municipio: 'Río Negro' }
            ]

        }
        if (estado == 'Anzoátegui') {


            $scope.municipio = [

                { municipio: 'Anaco' },
                { municipio: 'Aragua' },
                { municipio: 'Bolívar' },
                { municipio: 'Bruzual' },
                { municipio: 'Cajigal' },
                { municipio: 'Carvajal' },
                { municipio: 'Diego Bautista Urbaneja' },
                { municipio: 'Freites' },
                { municipio: 'Guanipa' },
                { municipio: 'Guanta' },
                { municipio: 'Independencia' },
                { municipio: 'Libertad' },
                { municipio: 'McGregor' },
                { municipio: 'Miranda' },
                { municipio: 'Monagas' },
                { municipio: 'Peñalver' },
                { municipio: 'Píritu' },
                { municipio: 'San Juan de Capistrano' },
                { municipio: 'Santa Ana' },
                { municipio: 'Simón Rodriguez' },
                { municipio: 'Sotillo' }
            ]


        }
        if (estado == 'Apure') {

            $scope.municipio = [

                { municipio: 'Achaguas' },
                { municipio: 'Biruaca' },
                { municipio: 'Muñoz' },
                { municipio: 'Páez' },
                { municipio: 'Pedro Camejo' },
                { municipio: 'Rómulo Gallegos' },
                { municipio: 'San Fernando' }
            ]
        }
        if (estado == 'Aragua') {


            $scope.municipio = [

                { municipio: 'Bolívar (San Mateo)' },
                { municipio: 'Camatagua(Camatagua)' },
                { municipio: 'Francisco Linares Alcántara (Santa Rita)' },
                { municipio: 'Girardot (Maracay)' },
                { municipio: 'José Ángel Lamas (Santa Cruz)' },
                { municipio: 'José Félix Ribas (La Victoria)' },
                { municipio: 'José Rafael Revenga (El Consejo)' },
                { municipio: 'Libertador (Palo Negro)' },
                { municipio: 'Mario Briceño Iragorry (El Limón)' },
                { municipio: 'Ocumare de la Costa de Oro (Ocumare de la Costa)' },
                { municipio: 'San Casimiro (San Casimiro)' },
                { municipio: 'San Sebastián (San Sebastián de los Reyes)' },
                { municipio: 'Santiago Mariño (Turmero)' },
                { municipio: 'Santos Michelena (Las Tejerías)' },
                { municipio: 'Sucre (Cagua)' },
                { municipio: 'Tovar (Colonia Tovar)' },
                { municipio: 'Urdaneta (Barbacoas)' },
                { municipio: 'Zamora (Villa de Cura)' }
            ]

        }
        if (estado == 'Barinas') {

            $scope.municipio = [

                { municipio: 'Alberto Arvelo Torrealba (Sabaneta)' },
                { municipio: 'Andrés Eloy Blanco (El Cantón)' },
                { municipio: 'Antonio José de Sucre (Socopó)' },
                { municipio: 'Arismendi (Arismendi)' },
                { municipio: 'Barinas (Barinas)' },
                { municipio: 'Bolívar (Barinitas)' },
                { municipio: 'Cruz Paredes (Barrancas)' },
                { municipio: 'Ezequiel Zamora (Santa Bárbara)' },
                { municipio: 'Obispos (Obispos)' },
                { municipio: 'Pedraza (Ciudad Bolivia)' },
                { municipio: 'Rojas (Libertad)' },
                { municipio: 'Sosa (Ciudad de Nutrias)' }

            ]


        }
        if ($scope.municipio.estado == 'Bolívar') {

            $scope.municipio = [

                { municipio: 'Caroní (Ciudad Guayana)' },
                { municipio: 'Cedeño (Caicara del Orinoco)' },
                { municipio: 'El Callao (El Callao)' },
                { municipio: 'Gran Sabana (Santa Elena de Uairén)' },
                { municipio: 'Heres (Ciudad Bolívar)' },
                { municipio: 'Piar (Upata)' },
                { municipio: 'Raúl Leoni (Ciudad Piar)' },
                { municipio: 'Roscio (Guasipati)' },
                { municipio: 'Sifontes (Tumeremo)' },
                { municipio: 'Sucre (Maripa)' },
                { municipio: 'Padre Pedro Chen (El Palmar)' }

            ]
        }
        if (estado == 'Carabobo') {

            $scope.municipio = [

                { municipio: 'Bejuma (Bejuma)' },
                { municipio: 'Carlos Arvelo (Güigüe)' },
                { municipio: 'Diego Ibarra (Mariara)' },
                { municipio: 'Guacara (Guacara)' },
                { municipio: 'Juan José Mora (Morón)' },
                { municipio: 'Libertador (Tocuyito)' },
                { municipio: 'Los Guayos (Los Guayos)' },
                { municipio: 'Miranda (Miranda)' },
                { municipio: 'Montalbán (Montalbán)' },
                { municipio: 'Naguanagua (Naguanagua)' },
                { municipio: 'Puerto Cabello (Puerto Cabello)' },
                { municipio: 'San Diego (San Diego)' },
                { municipio: 'San Joaquín (San Joaquín)' },
                { municipio: 'Valencia (Valencia)' }

            ]

        }
        if (estado == 'Cojedes') {

            $scope.municipio = [

                { municipio: 'Anzoátegui (Cojedes)' },
                { municipio: 'Falcón (Tinaquillo)' },
                { municipio: 'Girardot (El Baúl)' },
                { municipio: 'Lima Blanco (Macapo)' },
                { municipio: 'Pao de San Juan Bautista (El Pao)' },
                { municipio: 'Ricaurte (Libertad)' },
                { municipio: 'Rómulo Gallegos' }

            ]

        }
        if (estado == 'Delta Amacuro') {

            $scope.municipio = [
                { municipio: 'Antonio Díaz (Curiapo)' },
                { municipio: 'Casacoima (Sierra Imataca)' },
                { municipio: 'Pedernales (Pedernales)' },
                { municipio: 'Tucupita (Tucupita)' }

            ]

        }






    };

    $scope.estado = [

        { estado: 'Distrito Capital' },
        { estado: 'Amazonas' },
        { estado: 'Anzoátegui' },
        { estado: 'Apure' },
        { estado: 'Aragua' },
        { estado: 'Barinas' },
        { estado: 'Bolívar' },
        { estado: 'Carabobo' },
        { estado: 'Cojedes' },
        { estado: 'Delta Amacuro' },
        { estado: 'Falcón' },
        { estado: 'Guarico' },
        { estado: 'Lara' },
        { estado: 'Merida' },
        { estado: 'Miranda' },
        { estado: 'Monagas' },
        { estado: 'Nueva Esparta' },
        { estado: 'Portuguesa' },
        { estado: 'Sucre' },
        { estado: 'Tachira' },
        { estado: 'Trujillo' },
        { estado: 'Vargas' },
        { estado: 'Yaracuy' },
        { estado: 'Zulia' }
    ]








})


app.controller('consultaUsuariosPcontrol', function($scope, $http, $stateParams, $mdDialog, $window, $mdMedia, $mdToast) {


    $http.get('/consultarPanelUsuarios').then(function(data) {



        $scope.usuarios = data.data;



        for (var x in $scope.usuarios) {


            switch ($scope.usuarios[x].tipo) {



                case 1:
                    $scope.usuarios[x].tipo = "Editor";
                    break;
                case 0:
                    $scope.usuarios[x].tipo = "Consultor";
                    break;
                case 3:
                    $scope.usuarios[x].tipo = "Administrador";

            }

        }



    })



    $scope.actualizarUsuario = function() {


        if ($scope.usuario.tipo == undefined)

        {

            $scope.user = {

                pass: $scope.usuario.pass,
                ide: $scope.usuario.ide
            }
        } else {



            $scope.user = {


                pass: $scope.usuario.pass,
                tipo: $scope.usuario.tipo,
                ide: $scope.usuario.ide

            }
        }
        $http.post('/actualizarUsuario', $scope.user).then(function(respuesta) {


            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Modificacion exitosa')
                .textContent('Modificacion realizada exitosamente')
                .ariaLabel('Alert Dialog Demo')
                .ok('Entendido.')

            );



        })




    }


    $scope.eliminar = function(ide) {


        $http.delete('/eliminarUsuario', { params: { id: ide } }).then(function(data) {


            $mdToast.show(
                $mdToast.simple()
                .textContent('Usuario Eliminado')
                .hideDelay(3000)
            );
            location.reload();



        })


    }



        $scope.desbloquear = function(ide) {


   


    $http.get('/desbloquear', {params: { ide: ide}}).then(function(response){

        if(response.data == 1){


 alert("Usuario desbloqueado");
            location.reload();
    

}
})



}

$scope.desbloquearRespuesta = function(ide){
        $http.get('/desbloquearRespuesta', {params: { ide: ide}}).then(function(response){

        if(response.data == 1){


 alert("Intentos respuesta secreta restaurados");
            location.reload();
    

}
})
}

    

});

app.controller('expedientesInfo', function($scope, $http, $stateParams, $mdDialog, $window) {




    $scope.cedula = $stateParams.ci;
    $scope.infobeneficiado;

    $http.get('/consultaInfoExpedientes', { params: { cedula: $scope.cedula } }).then(function(data) {


        $scope.infobeneficiado = data.data;

    })

    $scope.eliminar = function() {


        $http.delete('eliminarExpediente', { params: { cedula: $scope.cedula } }).then(function(data) {

            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('¡Exito!')
                .textContent('Beneficiario eliminado.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Entendido!')
            );

            $window.location.href = 'dashboard#/expedientes'

        });



    }

    $scope.restaurar = function() {

        data = {

            nombres: $scope.infobeneficiado[0].nombres,
            apellidos: $scope.infobeneficiado[0].apellidos,
            cedula: $scope.infobeneficiado[0].cedula,
            tipocedula:$scope.infobeneficiado[0].tipocedula,
            codigo: $scope.infobeneficiado[0].codigo,
            pnf: $scope.infobeneficiado[0].pnf,
            trayecto: $scope.infobeneficiado[0].trayecto,
            trimestre: $scope.infobeneficiado[0].trimestre,
            sexo: $scope.infobeneficiado[0].sexo,
            estado: $scope.infobeneficiado[0].estado,
            municipio: $scope.infobeneficiado[0].municipio,
            fecnac: $scope.infobeneficiado[0].fecnac,
            correo: $scope.infobeneficiado[0].correo,
            facebook: $scope.infobeneficiado[0].facebook,
            twitter: $scope.infobeneficiado[0].twitter,
            telefono: $scope.infobeneficiado[0].telefono,
            residencia: $scope.infobeneficiado[0].residencia,
            civil: $scope.infobeneficiado[0].civil,
            residencia2: $scope.infobeneficiado[0].residencia2,
            paga: $scope.infobeneficiado[0].paga,
            monto: $scope.infobeneficiado[0].monto,
            viaja: $scope.infobeneficiado[0].viaja,
            tlocal: $scope.infobeneficiado[0].tlocal,
            tprocedencia: $scope.infobeneficiado[0].tprocedencia,
            trabaja: $scope.infobeneficiado[0].trabaja,
            direcciontrabajo: $scope.infobeneficiado[0].direcciontrabajo,
            ingreso: $scope.infobeneficiado[0].ingreso,
            aportes: $scope.infobeneficiado[0].aportes,
            asignan: $scope.infobeneficiado[0].asignan,
            direccionfamiliar: $scope.infobeneficiado[0].direccionfamiliar,
            apellidonombre1: $scope.infobeneficiado[0].apellidonombre1,
            parentesco1: $scope.infobeneficiado[0].parentesco1,
            edad1: $scope.infobeneficiado[0].edad1,
            instruccion1: $scope.infobeneficiado[0].instruccion1,
            ocupacion1: $scope.infobeneficiado[0].ocupacion1,
            ingreso1: $scope.infobeneficiado[0].ingreso1,
            apellidonombre2: $scope.infobeneficiado[0].apellidonombre2,
            parentesco2: $scope.infobeneficiado[0].parentesco2,
            edad2: $scope.infobeneficiado[0].edad2,
            instruccion2: $scope.infobeneficiado[0].instruccion2,
            ocupacion2: $scope.infobeneficiado[0].ocupacion2,
            ingreso2: $scope.infobeneficiado[0].ingreso2,
            apellidonombre3: $scope.infobeneficiado[0].apellidonombre3,
            parentesco3: $scope.infobeneficiado[0].parentesco3,
            edad3: $scope.infobeneficiado[0].edad3,
            instruccion3: $scope.infobeneficiado[0].instruccion3,
            ocupacion3: $scope.infobeneficiado[0].ocupacion3,
            ingreso3: $scope.infobeneficiado[0].ingreso3,
            apellidonombre4: $scope.infobeneficiado[0].apellidonombre4,
            parentesco4: $scope.infobeneficiado[0].parentesco4,
            edad4: $scope.infobeneficiado[0].edad4,
            instruccion4: $scope.infobeneficiado[0].instruccion4,
            ocupacion4: $scope.infobeneficiado[0].ocupacion4,
            ingreso4: $scope.infobeneficiado[0].ingreso4,
            apellidonombre5: $scope.infobeneficiado[0].apellidonombre5,
            parentesco5: $scope.infobeneficiado[0].parentesco5,
            edad5: $scope.infobeneficiado[0].edad5,
            instruccion5: $scope.infobeneficiado[0].instruccion5,
            ocupacion5: $scope.infobeneficiado[0].ocupacion5,
            ingreso5: $scope.infobeneficiado[0].ingreso5,
            apellidonombre6: $scope.infobeneficiado[0].apellidonombre6,
            parentesco6: $scope.infobeneficiado[0].parentesco6,
            edad6: $scope.infobeneficiado[0].edad6,
            instruccion6: $scope.infobeneficiado[0].instruccion6,
            ocupacion6: $scope.infobeneficiado[0].ocupacion6,
            ingreso6: $scope.infobeneficiado[0].ingreso6,
            apellidonombre7: $scope.infobeneficiado[0].apellidonombre7,
            parentesco7: $scope.infobeneficiado[0].parentesco7,
            edad7: $scope.infobeneficiado[0].edad7,
            instruccion7: $scope.infobeneficiado[0].instruccion7,
            ocupacion7: $scope.infobeneficiado[0].ocupacion7,
            ingreso7: $scope.infobeneficiado[0].ingreso7,
            apellidonombre8: $scope.infobeneficiado[0].apellidonombre8,
            parentesco8: $scope.infobeneficiado[0].parentesco8,
            edad8: $scope.infobeneficiado[0].edad8,
            instruccion8: $scope.infobeneficiado[0].instruccion8,
            ocupacion8: $scope.infobeneficiado[0].ocupacion8,
            ingreso8: $scope.infobeneficiado[0].ingreso8,
            recomendaciones: $scope.infobeneficiado[0].recomendaciones,
            historial: $scope.infobeneficiado[0].historial,
            horario: $scope.infobeneficiado[0].horario,
            foto: $scope.infobeneficiado[0].foto,
            copiacedula: $scope.infobeneficiado[0].copiacedula,
            beneficio: $scope.infobeneficiado[0].beneficio,
            persona: $scope.infobeneficiado[0].persona,
            modificadoPor: $scope.infobeneficiado[0].modificadoPor


        };

        $http.post('/moveraBeneficio', data).then(function(respuesta) {

            $http.delete('eliminarExpediente', { params: { cedula: $scope.cedula } }).then(function(data) {

                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('¡Exito!')
                    .textContent('Beneficiario movido  a expedientes.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Entendido!')
                );

                $window.location.href = 'dashboard#/expedientes'

            });

        })


    }





})



app.controller('expedientesInfoAyudantia', function($scope, $http, $stateParams, $mdDialog, $window) {




    $scope.cedula = $stateParams.ci;
    $scope.infobeneficiado;

    $http.get('/consultaInfoExpedientes', { params: { cedula: $scope.cedula } }).then(function(data) {


        $scope.infobeneficiado = data.data;

    })

    $scope.eliminar = function() {


        $http.delete('eliminarExpediente', { params: { cedula: $scope.cedula } }).then(function(data) {

            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('¡Exito!')
                .textContent('Beneficiario eliminado.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Entendido!')
            );

            $window.location.href = 'dashboard#/expedientes'

        });



    }

    $scope.restaurar = function() {

        data = {

            nombres: $scope.infobeneficiado[0].nombres,
            apellidos: $scope.infobeneficiado[0].apellidos,
            cedula: $scope.infobeneficiado[0].cedula,
            tipocedula:$scope.infobeneficiado[0].tipocedula,
            codigo: $scope.infobeneficiado[0].codigo,
            pnf: $scope.infobeneficiado[0].pnf,
            trayecto: $scope.infobeneficiado[0].trayecto,
            trimestre: $scope.infobeneficiado[0].trimestre,
            sexo: $scope.infobeneficiado[0].sexo,
            estado: $scope.infobeneficiado[0].estado,
            municipio: $scope.infobeneficiado[0].municipio,
            fecnac: $scope.infobeneficiado[0].fecnac,
            fecinicio: $scope.infobeneficiado[0].fecinicio,
            depasignado: $scope.infobeneficiado[0].depasignado,
            correo: $scope.infobeneficiado[0].correo,
            facebook: $scope.infobeneficiado[0].facebook,
            twitter: $scope.infobeneficiado[0].twitter,
            telefono: $scope.infobeneficiado[0].telefono,
            residencia: $scope.infobeneficiado[0].residencia,
            civil: $scope.infobeneficiado[0].civil,
            residencia2: $scope.infobeneficiado[0].residencia2,
            paga: $scope.infobeneficiado[0].paga,
            monto: $scope.infobeneficiado[0].monto,
            viaja: $scope.infobeneficiado[0].viaja,
            tlocal: $scope.infobeneficiado[0].tlocal,
            tprocedencia: $scope.infobeneficiado[0].tprocedencia,
            trabaja: $scope.infobeneficiado[0].trabaja,
            direcciontrabajo: $scope.infobeneficiado[0].direcciontrabajo,
            ingreso: $scope.infobeneficiado[0].ingreso,
            aportes: $scope.infobeneficiado[0].aportes,
            asignan: $scope.infobeneficiado[0].asignan,
            direccionfamiliar: $scope.infobeneficiado[0].direccionfamiliar,
            apellidonombre1: $scope.infobeneficiado[0].apellidonombre1,
            parentesco1: $scope.infobeneficiado[0].parentesco1,
            edad1: $scope.infobeneficiado[0].edad1,
            instruccion1: $scope.infobeneficiado[0].instruccion1,
            ocupacion1: $scope.infobeneficiado[0].ocupacion1,
            ingreso1: $scope.infobeneficiado[0].ingreso1,
            apellidonombre2: $scope.infobeneficiado[0].apellidonombre2,
            parentesco2: $scope.infobeneficiado[0].parentesco2,
            edad2: $scope.infobeneficiado[0].edad2,
            instruccion2: $scope.infobeneficiado[0].instruccion2,
            ocupacion2: $scope.infobeneficiado[0].ocupacion2,
            ingreso2: $scope.infobeneficiado[0].ingreso2,
            apellidonombre3: $scope.infobeneficiado[0].apellidonombre3,
            parentesco3: $scope.infobeneficiado[0].parentesco3,
            edad3: $scope.infobeneficiado[0].edad3,
            instruccion3: $scope.infobeneficiado[0].instruccion3,
            ocupacion3: $scope.infobeneficiado[0].ocupacion3,
            ingreso3: $scope.infobeneficiado[0].ingreso3,
            apellidonombre4: $scope.infobeneficiado[0].apellidonombre4,
            parentesco4: $scope.infobeneficiado[0].parentesco4,
            edad4: $scope.infobeneficiado[0].edad4,
            instruccion4: $scope.infobeneficiado[0].instruccion4,
            ocupacion4: $scope.infobeneficiado[0].ocupacion4,
            ingreso4: $scope.infobeneficiado[0].ingreso4,
            apellidonombre5: $scope.infobeneficiado[0].apellidonombre5,
            parentesco5: $scope.infobeneficiado[0].parentesco5,
            edad5: $scope.infobeneficiado[0].edad5,
            instruccion5: $scope.infobeneficiado[0].instruccion5,
            ocupacion5: $scope.infobeneficiado[0].ocupacion5,
            ingreso5: $scope.infobeneficiado[0].ingreso5,
            apellidonombre6: $scope.infobeneficiado[0].apellidonombre6,
            parentesco6: $scope.infobeneficiado[0].parentesco6,
            edad6: $scope.infobeneficiado[0].edad6,
            instruccion6: $scope.infobeneficiado[0].instruccion6,
            ocupacion6: $scope.infobeneficiado[0].ocupacion6,
            ingreso6: $scope.infobeneficiado[0].ingreso6,
            apellidonombre7: $scope.infobeneficiado[0].apellidonombre7,
            parentesco7: $scope.infobeneficiado[0].parentesco7,
            edad7: $scope.infobeneficiado[0].edad7,
            instruccion7: $scope.infobeneficiado[0].instruccion7,
            ocupacion7: $scope.infobeneficiado[0].ocupacion7,
            ingreso7: $scope.infobeneficiado[0].ingreso7,
            apellidonombre8: $scope.infobeneficiado[0].apellidonombre8,
            parentesco8: $scope.infobeneficiado[0].parentesco8,
            edad8: $scope.infobeneficiado[0].edad8,
            instruccion8: $scope.infobeneficiado[0].instruccion8,
            ocupacion8: $scope.infobeneficiado[0].ocupacion8,
            ingreso8: $scope.infobeneficiado[0].ingreso8,
            recomendaciones: $scope.infobeneficiado[0].recomendaciones,
            historial: $scope.infobeneficiado[0].historial,
            horario: $scope.infobeneficiado[0].horario,
            foto: $scope.infobeneficiado[0].foto,
            copiacedula: $scope.infobeneficiado[0].copiacedula,
            beneficio: $scope.infobeneficiado[0].beneficio,
            persona: $scope.infobeneficiado[0].persona,
            modificadoPor: $scope.infobeneficiado[0].modificadoPor


        };

        $http.post('/moveraBeneficioAyudantia', data).then(function(respuesta) {

            $http.delete('eliminarExpediente', { params: { cedula: $scope.cedula } }).then(function(data) {

                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('¡Exito!')
                    .textContent('Beneficiario movido  a expedientes.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Entendido!')
                );

                $window.location.href = 'dashboard#/expedientes'

            });

        })


    }


})


app.controller('expedientesInfoPreparaduria', function($scope, $http, $stateParams, $mdDialog, $window) {




    $scope.cedula = $stateParams.ci;
    $scope.infobeneficiado;

    $http.get('/consultaInfoExpedientes', { params: { cedula: $scope.cedula } }).then(function(data) {


        $scope.infobeneficiado = data.data;

    })

    $scope.eliminar = function() {


        $http.delete('eliminarExpediente', { params: { cedula: $scope.cedula } }).then(function(data) {

            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('¡Exito!')
                .textContent('Beneficiario eliminado.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Entendido!')
            );

            $window.location.href = 'dashboard#/expedientes'

        });



    }

    $scope.restaurar = function() {

        data = {

            nombres: $scope.infobeneficiado[0].nombres,
            apellidos: $scope.infobeneficiado[0].apellidos,
            cedula: $scope.infobeneficiado[0].cedula,
            tipocedula:$scope.infobeneficiado[0].tipocedula,
            codigo: $scope.infobeneficiado[0].codigo,
            pnf: $scope.infobeneficiado[0].pnf,
            trayecto: $scope.infobeneficiado[0].trayecto,
            trimestre: $scope.infobeneficiado[0].trimestre,
            sexo: $scope.infobeneficiado[0].sexo,
            estado: $scope.infobeneficiado[0].estado,
            municipio: $scope.infobeneficiado[0].municipio,
            fecnac: $scope.infobeneficiado[0].fecnac,
            fecinicio: $scope.infobeneficiado[0].fecinicio,
            depasignado: $scope.infobeneficiado[0].depasignado,
            correo: $scope.infobeneficiado[0].correo,
            facebook: $scope.infobeneficiado[0].facebook,
            twitter: $scope.infobeneficiado[0].twitter,
            telefono: $scope.infobeneficiado[0].telefono,
            residencia: $scope.infobeneficiado[0].residencia,
            civil: $scope.infobeneficiado[0].civil,
            residencia2: $scope.infobeneficiado[0].residencia2,
            paga: $scope.infobeneficiado[0].paga,
            monto: $scope.infobeneficiado[0].monto,
            viaja: $scope.infobeneficiado[0].viaja,
            tlocal: $scope.infobeneficiado[0].tlocal,
            tprocedencia: $scope.infobeneficiado[0].tprocedencia,
            trabaja: $scope.infobeneficiado[0].trabaja,
            direcciontrabajo: $scope.infobeneficiado[0].direcciontrabajo,
            ingreso: $scope.infobeneficiado[0].ingreso,
            aportes: $scope.infobeneficiado[0].aportes,
            asignan: $scope.infobeneficiado[0].asignan,
            direccionfamiliar: $scope.infobeneficiado[0].direccionfamiliar,
            apellidonombre1: $scope.infobeneficiado[0].apellidonombre1,
            parentesco1: $scope.infobeneficiado[0].parentesco1,
            edad1: $scope.infobeneficiado[0].edad1,
            instruccion1: $scope.infobeneficiado[0].instruccion1,
            ocupacion1: $scope.infobeneficiado[0].ocupacion1,
            ingreso1: $scope.infobeneficiado[0].ingreso1,
            apellidonombre2: $scope.infobeneficiado[0].apellidonombre2,
            parentesco2: $scope.infobeneficiado[0].parentesco2,
            edad2: $scope.infobeneficiado[0].edad2,
            instruccion2: $scope.infobeneficiado[0].instruccion2,
            ocupacion2: $scope.infobeneficiado[0].ocupacion2,
            ingreso2: $scope.infobeneficiado[0].ingreso2,
            apellidonombre3: $scope.infobeneficiado[0].apellidonombre3,
            parentesco3: $scope.infobeneficiado[0].parentesco3,
            edad3: $scope.infobeneficiado[0].edad3,
            instruccion3: $scope.infobeneficiado[0].instruccion3,
            ocupacion3: $scope.infobeneficiado[0].ocupacion3,
            ingreso3: $scope.infobeneficiado[0].ingreso3,
            apellidonombre4: $scope.infobeneficiado[0].apellidonombre4,
            parentesco4: $scope.infobeneficiado[0].parentesco4,
            edad4: $scope.infobeneficiado[0].edad4,
            instruccion4: $scope.infobeneficiado[0].instruccion4,
            ocupacion4: $scope.infobeneficiado[0].ocupacion4,
            ingreso4: $scope.infobeneficiado[0].ingreso4,
            apellidonombre5: $scope.infobeneficiado[0].apellidonombre5,
            parentesco5: $scope.infobeneficiado[0].parentesco5,
            edad5: $scope.infobeneficiado[0].edad5,
            instruccion5: $scope.infobeneficiado[0].instruccion5,
            ocupacion5: $scope.infobeneficiado[0].ocupacion5,
            ingreso5: $scope.infobeneficiado[0].ingreso5,
            apellidonombre6: $scope.infobeneficiado[0].apellidonombre6,
            parentesco6: $scope.infobeneficiado[0].parentesco6,
            edad6: $scope.infobeneficiado[0].edad6,
            instruccion6: $scope.infobeneficiado[0].instruccion6,
            ocupacion6: $scope.infobeneficiado[0].ocupacion6,
            ingreso6: $scope.infobeneficiado[0].ingreso6,
            apellidonombre7: $scope.infobeneficiado[0].apellidonombre7,
            parentesco7: $scope.infobeneficiado[0].parentesco7,
            edad7: $scope.infobeneficiado[0].edad7,
            instruccion7: $scope.infobeneficiado[0].instruccion7,
            ocupacion7: $scope.infobeneficiado[0].ocupacion7,
            ingreso7: $scope.infobeneficiado[0].ingreso7,
            apellidonombre8: $scope.infobeneficiado[0].apellidonombre8,
            parentesco8: $scope.infobeneficiado[0].parentesco8,
            edad8: $scope.infobeneficiado[0].edad8,
            instruccion8: $scope.infobeneficiado[0].instruccion8,
            ocupacion8: $scope.infobeneficiado[0].ocupacion8,
            ingreso8: $scope.infobeneficiado[0].ingreso8,
            recomendaciones: $scope.infobeneficiado[0].recomendaciones,
            historial: $scope.infobeneficiado[0].historial,
            horario: $scope.infobeneficiado[0].horario,
            foto: $scope.infobeneficiado[0].foto,
            copiacedula: $scope.infobeneficiado[0].copiacedula,
            beneficio: $scope.infobeneficiado[0].beneficio,
            persona: $scope.infobeneficiado[0].persona,
            modificadoPor: $scope.infobeneficiado[0].modificadoPor


        };

        $http.post('/moveraBeneficioPreparaduria', data).then(function(respuesta) {

            $http.delete('eliminarExpediente', { params: { cedula: $scope.cedula } }).then(function(data) {

                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('¡Exito!')
                    .textContent('Beneficiario movido  a expedientes.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Entendido!')
                );

                $window.location.href = 'dashboard#/expedientes'

            });

        })


    }


})



//Controlador Para manejar la info del comedor en los expedientes


app.controller('expedientesInfoComedor', function($scope, $http, $stateParams, $mdDialog, $window) {




    $scope.cedula = $stateParams.ci;
    $scope.infobeneficiado;

    $http.get('/consultaInfoExpedientes', { params: { cedula: $scope.cedula } }).then(function(data) {


        $scope.infobeneficiado = data.data;

    })

    $scope.eliminar = function() {


        $http.delete('eliminarExpediente', { params: { cedula: $scope.cedula } }).then(function(data) {

            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('¡Exito!')
                .textContent('Beneficiario eliminado.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Entendido!')
            );

            $window.location.href = 'dashboard#/expedientes'

        });



    }

    $scope.restaurar = function() {

        data = {

            nombres: $scope.infobeneficiado[0].nombres,
            apellidos: $scope.infobeneficiado[0].apellidos,
            cedula: $scope.infobeneficiado[0].cedula,
            tipocedula:$scope.infobeneficiado[0].tipocedula,
            codigo: $scope.infobeneficiado[0].codigo,
            pnf: $scope.infobeneficiado[0].pnf,
            trayecto: $scope.infobeneficiado[0].trayecto,
            trimestre: $scope.infobeneficiado[0].trimestre,
            sexo: $scope.infobeneficiado[0].sexo,
            estado: $scope.infobeneficiado[0].estado,
            municipio: $scope.infobeneficiado[0].municipio,
            fecnac: $scope.infobeneficiado[0].fecnac,
            comedor: $scope.infobeneficiado[0].comedor,
            residencia: $scope.infobeneficiado[0].residencia,
            civil: $scope.infobeneficiado[0].civil,
            residencia2: $scope.infobeneficiado[0].residencia2,
            paga: $scope.infobeneficiado[0].paga,
            monto: $scope.infobeneficiado[0].monto,
            viaja: $scope.infobeneficiado[0].viaja,
            tlocal: $scope.infobeneficiado[0].tlocal,
            tprocedencia: $scope.infobeneficiado[0].tprocedencia,
            trabaja: $scope.infobeneficiado[0].trabaja,
            direcciontrabajo: $scope.infobeneficiado[0].direcciontrabajo,
            ingreso: $scope.infobeneficiado[0].ingreso,
            aportes: $scope.infobeneficiado[0].aportes,
            asignan: $scope.infobeneficiado[0].asignan,
            direccionfamiliar: $scope.infobeneficiado[0].direccionfamiliar,
            apellidonombre1: $scope.infobeneficiado[0].apellidonombre1,
            parentesco1: $scope.infobeneficiado[0].parentesco1,
            edad1: $scope.infobeneficiado[0].edad1,
            instruccion1: $scope.infobeneficiado[0].instruccion1,
            ocupacion1: $scope.infobeneficiado[0].ocupacion1,
            ingreso1: $scope.infobeneficiado[0].ingreso1,
            apellidonombre2: $scope.infobeneficiado[0].apellidonombre2,
            parentesco2: $scope.infobeneficiado[0].parentesco2,
            edad2: $scope.infobeneficiado[0].edad2,
            instruccion2: $scope.infobeneficiado[0].instruccion2,
            ocupacion2: $scope.infobeneficiado[0].ocupacion2,
            ingreso2: $scope.infobeneficiado[0].ingreso2,
            apellidonombre3: $scope.infobeneficiado[0].apellidonombre3,
            parentesco3: $scope.infobeneficiado[0].parentesco3,
            edad3: $scope.infobeneficiado[0].edad3,
            instruccion3: $scope.infobeneficiado[0].instruccion3,
            ocupacion3: $scope.infobeneficiado[0].ocupacion3,
            ingreso3: $scope.infobeneficiado[0].ingreso3,
            apellidonombre4: $scope.infobeneficiado[0].apellidonombre4,
            parentesco4: $scope.infobeneficiado[0].parentesco4,
            edad4: $scope.infobeneficiado[0].edad4,
            instruccion4: $scope.infobeneficiado[0].instruccion4,
            ocupacion4: $scope.infobeneficiado[0].ocupacion4,
            ingreso4: $scope.infobeneficiado[0].ingreso4,
            apellidonombre5: $scope.infobeneficiado[0].apellidonombre5,
            parentesco5: $scope.infobeneficiado[0].parentesco5,
            edad5: $scope.infobeneficiado[0].edad5,
            instruccion5: $scope.infobeneficiado[0].instruccion5,
            ocupacion5: $scope.infobeneficiado[0].ocupacion5,
            ingreso5: $scope.infobeneficiado[0].ingreso5,
            apellidonombre6: $scope.infobeneficiado[0].apellidonombre6,
            parentesco6: $scope.infobeneficiado[0].parentesco6,
            edad6: $scope.infobeneficiado[0].edad6,
            instruccion6: $scope.infobeneficiado[0].instruccion6,
            ocupacion6: $scope.infobeneficiado[0].ocupacion6,
            ingreso6: $scope.infobeneficiado[0].ingreso6,
            apellidonombre7: $scope.infobeneficiado[0].apellidonombre7,
            parentesco7: $scope.infobeneficiado[0].parentesco7,
            edad7: $scope.infobeneficiado[0].edad7,
            instruccion7: $scope.infobeneficiado[0].instruccion7,
            ocupacion7: $scope.infobeneficiado[0].ocupacion7,
            ingreso7: $scope.infobeneficiado[0].ingreso7,
            apellidonombre8: $scope.infobeneficiado[0].apellidonombre8,
            parentesco8: $scope.infobeneficiado[0].parentesco8,
            edad8: $scope.infobeneficiado[0].edad8,
            instruccion8: $scope.infobeneficiado[0].instruccion8,
            ocupacion8: $scope.infobeneficiado[0].ocupacion8,
            ingreso8: $scope.infobeneficiado[0].ingreso8,
            recomendaciones: $scope.infobeneficiado[0].recomendaciones,
            historial: $scope.infobeneficiado[0].historial,
            horario: $scope.infobeneficiado[0].horario,
            foto: $scope.infobeneficiado[0].foto,
            copiacedula: $scope.infobeneficiado[0].copiacedula,
            beneficio: $scope.infobeneficiado[0].beneficio


        };

        $http.post('/moveraBeneficioComedor', data).then(function(respuesta) {

            $http.delete('eliminarExpediente', { params: { cedula: $scope.cedula } }).then(function(data) {

                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('¡Exito!')
                    .textContent('Beneficiario movido  a expedientes.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Entendido!')
                );

                $window.location.href = 'dashboard#/expedientes'

            });

        })


    }


})








/*CONTROLADOR CONSULTAS*/






app.controller('consultaControl', function($scope, $http, $stateParams, $mdDialog, $mdMedia, $window) {



    $scope.cedula = $stateParams.ci;
    $scope.infobeneficiado;

    $http.get('/consultaInfo', { params: { cedula: $scope.cedula } }).then(function(data) {


        $scope.infobeneficiado = data.data;


    })


    $scope.eliminar = function() {



        $http.delete('eliminar', { params: { cedula: $scope.cedula } }).then(function(data) {

            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('¡Exito!')
                .textContent('Beneficiario eliminado.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Entendido!')
            );

            $window.location.href = 'dashboard#/socialcritica/consultar'

        });



    }





    $scope.expedientar = function() {

        data = {

            nombres: $scope.infobeneficiado[0].nombres,
            apellidos: $scope.infobeneficiado[0].apellidos,
            cedula: $scope.infobeneficiado[0].cedula,
            tipocedula:$scope.infobeneficiado[0].tipocedula,
            codigo: $scope.infobeneficiado[0].codigo,
            pnf: $scope.infobeneficiado[0].pnf,
            trayecto: $scope.infobeneficiado[0].trayecto,
            trimestre: $scope.infobeneficiado[0].trimestre,
            sexo: $scope.infobeneficiado[0].sexo,
            estado: $scope.infobeneficiado[0].estado,
            municipio: $scope.infobeneficiado[0].municipio,
            fecnac: $scope.infobeneficiado[0].fecnac,
            correo: $scope.infobeneficiado[0].correo,
            facebook: $scope.infobeneficiado[0].facebook,
            twitter: $scope.infobeneficiado[0].twitter,
            telefono: $scope.infobeneficiado[0].telefono,
            residencia: $scope.infobeneficiado[0].residencia,
            civil: $scope.infobeneficiado[0].civil,
            residencia2: $scope.infobeneficiado[0].residencia2,
            paga: $scope.infobeneficiado[0].paga,
            monto: $scope.infobeneficiado[0].monto,
            viaja: $scope.infobeneficiado[0].viaja,
            tlocal: $scope.infobeneficiado[0].tlocal,
            tprocedencia: $scope.infobeneficiado[0].tprocedencia,
            trabaja: $scope.infobeneficiado[0].trabaja,
            direcciontrabajo: $scope.infobeneficiado[0].direcciontrabajo,
            ingreso: $scope.infobeneficiado[0].ingreso,
            aportes: $scope.infobeneficiado[0].aportes,
            asignan: $scope.infobeneficiado[0].asignan,
            direccionfamiliar: $scope.infobeneficiado[0].direccionfamiliar,
            apellidonombre1: $scope.infobeneficiado[0].apellidonombre1,
            parentesco1: $scope.infobeneficiado[0].parentesco1,
            edad1: $scope.infobeneficiado[0].edad1,
            instruccion1: $scope.infobeneficiado[0].instruccion1,
            ocupacion1: $scope.infobeneficiado[0].ocupacion1,
            ingreso1: $scope.infobeneficiado[0].ingreso1,
            apellidonombre2: $scope.infobeneficiado[0].apellidonombre2,
            parentesco2: $scope.infobeneficiado[0].parentesco2,
            edad2: $scope.infobeneficiado[0].edad2,
            instruccion2: $scope.infobeneficiado[0].instruccion2,
            ocupacion2: $scope.infobeneficiado[0].ocupacion2,
            ingreso2: $scope.infobeneficiado[0].ingreso2,
            apellidonombre3: $scope.infobeneficiado[0].apellidonombre3,
            parentesco3: $scope.infobeneficiado[0].parentesco3,
            edad3: $scope.infobeneficiado[0].edad3,
            instruccion3: $scope.infobeneficiado[0].instruccion3,
            ocupacion3: $scope.infobeneficiado[0].ocupacion3,
            ingreso3: $scope.infobeneficiado[0].ingreso3,
            apellidonombre4: $scope.infobeneficiado[0].apellidonombre4,
            parentesco4: $scope.infobeneficiado[0].parentesco4,
            edad4: $scope.infobeneficiado[0].edad4,
            instruccion4: $scope.infobeneficiado[0].instruccion4,
            ocupacion4: $scope.infobeneficiado[0].ocupacion4,
            ingreso4: $scope.infobeneficiado[0].ingreso4,
            apellidonombre5: $scope.infobeneficiado[0].apellidonombre5,
            parentesco5: $scope.infobeneficiado[0].parentesco5,
            edad5: $scope.infobeneficiado[0].edad5,
            instruccion5: $scope.infobeneficiado[0].instruccion5,
            ocupacion5: $scope.infobeneficiado[0].ocupacion5,
            ingreso5: $scope.infobeneficiado[0].ingreso5,
            apellidonombre6: $scope.infobeneficiado[0].apellidonombre6,
            parentesco6: $scope.infobeneficiado[0].parentesco6,
            edad6: $scope.infobeneficiado[0].edad6,
            instruccion6: $scope.infobeneficiado[0].instruccion6,
            ocupacion6: $scope.infobeneficiado[0].ocupacion6,
            ingreso6: $scope.infobeneficiado[0].ingreso6,
            apellidonombre7: $scope.infobeneficiado[0].apellidonombre7,
            parentesco7: $scope.infobeneficiado[0].parentesco7,
            edad7: $scope.infobeneficiado[0].edad7,
            instruccion7: $scope.infobeneficiado[0].instruccion7,
            ocupacion7: $scope.infobeneficiado[0].ocupacion7,
            ingreso7: $scope.infobeneficiado[0].ingreso7,
            apellidonombre8: $scope.infobeneficiado[0].apellidonombre8,
            parentesco8: $scope.infobeneficiado[0].parentesco8,
            edad8: $scope.infobeneficiado[0].edad8,
            instruccion8: $scope.infobeneficiado[0].instruccion8,
            ocupacion8: $scope.infobeneficiado[0].ocupacion8,
            ingreso8: $scope.infobeneficiado[0].ingreso8,
            recomendaciones: $scope.infobeneficiado[0].recomendaciones,
            historial: $scope.infobeneficiado[0].historial,
            horario: $scope.infobeneficiado[0].horario,
            foto: $scope.infobeneficiado[0].foto,
            copiacedula: $scope.infobeneficiado[0].copiacedula,
            beneficio: $scope.infobeneficiado[0].beneficio


        };

        $http.post('/moverExpediente', data).then(function(respuesta) {

            $http.delete('eliminar', { params: { cedula: $scope.cedula } }).then(function(data) {

                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('¡Exito!')
                    .textContent('Beneficiario movido  a expedientes.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Entendido!')
                );

                $window.location.href = 'dashboard#/socialcritica/consultar'

            });

        })


    }

});





app.controller('expedientessocial', function($http, $scope) {

    var beneficio = 'Social Critica';

    $http.get('/exbeneficiarios', { params: { beneficio: beneficio } }).then(function(data) {



        $scope.exbeneficiarios = data.data;


    })


});


app.controller('expedienteacademica', function($http, $scope) {

    beneficio = 'Academica';

    $http.get('/exbeneficiarios', { params: { beneficio: beneficio } }).then(function(data) {



        $scope.exbeneficiarios = data.data;


    })


});



app.controller('expedientecomedor', function($http, $scope) {

    beneficio = 'Comedor';

    $http.get('/exbeneficiarios', { params: { beneficio: beneficio } }).then(function(data) {



        $scope.exbeneficiarios = data.data;


    })


});


app.controller('expedienteayudantia', function($http, $scope) {

    beneficio = 'Ayudantia';

    $http.get('/exbeneficiarios', { params: { beneficio: beneficio } }).then(function(data) {



        $scope.exbeneficiarios = data.data;


    })


});


app.controller('expedientepreparaduria', function($http, $scope) {

    beneficio = 'Preparaduria';

    $http.get('/exbeneficiarios', { params: { beneficio: beneficio } }).then(function(data) {



        $scope.exbeneficiarios = data.data;


    })


});

app.controller('expedientedeporte', function($http, $scope) {

    beneficio = 'Deporte';

    $http.get('/exbeneficiarios', { params: { beneficio: beneficio } }).then(function(data) {



        $scope.exbeneficiarios = data.data;


    })


});


app.controller('expedientediscapacidad', function($http, $scope) {

    beneficio = 'Discapacidad';

    $http.get('/exbeneficiarios', { params: { beneficio: beneficio } }).then(function(data) {



        $scope.exbeneficiarios = data.data;


    })


});




var logueo = angular.module('logueo', ['ngMaterial']);





logueo.controller('login', function($scope, $http, $window, $mdToast,$sce) {

    var use = $scope;


$http.get('/captcha').then(function(data){
   $scope.svg = $sce.trustAsHtml(data.data);
    
})
$scope.bloqueado = false;
$scope.respuestaCorrecta = false;

    $scope.showSimpleToast = function() {

        $mdToast.show(
            $mdToast.simple()
            .textContent('Contraseña incorrecta')
            .hideDelay(3000)
        );
    }

        $scope.showSimpleToast4 = function() {

        $mdToast.show(
            $mdToast.simple()
            .textContent('Usuario no se encuentra')
            .hideDelay(3000)
        );
    }


    $scope.showSimpleToast2 = function() {

        $mdToast.show(
            $mdToast.simple()
            .textContent('Llene el formulario')
            .hideDelay(3000)
        );
    }


    $scope.showSimpleToast3 = function() {

        $mdToast.show(
            $mdToast.simple()
            .textContent('INGRESANDO')
            .hideDelay(3000)
        );
    }
        $scope.showSimpleToast5 = function() {

        $mdToast.show(
            $mdToast.simple()
            .textContent('USUARIO BLOQUEADO')
            .hideDelay(3000)
        );
    }



    use.xxx = function() {

        $http.get('/login', { params: { user: $scope.usuario, contrasena: $scope.contrasena, captcha: $scope.captcha } })
            .then(function(response) {
                console.log(response);
                if (response.data == 'clave') {
                    $scope.showSimpleToast();
                } else if (response.data == 'error'){

                    $scope.showSimpleToast4();
                }else if (response.data == 1){

                    $scope.showSimpleToast5();
                    $scope.bloqueado = true;
                }


                else if(response.data.primerLogueo == true){

                    $scope.showSimpleToast3();
                    $window.location.href = 'dashboard#/perfilInicio'
                }

                  else if(response.data.primerLogueo == false){

                    $scope.showSimpleToast3();
                    $scope.bloqueado = false;
                    $window.location.href = 'dashboard#/'
                }
                else if(response.data == 10){
                    alert('Catpcha erroneo');
                    $http.get('/captcha').then(function(data){
   $scope.svg = $sce.trustAsHtml(data.data);
    
})
                }


            })
    }


use.desbloquear = function(){




/*
    $http.get('/desbloquear', {params: { user: $scope.usuario}}).then(function(response){

        console.log(response);

    })*/

}

use.consultarPregunta = function(){

    $http.get('/consultarPregunta',{params:{user: $scope.usuario}}).then(function(response){


        $scope.pregunta = response.data.pregunta;
        $scope.preguntaEncontrada = true;

})
}

use.consultarRespuesta = function(){

$http.get('/compararRespuestas',{params:{user: $scope.usuario, respuesta: $scope.respuesta}}).then(function(response){

 
  if(response.data.codigo == 1){
    $scope.respuestaCorrecta = true;
    $scope.desactivar = true;
    $scope.idGlobal = response.data.ide;

  }else if(response.data.codigo == "2"){
    alert("Respuesta secreta erronea");
  }else if(response.data.codigo == "5"){
    alert("Este usuario a superado el limite de intentos para cambiar su contraseña.");
  }


})

}

use.cambiarContrasena = function(){

    console.log($scope.contrasenaNueva)
    $http.get('/cambiarContrasena',{params:{contrasena:$scope.contrasenaNueva, ide: $scope.idGlobal}}).then(function(response){

        if(response.data == 1){
            alert("Contraseña cambiada satisfactoriamente.")
        }else{
            alert("Problea con el cambio")
        }


    });

}


});



app.controller('reportesGlobal', function($http) {













    $scope.openPdf = function() {






        comedor = $scope.comedor
        $http.get('/beneficiariosC', { params: { comedor: $scope.comedor } }).then(function(data) {
            $scope.beneficiarios = data.data;

            var arreglo = [];
            var arreglomayor = [];


            var docDefinition = {

                content: [
                    { text: 'Listado estudiantes Beca Comedor', style: 'headerprincipal' }, {
                        style: 'demoTable',
                        table: {
                            widths: ['*', '*', '*', '*'],
                            body: [
                                [{ text: 'Nombre', style: 'header' }, { text: 'Apellido', style: 'header' },
                                    { text: 'Pnf', style: 'header' }, { text: 'Comedor', style: 'header' }
                                ],

                            ]
                        }
                    }
                ],
                styles: {
                    header: {
                        bold: true,
                        color: '#000',
                        fontSize: 14
                    },
                    headerprincipal: {

                        bold: true,
                        fontSize: 20,
                        alignment: 'center'
                    },
                    demoTable: {
                        color: '#000',
                        fontSize: 12
                    }
                }
            }

            for (var i = 0; i < $scope.beneficiarios.length; i++) {

                docDefinition.content[1].table.body[i + 1] = [];
                docDefinition.content[1].table.body[i + 1].push($scope.beneficiarios[i].apellidos);
                docDefinition.content[1].table.body[i + 1].push($scope.beneficiarios[i].nombres);
                docDefinition.content[1].table.body[i + 1].push($scope.beneficiarios[i].pnf);
                docDefinition.content[1].table.body[i + 1].push($scope.beneficiarios[i].comedor);
                arreglo = [];
                arreglomayor = [];



            }






            pdfMake.createPdf(docDefinition).open();

        })





    };

    $scope.downloadPdf = function() {
        pdfMake.createPdf(docDefinition).download();
    };




})
