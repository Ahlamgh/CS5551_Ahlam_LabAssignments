// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("lab6", function($scope,$http){
  $scope.image_link = function (response){
    return response.data.items["0"].link
  }
  $scope.google_api_url = function (input){
    return "https://www.googleapis.com/customsearch/v1?key=AIzaSyB-6RanYIAXIewbbHswj6R8O2XjTfOOEdc&q="+
          input+"&searchType=image&cx=009906912528973601220:yf8cj1tfpcq"
  }
  $scope.img = function (){
    url=$scope.google_api_url($scope.input)
    console.log($scope.url)
    $http.get(url).then(function(res){
      $scope.image=$scope.image_link(res)
      // initialize with your api key. This will also work in your browser via http://browserify.org/
      const app = new Clarifai.App({
        apiKey: 'ec6bcee61f3b4ccf891a4be571c06447'
      });
      app.models.predict(Clarifai.GENERAL_MODEL, $scope.image).then(
        function(response) {
          console.log(response);
          var tags = []
          for (i = 0; i < 5; i++){
            var tag=response.outputs["0"].data.concepts[i].name
            tags.push(tag)
            console.log(tag);
          }
          $scope.$apply(function(){
            $scope.tags=tags;
          });
        },
        function(err) {
          console.error(err);
        }
      );
  })

  }
});
