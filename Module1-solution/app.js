(function () {
'use strict';

angular.module('myFirstAss', [])

.controller('SplitController', function ($scope) {
  $scope.name = "";
  $scope.splitSent = function () {
    var sent = $scope.name;
    var words = sent.split(",");
    var total = words.filter(Boolean).length;
        //  words.foreach(myFunction)
    if(total==0)
    $scope.message = "Please enter data first";
    else if (total<=3) {
    $scope.message = "Enjoy";

    }
    else {
      $scope.message = "Too much!!!!";
    }
  };
});

})();
