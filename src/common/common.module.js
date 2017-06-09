(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://intense-beyond-61953.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
