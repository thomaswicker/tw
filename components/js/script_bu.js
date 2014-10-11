// create the module and name it twApp
var twApp = angular.module("twApp", ["ngRoute"]);

// configure our routes
// twApp.config(function($routeProvider, $locationProvider) {

// configure our routes
twApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'mainController',
            activetab: 'home'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'partials/about.html',
            controller  : 'aboutController',
            activetab: 'about'
        })

        // route for the portfolio page
        .when('/portfolio', {
            templateUrl : 'partials/portfolio.html',
            controller  : 'portfolioController',
            activetab: 'portfolio'
        })

        // route for the photography page
        .when('/photography', {
            templateUrl : 'partials/photography.html',
            controller  : 'photographyController',
            activetab: 'photography'
        })

        // route for the resume page
        .when('/resume', {
            templateUrl : 'partials/resume.html',
            controller  : 'resumeController',
            activetab: 'resume'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'partials/contact.html',
            controller  : 'contactController',
            activetab: 'contact'
        });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
});

function mainController($scope, $route) {
    $scope.$route = $route;
}

function aboutController($scope, $route) {
    $scope.$route = $route;
}

// create the controller and inject Angular's $scope
twApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

twApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

twApp.controller('portfolioController', function($scope) {
    $scope.message = 'Look! I am an portfolio page.';
});

twApp.controller('photographyController', function($scope) {
    $scope.message = 'Look! I am an photography page.';
});

twApp.controller('resumeController', function($scope) {
    $scope.message = 'Look! I am an resume page.';
});

twApp.controller('contactController', function($scope) {
    $scope.message = 'Contact';
});



