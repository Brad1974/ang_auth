function PostsController(Auth, posts) {
  var ctrl = this;
  ctrl.posts = posts.data;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
      debugger;
    });
}

angular
.module('app')
.controller('PostsController', PostsController)
