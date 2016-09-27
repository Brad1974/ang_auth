angular
.module('app', ['ui.router', 'templates', 'Devise'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'app/views/home.html'
    })
    .state('home.postsIndex', {
      url: 'posts',
      templateUrl: 'app/views/postsIndex.html',
      controller: 'PostsController as ctrl',
      resolve: {
        posts: function (DataService) {
          return DataService.getPosts();
        }
      }
    })
    $urlRouterProvider.otherwise('/');
});
