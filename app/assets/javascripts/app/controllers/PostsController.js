function PostsController(posts) {
  var ctrl = this;

  ctrl.posts = posts.data
  

}

angular
.module('app')
.controller('PostsController', PostsController)
