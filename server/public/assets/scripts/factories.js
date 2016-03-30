myApp.factory("PetService", ["$http", function($http){

    var data = {};

    var greeting = function(){
      console.log("Works");
    };

    var getData = function(){
       // w/o return, it 'returns' undefined. Yolo
       return $http.get("/pets").then(function(response){
         data.results = response.data;
       });
    };

    var postData = function(data){
       $http.post("/pets", data).then(function(response){
       });
    };

    return {
      postData: postData,
      getData: getData,
      greeting : greeting,
      data : data
    };
}]);


// Code Below is Demo From Another App (SOF)

// $scope.loadDict = function() {
//   return $http.get('api/call/').
//     success(function(data){
//       for (env in data.environment) {
//      var key = data.environment[env].name;
//         $scope.dict[key] = data.environment[env].hosts;
//       }
//       console.log($scope.envDict)
//       // in the console:
//       // Object {string1: Array[2], string2: Array[2]}
//     }).error(function(data){
//         console.error(data);
//     })
// };
