(function () {
  "use strict";

  angular.module('common')
  .service('MyInfoService', MyInfoService);

  function MyInfoService() {
    var service = this;

    service.userInfo = null;
    service.menu_item = null;
  }

})();
