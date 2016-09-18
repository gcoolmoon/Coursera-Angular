(function () {
'use strict';

angular.module('myFirstAss', [])

.controller('SplitController', function ($scope) {
  $scope.name = "";
  //$scope.styleColor = function () {
    // return red;
  //}
  $scope.splitSent = function () {
    var sent = $scope.name;
    var words = sent.split(",");
    var total = words.filter(Boolean).length;
    var customColor = 'green';
        //  words.foreach(myFunction)
    if(total==0)
    {customColor = 'red';
    $scope.message = "Please enter data first";}
    else if (total<=3) {
    $scope.message = "Enjoy";

    }
    else {
      $scope.message = "Too much!!!!";
    }
    $scope.styleColor = function () {
      return customColor;
    }
  };
});

})();
