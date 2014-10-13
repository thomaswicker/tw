// // create the module and name it twApp
// var twApp = angular.module('twApp', ['ngRoute']);

// // configure our routes
// // twApp.config(function($routeProvider, $locationProvider) {

// // configure our routes
// twApp.config(function($routeProvider) {
//     $routeProvider

//         // route for the home page
//         .when('/', {
//             templateUrl : 'partials/_home.html',
//             controller  : 'mainController'
//         })

//         // route for the about page
//         .when('/about', {
//             templateUrl : 'partials/_about.html',
//             controller  : 'aboutController'
//         })

//         // route for the portfolio page
//         .when('/portfolio', {
//             templateUrl : 'partials/_portfolio.html',
//             controller  : 'portfolioController'
//         })

//         // route for the photography page
//         .when('/photography', {
//             templateUrl : 'partials/_photography.html',
//             controller  : 'photographyController'
//         })

//         // route for the resume page
//         .when('/resume', {
//             templateUrl : 'partials/_resume.html',
//             controller  : 'resumeController'
//         })

//         // route for the contact page
//         .when('/contact', {
//             templateUrl : 'partials/_contact.html',
//             controller  : 'contactController'
//         });

//         // use the HTML5 History API
//         // $locationProvider.html5Mode(true);
// });

// // create the controller and inject Angular's $scope
// twApp.controller('mainController', function($scope) {
//     // create a message to display in our view
//     $scope.message = 'Everyone come and see how good I look!';
// });

// twApp.controller('aboutController', function($scope) {
//     $scope.message = 'Look! I am an about page.';
// });

// twApp.controller('portfolioController', function($scope) {
//     $scope.message = 'Look! I am an portfolio page.';
// });

// twApp.controller('photographyController', function($scope) {
//     $scope.message = 'Look! I am an photography page.';
// });

// twApp.controller('resumeController', function($scope) {
//     $scope.message = 'Look! I am an resume page.';
// });

// twApp.controller('contactController', function($scope) {
//     $scope.message = 'Contact';
// });

// function HeaderController($scope, $location) 
// { 
//     $scope.isActive = function (viewLocation) { 
//         return viewLocation === $location.path();
//     };
// }