var app = angular.module('bienestar');


app.controller('academicaRegistro', function($scope, $http, $mdToast, $mdDialog, $mdMedia, $window, $filter) {

    $scope.persona = window.nombreGlobal;




    $scope.agregarBeneficiarios = function() {

        var nombre = $scope.formulario.nombres;
        nombre = nombre.substr(0, 1).toUpperCase() + nombre.substr(1);
        var apellido = $scope.formulario.apellidos;
        apellido = apellido.substr(0, 1).toUpperCase() + apellido.substr(1);
          var fecha = new Date($scope.formulario.fecnac);


        data = {

            nombres: nombre,
            apellidos: apellido,
            cedula: $scope.formulario.cedula,
            tipocedula: $scope.formulario.tipocedula,
            codigo: $scope.formulario.codigo,
            pnf: $scope.formulario.pnf,
            trayecto: $scope.formulario.trayecto,
            trimestre: $scope.formulario.trimestre,
            sexo: $scope.formulario.sexo,
            estado: $scope.formulario.estado,
            municipio: $scope.formulario.municipio,
            fecnac: fecha,
            correo: $scope.formulario.correo,
            facebook: $scope.formulario.facebook,
            twitter: $scope.formulario.twitter,
            telefono: $scope.formulario.telefono,
            residencia: $scope.formulario.residencia,
            civil: $scope.formulario.civil,
            residencia2: $scope.formulario.residencia2,
            paga: $scope.formulario.paga,
            monto: $scope.formulario.monto,
            viaja: $scope.formulario.viaja,
            tlocal: $scope.formulario.tlocal,
            tprocedencia: $scope.formulario.tprocedencia,
            trabaja: $scope.formulario.trabaja,
            direcciontrabajo: $scope.formulario.direcciontrabajo,
            ingreso: $scope.formulario.ingreso,
            aportes: $scope.formulario.aportes,
            asignan: $scope.formulario.asignan,
            direccionfamiliar: $scope.formulario.direccionfamiliar,
            apellidonombre1: $scope.formulario.apellidonombre1,
            parentesco1: $scope.formulario.parentesco1,
            edad1: $scope.formulario.edad1,
            instruccion1: $scope.formulario.instruccion1,
            ocupacion1: $scope.formulario.ocupacion1,
            ingreso1: $scope.formulario.ingreso1,
            apellidonombre2: $scope.formulario.apellidonombre2,
            parentesco2: $scope.formulario.parentesco2,
            edad2: $scope.formulario.edad2,
            instruccion2: $scope.formulario.instruccion2,
            ocupacion2: $scope.formulario.ocupacion2,
            ingreso2: $scope.formulario.ingreso2,
            apellidonombre3: $scope.formulario.apellidonombre3,
            parentesco3: $scope.formulario.parentesco3,
            edad3: $scope.formulario.edad3,
            instruccion3: $scope.formulario.instruccion3,
            ocupacion3: $scope.formulario.ocupacion3,
            ingreso3: $scope.formulario.ingreso3,
            apellidonombre4: $scope.formulario.apellidonombre4,
            parentesco4: $scope.formulario.parentesco4,
            edad4: $scope.formulario.edad4,
            instruccion4: $scope.formulario.instruccion4,
            ocupacion4: $scope.formulario.ocupacion4,
            ingreso4: $scope.formulario.ingreso4,
            apellidonombre5: $scope.formulario.apellidonombre5,
            parentesco5: $scope.formulario.parentesco5,
            edad5: $scope.formulario.edad5,
            instruccion5: $scope.formulario.instruccion5,
            ocupacion5: $scope.formulario.ocupacion5,
            ingreso5: $scope.formulario.ingreso5,
            apellidonombre6: $scope.formulario.apellidonombre6,
            parentesco6: $scope.formulario.parentesco6,
            edad6: $scope.formulario.edad6,
            instruccion6: $scope.formulario.instruccion6,
            ocupacion6: $scope.formulario.ocupacion6,
            ingreso6: $scope.formulario.ingreso6,
            apellidonombre7: $scope.formulario.apellidonombre7,
            parentesco7: $scope.formulario.parentesco7,
            edad7: $scope.formulario.edad7,
            instruccion7: $scope.formulario.instruccion7,
            ocupacion7: $scope.formulario.ocupacion7,
            ingreso7: $scope.formulario.ingreso7,
            apellidonombre8: $scope.formulario.apellidonombre8,
            parentesco8: $scope.formulario.parentesco8,
            edad8: $scope.formulario.edad8,
            instruccion8: $scope.formulario.instruccion8,
            ocupacion8: $scope.formulario.ocupacion8,
            ingreso8: $scope.formulario.ingreso8,
            recomendaciones: $scope.formulario.recomendaciones,
            historial: $scope.formulario.historial,
            horario: $scope.formulario.horario,
            foto: $scope.formulario.foto,
            copiacedula: $scope.formulario.copiacedula,
            persona: $scope.persona,
            modificadoPor: $scope.persona,
            beneficio: 'Academica'


        };







        $scope.status = '  ';
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog

        if (data.civil == undefined || data.residencia == undefined || data.paga == undefined || data.monto == undefined ||
            data.viaja == undefined || data.tlocal == undefined || data.tprocedencia == undefined || data.trabaja == undefined ||
            data.direcciontrabajo == undefined || data.ingreso == undefined || data.aportes == undefined || data.asignan == undefined) {
            var confirm = $mdDialog.confirm()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('¡Alerta!')
                .textContent('Olvidaste llenar la informacion de Estudio Social' + '¿Desea registrar al estudiante de todas maneras?')
                .ok('Registrar')
                .cancel('Volver')
            $mdDialog.show(confirm).then(function() {

                $http.get('/verificarExpediente', { params: { cedula: data.cedula } }).then(function(respuesta) {


                    if (respuesta.data == "expediente") {

                        var confirm = $mdDialog.confirm()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('¡Alerta!')
                            .textContent('El estudiante que intenta registrar se encuentra registrado en expediente  ' + '¿Desea eliminarlo de expedientes y actualizar su informacion?')
                            .ok('Mover')
                            .cancel('Volver')
                        $mdDialog.show(confirm).then(function() {

                            $http.delete('/eliminarExpediente', { params: { cedula: $scope.formulario.cedula } }).then(function(data) {});

                            $http.post('/agregar', data).then(function(respuesta) {
                                $mdToast.show(
                                    $mdToast.simple()
                                    .textContent('¡Beneficiario Registrado! ')
                                    .position('bottom')
                                    .hideDelay(3000));
                            });
                            $window.location.href = 'dashboard#/academica'

                        });

                    } else {


                        $http.post('/agregar', data).then(function(respuesta) {


                            if (respuesta.data == "ERROR") {

                                $mdToast.show(
                                    $mdToast.simple()
                                    .textContent('Cedula o codigo ya registrados')
                                    .position('bottom')
                                    .hideDelay(3000)
                                );
                            } else if (respuesta.data == "registrado") {

                                $mdToast.show(
                                    $mdToast.simple()
                                    .textContent('¡Beneficiario Registrado! ')
                                    .position('bottom')
                                    .hideDelay(3000)
                                );


                                var confirm = $mdDialog.confirm()
                                    .parent(angular.element(document.querySelector('#popupContainer')))
                                    .clickOutsideToClose(true)
                                    .title('Exito!')
                                    .textContent('El estudiante ha sido registrado con exito')
                                    .ok('Aceptar')
                                $mdDialog.show(confirm).then(function() {




                                    $window.location.href = 'dashboard#/academica'



                                });





                            }



                        })

                    }
                })



            });





        } else {

            $http.post('/agregar', data).then(function(respuesta) {



                if (respuesta.data == "ERROR") {




                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('Cedula o codigo ya registrados')
                        .position('bottom')
                        .hideDelay(3000)
                    );
                } else if (respuesta.data == "registrado") {


                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('¡Exito!')
                        .textContent('Beneficiario Registrado.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('¡Entendido!')
                    );


                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('¡Beneficiario Registrado! ')
                        .position('bottom')
                        .hideDelay(3000)
                    );

                    $window.location.href = 'dashboard#/academica'

                }
            });
        };


    };

});





