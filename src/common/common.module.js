(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://hidden-badlands-15525.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
