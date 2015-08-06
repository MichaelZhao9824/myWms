'use strict';

angular.module('mywmsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