app.controller('modificarAcademica', function($scope, $http, $stateParams, $mdDialog, $mdToast, $window, $filter) {



    $scope.prueba = $stateParams.code
    $http.get('/consultaInfoX', { params: { _id: $stateParams.code } }).then(function(data) {

        $scope.infobeneficiado = data.data;
        var fecha2 = new Date($scope.infobeneficiado[0].fecnac);
  
        $scope.formulario = {

            nombre: $scope.infobeneficiado[0].nombres,
            apellido: $scope.infobeneficiado[0].apellidos,
            cedula: $scope.infobeneficiado[0].cedula,
            tipocedula: $scope.infobeneficiado[0].tipocedula,
            codigo: $scope.infobeneficiado[0].codigo,
            pnf: $scope.infobeneficiado[0].pnf,
            trayecto: $scope.infobeneficiado[0].trayecto,
            trimestre: $scope.infobeneficiado[0].trimestre,
            sexo: $scope.infobeneficiado[0].sexo,
            estado: $scope.infobeneficiado[0].estado,
            municipio: $scope.infobeneficiado[0].municipio,
            fecnac: fecha2,
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
            modificadoPor: $scope.infobeneficiado[0].modificadoPor,
            copiacedula: $scope.infobeneficiado[0].copiacedula
        }




    })


    /*Esta funcion envia los datos recuperados para ACTUALIZAR al Beneficiado*/
    $scope.actualizarBeneficiario = function() {
        $scope.persona = window.nombreGlobal;
        $scope.x = 5;

        $scope.informacion = {

            nombres: $scope.formulario.nombre,
            apellidos: $scope.formulario.apellido,
            cedula: $scope.formulario.cedula,
            tipocedula: $scope.formulario.tipocedula,
            codigo: $scope.formulario.codigo,
            pnf: $scope.formulario.pnf,
            trayecto: $scope.formulario.trayecto,
            trimestre: $scope.formulario.trimestre,
            sexo: $scope.formulario.sexo,
            estado: $scope.formulario.estado,
            municipio: $scope.formulario.municipio,
            fecnac: $scope.formulario.fecnac,
            correo: $scope.formulario.correo,
            facebook: $scope.formulario.facebook,
            twitter: $scope.formulario.twitter,
            telefono: $scope.formulario.telefono,
            residencia: $scope.formulario.residencia,
            civil: $scope.formulario.civil,
            residencia2: $scope.formulario.residencia2,
            paga: $scope.formulario.paga,
            monto: $scope.formulario.monto,
            viaja: $scope.formulario.viaja,
            tlocal: $scope.formulario.tlocal,
            tprocedencia: $scope.formulario.tprocedencia,
            trabaja: $scope.formulario.trabaja,
            direcciontrabajo: $scope.formulario.direcciontrabajo,
            ingreso: $scope.formulario.ingreso,
            aportes: $scope.formulario.aportes,
            asignan: $scope.formulario.asignan,
            direccionfamiliar: $scope.formulario.direccionfamiliar,
            apellidonombre1: $scope.formulario.apellidonombre1,
            parentesco1: $scope.formulario.parentesco1,
            edad1: $scope.formulario.edad1,
            instruccion1: $scope.formulario.instruccion1,
            ocupacion1: $scope.formulario.ocupacion1,
            ingreso1: $scope.formulario.ingreso1,
            apellidonombre2: $scope.formulario.apellidonombre2,
            parentesco2: $scope.formulario.parentesco2,
            edad2: $scope.formulario.edad2,
            instruccion2: $scope.formulario.instruccion2,
            ocupacion2: $scope.formulario.ocupacion2,
            ingreso2: $scope.formulario.ingreso2,
            apellidonombre3: $scope.formulario.apellidonombre3,
            parentesco3: $scope.formulario.parentesco3,
            edad3: $scope.formulario.edad3,
            instruccion3: $scope.formulario.instruccion3,
            ocupacion3: $scope.formulario.ocupacion3,
            ingreso3: $scope.formulario.ingreso3,
            apellidonombre4: $scope.formulario.apellidonombre4,
            parentesco4: $scope.formulario.parentesco4,
            edad4: $scope.formulario.edad4,
            instruccion4: $scope.formulario.instruccion4,
            ocupacion4: $scope.formulario.ocupacion4,
            ingreso4: $scope.formulario.ingreso4,
            apellidonombre5: $scope.formulario.apellidonombre5,
            parentesco5: $scope.formulario.parentesco5,
            edad5: $scope.formulario.edad5,
            instruccion5: $scope.formulario.instruccion5,
            ocupacion5: $scope.formulario.ocupacion5,
            ingreso5: $scope.formulario.ingreso5,
            apellidonombre6: $scope.formulario.apellidonombre6,
            parentesco6: $scope.formulario.parentesco6,
            edad6: $scope.formulario.edad6,
            instruccion6: $scope.formulario.instruccion6,
            ocupacion6: $scope.formulario.ocupacion6,
            ingreso6: $scope.formulario.ingreso6,
            apellidonombre7: $scope.formulario.apellidonombre7,
            parentesco7: $scope.formulario.parentesco7,
            edad7: $scope.formulario.edad7,
            instruccion7: $scope.formulario.instruccion7,
            ocupacion7: $scope.formulario.ocupacion7,
            ingreso7: $scope.formulario.ingreso7,
            apellidonombre8: $scope.formulario.apellidonombre8,
            parentesco8: $scope.formulario.parentesco8,
            edad8: $scope.formulario.edad8,
            instruccion8: $scope.formulario.instruccion8,
            ocupacion8: $scope.formulario.ocupacion8,
            ingreso8: $scope.formulario.ingreso8,
            recomendaciones: $scope.formulario.recomendaciones,
            historial: $scope.formulario.historial,
            horario: $scope.formulario.horario,
            foto: $scope.formulario.foto,
            copiacedula: $scope.formulario.copiacedula,
            modificadoPor: $scope.persona,
            _id: $stateParams.code
        };


        $http.post('/actualizar', $scope.informacion).then(function(respuesta) {



 if (respuesta.data=='Error') {

                  $mdToast.show(
                $mdToast.simple()
                .textContent('Error, cedula o codigo ya registrados. ')
                .position('bottom')
                .hideDelay(3000)
            );
         }else{



            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('¡Exito!')
                .textContent('Beneficiario Modificado.')
                .ariaLabel('Alert Dialog Demo')
                .ok('¡Entendido!')
            );


            $mdToast.show(
                $mdToast.simple()
                .textContent('¡Beneficiario Modificado! ')
                .position('bottom')
                .hideDelay(3000)
            );
            }

            $window.location.href = 'dashboard#/academica/consultar'

        });



    }
});




