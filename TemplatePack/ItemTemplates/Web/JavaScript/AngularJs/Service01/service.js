(function (app) {
    'use strict';
    
    app.service('$safeitemname$', $safeitemname$);

    $safeitemname$.$inject = ['$http'];

    function $safeitemname$($http) {
        this.getData = getData;

        function getData() { }
    }
})(angular.module('showroom'));