(function (app) {
    'use strict';
   
    app.controller('$safeitemname$', $safeitemname$);

    $safeitemname$.$inject = ['$location']; 

    function $safeitemname$($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '$safeitemname$';

        activate();

        function activate() { }
    }
})( angular.module('showroom'));
