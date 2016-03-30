myApp.controller("AddController", ["$scope", "PetService", function($scope, PetService){
    var petObject = {};
    var petService = PetService;

    //POST HERE
    $scope.submit = function(data){
      petService.postData(data);
    };
}]);

myApp.controller("ShowController", ["$scope", "PetService", function($scope, PetService){
    var petService = PetService;

    $scope.petArray = []; //Array of Pets;

    // .then() waits for the data to get back, then sets it.
    petService.getData().then(function() {
      $scope.gremlins = petService.data;
      $scope.petArray = $scope.gremlins.results;
      console.log($scope.petArray);
    });
}]);
