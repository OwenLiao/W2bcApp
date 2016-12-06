angular.module('starter.controllers', [])
    //�����б�
.controller('ArticlesCtrl', function ($scope, Fac) {
    Fac.articles(1).success(function (data) {
        $scope.vmArticles = data
    });


    //����ˢ��
    $scope.doRefresh = function () {
        Fac.articles(1).success(function (data) {
            $scope.vmArticles = data;
        }).finally(function () {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.currentPage = 1;//�����������ط�ҳ�ĳ�ʼֵ

    $scope.loadMore = function () {
        $scope.currentPage += 1;//ÿ���������ײ���ҳ���ۼƼ�1
        Fac.articles($scope.currentPage).success(function (data) {
            for (var i in data) {
                $scope.vmArticles.push(data[i]);
            }
            if (data.length < 20) {//��json������С��10���Ѿ�ȷ����һҳΪ10�����ݣ���˵��ҳ�浽����
                $scope.noMorePage = true;//��ֹ��������ʱ��
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