app.controller('consultaAcademica', function($scope, $http, $mdDialog, $window) {






    $scope.beneficiarios = [];
    $scope.beneficio = 'Academica';

    $http.get('/beneficiarios', { params: { beneficio: $scope.beneficio } }).then(function(data) {



        $scope.beneficiarios = data.data;

    })



    $scope.eliminar = function(cedula) {


        $http.delete('eliminar', { params: { cedula: cedula } }).then(function(data) {


            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('¡Exito!')
                .textContent('Beneficiario eliminado.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Entendido!')

            );
            $window.location.reload();

        });


    };


    $scope.expedientar = function(cedula) {


        $http.get('/consultaInfo', { params: { cedula: cedula } }).then(function(data) {


            $scope.infobeneficiado = data.data;


            data = {

                nombres: $scope.infobeneficiado[0].nombres,
                apellidos: $scope.infobeneficiado[0].apellidos,
                cedula: $scope.infobeneficiado[0].cedula,
                tipocedula: $scope.infobeneficiado[0].tipocedula,
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


            $http.post('/moverExpediente', data).then(function(respuesta) {

                $http.delete('eliminar', { params: { cedula: cedula } }).then(function(data) {

                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('¡Exito!')
                        .textContent('Beneficiario movido  a expedientes.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Entendido!')
                    );
                    location.reload();

                });

            })


        })

    }

});



