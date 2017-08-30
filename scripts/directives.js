/**
 * Created by konan on 17/8/28.
 */

angular.module('Directives',[])


.directive('loading',function () {
    return {
        restrict : 'A',
        replace: true,
        template: '<img src="" alt=""/>'
    }
})