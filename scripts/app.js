/**
 * Created by konan on 17/8/28.
 */

var Yike = angular.module('Yike',['ngRoute','Controllers','Directives']);

// 路由配置
Yike.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/today',{
        templateUrl: './views/today.html',
        controller: 'TodayController'
    }).when('/older',{
        templateUrl:'./views/older.html',
        controller: 'OlderController'
    }).otherwise({
        redirectTo:'/today'
    })
}]);

Yike.run(['$rootScope',function ($rootScope) {

    //设置类名初始值
    $rootScope.collapsed =  false;

    $rootScope.toggle = function () {
        $rootScope.collapsed = !$rootScope.collapsed;

        var navs = document.querySelectorAll('.navs dd');
        if($rootScope.collapsed){
            for(var i = 0;i<navs.length;i++){
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDelay = '0.2s';
                navs[i].style.transitionDuration = (i + 1) *0.15 +'s';
            }
        }else {
            var len = navs.length - 1;
            for(var j = len;j>0;j--){
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDelay = '';
                navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
            }
        }

    }

}]);