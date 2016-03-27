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

    // #SquadGoalz
    var petArray = //Array of Pets;
    console.log(petService.data);

    // This works, but I do not know why.
    $scope.data = {};
    $scope.data.response = petService.data; // How has stuff?

    //GET HERE
    petService.getData();
    console.log(petService); //Has stuff
    console.log(petService.data); // Empty?? Witchcraft happens and goes poof!

    console.log($scope.data); // Also has stuff
    console.log($scope.data.response); // Also empty??
}]);
