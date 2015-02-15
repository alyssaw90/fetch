myFetchApp.controller('HomeCtrl', ['$scope', '$http','$modal', 'UserService', function($scope,$http,$modal,UserService){

      $scope.UserService = UserService;
    $scope.$watchCollection('UserService', function(){
        $scope.currentUser = UserService.currentUser
    });

}])
