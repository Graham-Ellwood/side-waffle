(function (app) {
    'use strict';
    
    app.controller('$safeitemname$', $safeitemname$);

    $safeitemname$.$inject = ['$scope']; 

    function $safeitemname$($scope) {
        $scope.title = '$safeitemname$';

        activate();

        function activate() { }
    }
})(angular.module('showroom'));
