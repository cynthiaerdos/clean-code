angular.module('app')
    .controller('mainCtrl', function($scope, testFactory){
        $scope.test = testFactory;
    });