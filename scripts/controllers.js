/**
 * Created by konan on 17/8/28.
 */

//实例一个模块 ，用来管理所有控制器
angular.module('Controllers',[])

.controller('DemoController',['$scope',function ($scope) {
    console.log("ss");
}])

//导航菜单
.controller('NavController',['$scope',function($scope){
    $scope.navs = [
        {link: '#/today',text:"今日一刻",icon: "icon-home"},
        {link: '#older',text: '往期内容' ,icon: "icon-file-empty"}
    ];
}])

.controller('TodatController',['$scope','$http',function ($scope, $http) {
    $http({
        url:'./api/today.php',
        method:'get'
    }).success(function (info) {
        $scope.posts = info.posts;
    })
}])

