(function(){
  'use strict';

  angular.module('mlf-timer', ['ionic', 'timer'])
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.title = 'Timer';

    $scope.timerRunning = false;

    $scope.startTimer = function (){
      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
      };

  }]);
})();
