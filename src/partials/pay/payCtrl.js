angular.module('asch').controller('payCtrl', function($scope, $rootScope, apiService, ipCookie, $location) {
    $rootScope.active = 'pay';
    $rootScope.userlogin = true;
    //下拉菜单隐藏
    $rootScope.blockStatus = false;



    $scope.init = function(params) {
        // window.location.href = '#/login';

        apiService.taskAdmin(params).success(function(res) {


        }).error(function(err) {
            toastError('服务器错误！');
        });
    };


});