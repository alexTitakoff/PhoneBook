 var app = angular.module('phonebook',[]);

 app.controller('PhonebookController', ['$scope','DataService', function(scope, dataService) {
 	scope.persons = dataService.list();
 	scope.view = 'list';
 }]);


 app.directive('pbPersonCard', function() {
 	return {
 		restrict: 'E',
 		scope: {
 			person: '='
 		},
 		templateUrl: 'partials/person-card.html'
 	};
 });


 app.service('DataService', [function(){

 	function list () {
 		return [

 		{
 			"name":"Albert Einstain",
 			"phone":"777-77-77",
 			"country":"Austria",
 			"photo":"einstain.jpg"
 		},
 		{
 			"name":"Isaac Newton",
 			"phone":"124-11-10",
 			"country":"England",
 			"photo":"newton.jpg"
 		},

 		{
 			"name":"Herbert Wells",
 			"phone":"143-04-04",
 			"country":"England",
 			"photo":"wells.jpg"
 		},

 		{
 			"name":"Timothy Berners-Lee",
 			"phone":"123-00-00",
 			"country":"England",
 			"photo":"lee.jpg"
 		},

 		{
 			"name":"Michael Faraday",
 			"phone":"173-03-02",
 			"country":"England",
 			"photo":"faraday.jpg"
 		},

 		{
 			"name":"Henry Thoreau",
 			"phone":"135-25-00",
 			"country":"USA",
 			"photo":"thor.jpg"
 		},



 		{
 			"name":"Leonardo da Vinci",
 			"phone":"179-12-10",
 			"country":"Italy",
 			"photo":"leo.jpg"
 		},

 		{
 			"name":"Alan Turing",
 			"phone":"013-50-00",
 			"country":"England",
 			"photo":"turing.jpg"
 		},

 		{
 			"name":"Nicola Tesla",
 			"phone":"153-00-89",
 			"country":"Austria",
 			"photo":"tesla.jpg"
 		},



 		{
 			"name":"Socrat",
 			"phone":"123-20-80",
 			"country":"Greece",
 			"photo":"socrat.jpg"
 		}



 		];

 	}


 	return {
 		list: list
 	};

 }]);