'use strict';

/* Controllers */


function MainCtrl($scope, $log, calculatorService) {
	$scope.calcData = calculatorService.data;
	$scope.monthlyTakeHome = calculatorService.monthlyTakeHome();

	$scope.$watch('calcData', function ()
	{
		$scope.monthlyTakeHome = calculatorService.monthlyTakeHome();
	}, true);
}
