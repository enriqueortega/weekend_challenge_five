myApp.factory("PetService", ["$http", function($http){

    // Create another object? Hmm?
    var data = {};

    var greeting = function(){
      console.log("Works");
    };

    var getData = function(){
       $http.get("/pets").then(function(response){
         data.results = response.data;
         console.log(data.results);
       });
    };

    var postData = function(data){
       $http.post("/pets", data).then(function(response){
          // console.log(response.data);
       });
    };

    return {
      postData: postData,
      getData: getData,
      greeting : greeting,
      data : data
    };
}]);
