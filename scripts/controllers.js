/**
 * Created by konan on 17/8/28.
 */

//实例一个模块 ，用来管理所有控制器
angular.module('Controllers', [])

    .controller('DemoController', ['$scope', function ($scope) {
        console.log("ss");
    }])

    //导航菜单
    .controller('NavController', ['$scope', function ($scope) {
        $scope.navs = [
            {link: '#/today', text: "今日一刻", icon: "icon-home"},
            {link: '#/older', text: '往期内容', icon: "icon-file-empty"}
        ];
    }])

    .controller('TodayController', ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {
        var today = $filter('date')(new Date, 'yyyy-MM-dd');

        $rootScope.title = '今日一刻';
        $rootScope.index = 0;
        $rootScope.loaded = false;

        $http({
            url: './api/today.php',
            method: 'get',
            params:{today:today}
        }).then(function (success) {
            console.log(success);
            $rootScope.loaded = true;
            $scope.date = success.data.date;
            $scope.posts = success.data.posts;
        }, function (error) {
            console.log(error);
        });
    }])

    .controller('OlderController',['$scope','$http','$filter','$rootScope',function($scope,$http,$filter,$rootScope){
        $http({
            url:'./api/older.php',
            method:'get',
            // params:{}
        }).then(function(success){
            console.log(success);
            $rootScope.loaded = true;
            $scope.date = success.data.date;
            $scope.posts = success.data.posts;
        }, function(error){

        });
    }])
    

