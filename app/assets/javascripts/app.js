angular
.module('app', ['ui.router', 'templates', 'Devise'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'app/views/home.html',
      controller: 'HomeController as ctrl'
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
    .state('home.post', {
      url: 'post/:id',
      templateUrl: 'app/views/showPost.html',
      controller: 'PostController as ctrl',
      resolve: {
        post: function ($stateParams, DataService) {
          return DataService.getPost($stateParams.id);
        }
      }
    })
    .state('home.login', {
    url: 'login',
    templateUrl: 'app/views/auth/_login.html',
    controller: 'AuthController',
    data: { authRejected: true }
  })
  .state('home.register', {
    url: 'register',
    templateUrl: 'app/views/auth/_register.html',
    controller: 'AuthController',
    data: { authRejected: true },
  })

    $urlRouterProvider.otherwise('/');
});
