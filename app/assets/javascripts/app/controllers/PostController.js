function PostController(Auth, $state, $stateParams, post, DataService) {

  var ctrl = this;

  ctrl.post = post.data;
  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  debugger;
}

angular
.module('app')
.controller('PostController', PostController)
