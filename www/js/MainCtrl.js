(function(){
  'use strict';

  angular.module('mlf-timer', ['ionic', 'timer'])
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.ms = $scope.hCvt + $scope.mCvt + $scope.sCvt;
    $scope.h = '';
    $scope.m = '';
    $scope.s = '';

    $scope.hCvt = function(){
      return $scope.h * 3600000;
    };
    
    $scope.mCvt = function(){
      return $scope.m * 60000;
    };

    $scope.sCvt = function(){
      return $scope.s * 1000;
    };

    $scope.timerRunning = false;

    $scope.startTimer = function(){
      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
    };

    $scope.stopTimer = function(){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
      };

  }]);
})();
