(function () {
'use strict';

angular.module('myFirstAss', [])

.controller('SplitController', function ($scope) {
  $scope.name = "hi,hello,,";
  $scope.splitSent = function () {
    var sent = $scope.name;
    var words = sent.split(",");
    $scope.total = words.filter(Boolean).length;
        //  words.foreach(myFunction)
    
  };
});

})();
