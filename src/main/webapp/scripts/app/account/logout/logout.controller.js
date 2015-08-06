'use strict';

angular.module('mywmsApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
