angular.module("countryDetailApp").controller("MainController", MainController);

function MainController(CountryFactory){
    const vm = this;
          CountryFactory.getCountryDetails()
          .then(function(response){
              console.log(response)
              vm.country = response;
          })
}