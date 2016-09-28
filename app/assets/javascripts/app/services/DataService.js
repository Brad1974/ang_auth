function DataService($http) {

  this.getPosts = function() {
    return $http.get('/posts.json');
  }

  this.getPost = function(id) {
    return $http.get('/posts/' + id);
  }

}

angular
    .module('app')
    .service('DataService', DataService);
