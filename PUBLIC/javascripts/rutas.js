



app.controller('socialRegistro',function($scope,$http){





$scope.agregarBeneficiarios = function(){


	data = {

		nombres:   	$scope.formulario.nombre,
		apellidos: 	$scope.formulario.apellido,
		cedula:    	$scope.formulario.cedula,
		codigo: 	$scope.formulario.codigo,
		pnf: 		$scope.formulario.pnf,
		trayecto: 	$scope.formulario.trayecto,
		trimestre: 	$scope.formulario.trimestre,
		sexo: 		$scope.formulario.sexo,
		correo: 	$scope.formulario.correo,
		facebook: 	$scope.formulario.facebook,
		twitter: 	$scope.formulario.twitter,
		telefono: 	$scope.formulario.telefono,
		adicional:  $scope.formulario.adicional,
		beneficio: 'Social Critica'


	};


	console.log(data);

	$http.post('/agregar', data).then(function(respuesta){

		console.log(respuesta.data);

	});



};

});





app.controller('controladorPrincipal', function($scope,$http){





$scope.PNF = [
{nombre:'Informatica'},
{nombre:'Contaduria'},
{nombre:'Construccion Civil'},
{nombre:'Mecanica'},
{nombre:'Electricidad'},
{nombre:'Agropecuria'}]

$scope.trayecto = [

{nombre: 'I'},
{nombre:'II'},
{nombre:'III'},
{nombre: 'IV'}

]


$scope.trimestre  = [
{
trimestre: 'I'
},
{trimestre: 'II'},
{trimestre: 'III'}

]


$scope.sexo  = [
{
sexo: 'Masculino'
},
{sexo: 'Femenino'}

]









});





/*CONTROLADOR CONSULTAS*/



app.controller('consultaSocialCritica',function($scope,$http){

$scope.beneficiarios = [];
$scope.beneficio = 'Social Critica';

$http.get('/beneficiarios',{params:{beneficio: $scope.beneficio}} ).then(function(data){


	
	$scope.beneficiarios = data.data;
	console.log(data);

}) 




});


app.controller('consultaControl', function($scope,$http,$stateParams){

$scope.hello = $stateParams.codigo;





});




	