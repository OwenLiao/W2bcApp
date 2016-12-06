angular.module('starter.controllers', [])
    //文章列表
.controller('ArticlesCtrl', function ($scope, Fac) {
    Fac.articles(1).success(function (data) {
        $scope.vmArticles = data
    });


    //上拉刷新
    $scope.doRefresh = function () {
        Fac.articles(1).success(function (data) {
            $scope.vmArticles = data;
        }).finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.currentPage = 1;//定义下拉加载分页的初始值

    $scope.loadMore = function () {
        $scope.currentPage += 1;//每当滚动到底部，页码累计加1
        Fac.articles($scope.currentPage).success(function (data) {
            for (var i in data) {
                $scope.vmArticles.push(data[i]);
            }
            if (data.length < 20) {//当json的数量小于10（已经确定了一页为10条数据），说明页面到底了
                $scope.noMorePage = true;//禁止滚动触发时间
            }
        }).finally(function () {
            $scope.$broadcast('scroll.infiniteScrollComplete');
        });
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

.controller('ChatDetailCtrl', function ($scope, $stateParams, Fac) {
   // $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('SlideController', function ($scope) {

    $scope.myActiveSlide = 1;

});