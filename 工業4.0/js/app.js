var app = angular.module('MyApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/relation_pattern', { 
				templateUrl: './views/relation_pattern.html',
//				controller:'relation_patternCTRL'
			})
			.when('/intelligence_page4', { 
				templateUrl: './views/intelligence_page4.html',
				controller:'intelligenceCTRL_page4'
			})
			.when('/intelligence_page5', { 
				templateUrl: './views/intelligence_page5.html',
				controller:'intelligenceCTRL_page5'
			})
			.when('/intelligence_page6', { 
				templateUrl: './views/intelligence_page6.html',
				controller:'intelligenceCTRL_page6'
			})
			.when('/foundationData_page3', { 
				templateUrl: './views/foundationData_page3.html',
				controller:'foundationDataCtrl_page3'
			})
			.otherwise({ redirectTo: '/relation_pattern' });
	}]);
	
	
