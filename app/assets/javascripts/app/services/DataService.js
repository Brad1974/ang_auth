function DataService($http) {


  this.getPosts = function() {
    return $http.get('/posts.json');
  }

}

angular
    .module('app')
    .service('DataService', DataService);
