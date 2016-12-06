angular.module('starter.controllers', [])

.controller('ArticlesCtrl', function ($scope, Fac) {
    Fac.articles().success(function (data) {
        $scope.chats = data
    });
    $scope.remove = function (chat) {
        Fac.remove(chat);
    };
})

.controller('ChatsCtrl', function ($scope, Fac) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    console.log("dddd");
    console.log(Fac.all())

    $scope.chats = Fac.all();
    $scope.remove = function (chat) {
        Fac.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('SlideController', function($scope) {
  
    $scope.myActiveSlide = 1;
  
});