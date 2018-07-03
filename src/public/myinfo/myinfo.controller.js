(function () {
  "use strict";

  angular.module("public")
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ["$scope", "MyInfoService"];
  function MyInfoController($scope, MyInfoService) {
    if (MyInfoService.userInfo) {
      $scope.myInfoIsValid = true;
    } else {
      $scope.myInfoIsValid = false;
    }

    $scope.userInfo = MyInfoService.userInfo;
    $scope.menu_item = MyInfoService.menu_item;
  };

})();
