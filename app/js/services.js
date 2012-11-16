'use strict';

/* Services */

angular.module('netWageCalculator.services', []).
  value('version', '0.1').
  factory('calculatorService', function ($log) {
  	return {
  		data :
  		{
  			grossSalary : 500,
  			foodAllowance : 5.5,
  			numberOfDaysPerMonth : 30,
  		},

  		monthlyTakeHome : function() {
  			return this.data.grossSalary + this.data.foodAllowance * this.data.numberOfDaysPerMonth;
  		}
  	}
  });
