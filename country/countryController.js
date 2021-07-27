


angular.module("countryDetailApp").controller("CountryController", CountryController)
function CountryController($routeParams, CountryFactory){
    const vm = this;
    CountryFactory.getCountryDetails().
    then(function(response){
        vm.country = response.data;
    })

}