var app = angular.module('bienestar');



app.controller('estadisticasGlobales',function($scope,$http){



    $http.get('/beneficiariosTodos').then(function(data) {

     
        $scope.totalbeneficiarios = data.data;
      
    });


    $http.get('/informacion1g').then(function(data) {
  
        $scope.totalbeneficiarioshombres = data.data;

    });

    $http.get('/informacion2g').then(function(data) {
      
        $scope.totalbeneficiariosmujeres = data.data;

    });


    $http.get('/informacion3g').then(function(data) {
   
        $scope.totalbeneficiarios3 = data.data;

    });


    $http.get('/informacion4g').then(function(data) {
       
        $scope.totalbeneficiarios4 = data.data;

    });



    $http.get('/informacion5g').then(function(data) {
     
        $scope.totalbeneficiarios5 = data.data;

    });


    $http.get('/informacion6g').then(function(data) {
   
        $scope.totalbeneficiarios6 = data.data;

    });


    $http.get('/informacion7g').then(function(data) {
 
        $scope.totalbeneficiarios7 = data.data;

    });


    $http.get('/informacion8g').then(function(data) {

        $scope.totalbeneficiarios8 = data.data;

    });


    $http.get('/informacion9g').then(function(data) {

        $scope.totalbeneficiarios9 = data.data;

    });



    $http.get('/informacion10g').then(function(data) {

        $scope.totalbeneficiarios10 = data.data;

    });


       $http.get('/informacion11g').then(function(data) {

        $scope.totalbeneficiarios11 = data.data;

    });


})



app.controller('estadisticasGlobalesComedor',function($scope,$http){




    $http.get('/informacioncomedor').then(function(data) {


        $scope.totalbeneficiarios = data.data;


    });


    $http.get('/informacion1comedor').then(function(data) {

        $scope.totalbeneficiarioshombres = data.data;

    });

    $http.get('/informacion2comedor').then(function(data) {

        $scope.totalbeneficiariosmujeres = data.data;

    });


    $http.get('/informacion3comedor').then(function(data) {

        $scope.totalbeneficiarios3 = data.data;

    });


    $http.get('/informacion4comedor').then(function(data) {

        $scope.totalbeneficiarios4 = data.data;

    });



    $http.get('/informacion5comedor').then(function(data) {

        $scope.totalbeneficiarios5 = data.data;

    });


    $http.get('/informacion6comedor').then(function(data) {

        $scope.totalbeneficiarios6 = data.data;

    });


    $http.get('/informacion7comedor').then(function(data) {

        $scope.totalbeneficiarios7 = data.data;

    });


    $http.get('/informacion8comedor').then(function(data) {

        $scope.totalbeneficiarios8 = data.data;

    });


    $http.get('/informacion9comedor').then(function(data) {

        $scope.totalbeneficiarios9 = data.data;

    });



    $http.get('/informacion10comedor').then(function(data) {

        $scope.totalbeneficiarios10 = data.data;

    });


    $http.get('/informacion11comedor').then(function(data) {

        $scope.totalbeneficiarios11 = data.data;

    });

    $http.get('/informaciondacacomedor', { params: { comedor: 'Daca' } }).then(function(data) {

        $scope.totalbeneficiariosdaca = data.data;

    });

    $http.get('/informacionfederacioncomedor', { params: { comedor: 'Federación' } }).then(function(data) {

        $scope.totalbeneficiariosfederacion = data.data;

    });



    $http.get('/informacioncamilacomedor', { params: { comedor: 'Camila' } }).then(function(data) {

        $scope.totalbeneficiarioscamila = data.data;

    });


    $http.get('/informaciondemocraciacomedor', { params: { comedor: 'Democracia' } }).then(function(data) {

        $scope.totalbeneficiariosdemocracia = data.data;

    });



})



app.controller('estadisticasGlobalesAyudantia',function($scope, $http, $stateParams, $mdDialog, $mdToast, $window, $filter){



    $http.get('/informacionayudantia').then(function(data) {

        $scope.totalbeneficiarios = data.data;

    });


    $http.get('/informacion1ayudantia').then(function(data) {

        $scope.totalbeneficiarioshombres = data.data;

    });

    $http.get('/informacion2ayudantia').then(function(data) {

        $scope.totalbeneficiariosmujeres = data.data;

    });


    $http.get('/informacion3ayudantia').then(function(data) {

        $scope.totalbeneficiarios3 = data.data;

    });


    $http.get('/informacion4ayudantia').then(function(data) {

        $scope.totalbeneficiarios4 = data.data;

    });



    $http.get('/informacion5ayudantia').then(function(data) {

        $scope.totalbeneficiarios5 = data.data;

    });


    $http.get('/informacion6ayudantia').then(function(data) {

        $scope.totalbeneficiarios6 = data.data;

    });


    $http.get('/informacion7ayudantia').then(function(data) {

        $scope.totalbeneficiarios7 = data.data;

    });


    $http.get('/informacion8ayudantia').then(function(data) {

        $scope.totalbeneficiarios8 = data.data;

    });


    $http.get('/informacion9ayudantia').then(function(data) {

        $scope.totalbeneficiarios9 = data.data;

    });



    $http.get('/informacion10ayudantia').then(function(data) {

        $scope.totalbeneficiarios10 = data.data;

    });


    $http.get('/informacion11ayudantia').then(function(data) {

        $scope.totalbeneficiarios11 = data.data;

    });





})





app.controller('estadisticasGlobalesPreparaduria',function($scope, $http, $stateParams, $mdDialog, $mdToast, $window, $filter){



    $http.get('/informacionpreparaduria').then(function(data) {

        $scope.totalbeneficiarios = data.data;

    });


    $http.get('/informacion1preparaduria').then(function(data) {

        $scope.totalbeneficiarioshombres = data.data;

    });

    $http.get('/informacion2preparaduria').then(function(data) {

        $scope.totalbeneficiariosmujeres = data.data;

    });


    $http.get('/informacion3preparaduria').then(function(data) {
  
        $scope.totalbeneficiarios3 = data.data;

    });


    $http.get('/informacion4preparaduria').then(function(data) {
   
        $scope.totalbeneficiarios4 = data.data;

    });



    $http.get('/informacion5preparaduria').then(function(data) {

        $scope.totalbeneficiarios5 = data.data;

    });


    $http.get('/informacion6preparaduria').then(function(data) {

        $scope.totalbeneficiarios6 = data.data;

    });


    $http.get('/informacion7preparaduria').then(function(data) {

        $scope.totalbeneficiarios7 = data.data;

    });


    $http.get('/informacion8preparaduria').then(function(data) {

        $scope.totalbeneficiarios8 = data.data;

    });


    $http.get('/informacion9preparaduria').then(function(data) {
  
        $scope.totalbeneficiarios9 = data.data;

    });



    $http.get('/informacion10preparaduria').then(function(data) {

        $scope.totalbeneficiarios10 = data.data;

    });


    $http.get('/informacion11preparaduria').then(function(data) {

        $scope.totalbeneficiarios11 = data.data;

    });





})