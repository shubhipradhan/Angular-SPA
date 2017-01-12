var demoApp=angular.module('demoApp',['ngRoute']);


demoApp.config(function($routeProvider){

  $routeProvider
  .when('/',{
      templateUrl:'home.html',
      controller: 'mainController'
  })

  .when('/about',{
      templateUrl:'about.html',
      controller: 'aboutController'
  })

  .when('/contact',{
      templateUrl:'contact.html',
      controller: 'contactController'
  });

});





demoApp.controller('mainController',function($scope){

  $scope.message="This is the home page";
});


demoApp.controller('aboutController',function($scope){

  $scope.message="This is the About Us page";
});

demoApp.controller('contactController',function($scope){

  $scope.message="This is the contact us page";
});
