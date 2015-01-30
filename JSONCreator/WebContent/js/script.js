var JSONApp = angular.module('JSONApp', []);

JSONApp.controller('JSONController', function($scope,$log){
	$scope.blankFields = true;
	$scope.setNumberOfFields = false;
	$scope.fillFields = true;
	$scope.textAreaWithJSON = true;

	$scope.isSetNumberOfFields = 0;
	$scope.allFields = [];

	$scope.submit = function(){
		$scope.isSetNumberOfFields = $scope.numberOfFields;

		if(angular.isNumber($scope.isSetNumberOfFields)){
			$scope.setNumberOfFields = true;
			$scope.blankFields = false;
			$scope.fields = [];

			for (var i = 1; i <= $scope.isSetNumberOfFields; i++) {
				$scope.fields.push('input_' + i);
			};
		}else{
			console.log('Erro, não é número.');
		}
	};

	$scope.submit2 = function(){
		for (var i = 1; i <= $scope.isSetNumberOfFields; i++) {
			$scope.allFields.push(document.getElementsByName('input_' + i)[0].value);
		};

		$scope.blankFields = true;
		$scope.fillFields = false;
		$scope.textAreaWithJSON = false;		
	};

	var testeString = '';	
	$scope.arrayTest = [];
	$scope.submit3 = function(){
			testeString += '{';
			for (var j = 0; j < $scope.isSetNumberOfFields; j++) {
				if(j == $scope.isSetNumberOfFields - 1){
					testeString += '"' + $scope.allFields[j] + '"' + ':' + '"' + document.getElementsByName($scope.allFields[j])[0].value + '"';
					testeString += '}';
				}else{
					testeString += '"' + $scope.allFields[j] + '"' + ':' + '"' + document.getElementsByName($scope.allFields[j])[0].value + '"' + ',';
				}		
			};			
		
		
		$scope.arrayTest.push(JSON.parse(testeString));
		testeString = '';
		$scope.showJSON = JSON.stringify($scope.arrayTest,null,"   ");
	};

});