angular.module("countryDetailApp", ['ngRouter']).config(config);

function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"main/main.html",
        controller: "MainController",
        controllerAs: "mainCtrl"

    }).when("/country",{
        templateUrl:"country/country.html",
        controller: "countryController",
        controllerAs: "countryCtrl"
    }) .otherwise({
        redirectTo: "/"
    });
}