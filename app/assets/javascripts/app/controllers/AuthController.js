function AuthController($scope, $state, Auth) {

  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('home.postsIndex');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home.postsIndex');
    });
  };

}

angular
.module('app')
.controller('AuthController', AuthController)
