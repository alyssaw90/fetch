myFetchApp.controller('AuthModalCtrl', ['$scope', '$modalInstance', 'UserService',function($scope,$modalInstance,UserService){

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService', function(){
    $scope.currentUser = UserService.currentUser
  });

  $scope.login = function(){
    UserService.login($scope.email,$scope.password,function(err,data){
        if(err){
          alert(err);
        }else if(data.user){
          $modalInstance.close()
        }else{
          alert(data.error);
        }
    });
  }

}])
