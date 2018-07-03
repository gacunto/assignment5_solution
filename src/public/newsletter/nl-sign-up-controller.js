(function () {
  "use strict";

  angular.module("public")
  .controller('NlSignupController', NlSignupController);

  NlSignupController.$inject = ["$scope", "MenuService", "MyInfoService", 'ApiPath'];
  function NlSignupController($scope, MenuService, MyInfoService, ApiPath) {
    $scope.submit = function() {
      $scope.previous_menu_item_name = $scope.menu_item_name;
      $scope.menu_item_error = "";
      $scope.success_message = "";

      MenuService.getMenuItem($scope.menu_item_name).then(function(response) {
        $scope.success_message = "Your information has been saved.";

        MyInfoService.userInfo = {};
        MyInfoService.menu_item = {};

        MyInfoService.userInfo.first_name = $scope.first_name;
        MyInfoService.userInfo.last_name = $scope.last_name;
        MyInfoService.userInfo.email = $scope.email;
        MyInfoService.userInfo.phone = $scope.phone;
        MyInfoService.userInfo.menu_item_name = $scope.menu_item_name;
        MyInfoService.menu_item.name = response.name;
        MyInfoService.menu_item.description = response.description;
        MyInfoService.menu_item.image = ApiPath + "/images/" + $scope.menu_item_name + ".jpeg"
      }, function(error) {
        $scope.menu_item_error = "No such menu item exists."
      });
    };
  };

})();
