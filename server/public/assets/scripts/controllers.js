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

    $scope.data = {};
    $scope.data.response = petService.data;

    //GET HERE
    petService.getData();
    console.log(petService); //Has stuff
    console.log(petService.data); // Empty??

    console.log($scope.data); // Also has stuff
    console.log($scope.data.response); // Also empty??
}]);
