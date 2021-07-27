angular.module("countryDetailApp").factory("CountryFactory", CountryFactory);

function CountryFactory($http){
    return{
       getCountryDetails:getCountryDetails
    };
    
    function getCountryDetails(){
        return $http.get("https://sys.airtel.lv/ip2country/1.1.1.1/?full=true")
        .then(complete)
        .catch(failed);
    }
    function complete(response){
        console.log("response", response)
        return response.data;
    }
    function failed(error){
        return error.statusText;

    }
}