app.controller('academicaestadisticas', function($scope, $http) {



    $http.get('/informacion', { params: { beneficio: 'Academica' } }).then(function(data) {


        $scope.totalbeneficiarios = data.data;


    });


    $http.get('/informacion1', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarioshombres = data.data;

    });

    $http.get('/informacion2', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiariosmujeres = data.data;

    });


    $http.get('/informacion3', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarios3 = data.data;

    });


    $http.get('/informacion4', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarios4 = data.data;

    });



    $http.get('/informacion5', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarios5 = data.data;

    });


    $http.get('/informacion6', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarios6 = data.data;

    });


    $http.get('/informacion7', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarios7 = data.data;

    });


    $http.get('/informacion8', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarios8 = data.data;

    });


    $http.get('/informacion9', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarios9 = data.data;

    });



    $http.get('/informacion10', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarios10 = data.data;

    });


    $http.get('/informacion11', { params: { beneficio: 'Academica' } }).then(function(data) {

        $scope.totalbeneficiarios11 = data.data;

    });

})


app.controller('academicaReporte', function($scope, $http) {

    $scope.beneficiarios = [];
    $scope.beneficio = 'Academica';
    $http.get('/beneficiarios', { params: { beneficio: $scope.beneficio } }).then(function(data) {
        $scope.beneficiarios = data.data;

        var arreglo = [];
        var arreglomayor = [];


        var docDefinition = {
            pageMargins: [20, 80, 20, 40],
           header: function(){
                    return{
        margin: 18,
        columns: [
            {
           
                image: 'data:image/png;base64,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',
                width: 100,
                margin: [5, 5, 5, 5]
   



            },{
                text: ' ',
                width: '60%'
            },
                {
                image: 'data:image/jpeg;base64,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',
                width: 100,
                margin: [5, 5, 5, 5]
                }
        ]
    }
},

            content: [
                { text: 'Listado estudiantes Beca Academica', style: 'headerprincipal' }, {
                    style: 'demoTable',
                    table: {
                        widths: ['*', '*', '*', '*', '*'],
                        body: [
                            [{ text: 'Apellidos', style: 'header' }, { text: 'Nombres', style: 'header' },
                                { text: 'Cedula', style: 'header' }, { text: 'PNF', style: 'header' },
                                { text: 'Sexo', style: 'header' }
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
                    fontSize: 10,
                    margin: [0, 0, 0, 0]
                }
            }
        }


        for (var i = 0; i < $scope.beneficiarios.length; i++) {


            docDefinition.content[1].table.body[i + 1] = [];
            docDefinition.content[1].table.body[i + 1].push($scope.beneficiarios[i].apellidos);
            docDefinition.content[1].table.body[i + 1].push($scope.beneficiarios[i].nombres);
            docDefinition.content[1].table.body[i + 1].push($scope.beneficiarios[i].tipocedula + '-' +  $scope.beneficiarios[i].cedula.toString());
            docDefinition.content[1].table.body[i + 1].push($scope.beneficiarios[i].pnf);
            docDefinition.content[1].table.body[i + 1].push($scope.beneficiarios[i].sexo);
            arreglo = [];
            arreglomayor = [];



        }





        $scope.openPdf = function() {

            pdfMake.createPdf(docDefinition).open();
        };

        $scope.downloadPdf = function() {
            pdfMake.createPdf(docDefinition).download();
        };

    })








});
