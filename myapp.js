(function () {

    angular.module('myApp')

        .controller('mainCtrl', mainCtrl);

        mainCtrl.$inject = ['$scope', 'courseStudents'];

    function mainCtrl($scope, courseStudents) {

        $scope.number = 1;
        $scope.showPrime = true;
        $scope.showWarning = false;
/*
        $scope.$watch('number', function(newValue, oldValue){
            if(newValue != "" && isNaN(oldValue)){
                toggleDisplay();
            }
            if(angular.isNumber($scope.number)){
            if(newValue === "" && oldValue != ""){
                toggleDisplay();
            }

            if($scope.number > 1000){
                $scope.number = 1000;
            }
            }
            $scope.number = parseInt($scope.number);
        });


        $scope.$watch('number', function(newValue, oldValue){
            if(isNaN(oldValue) && isNaN(newValue)){
                console.log("New: " + newValue + ", old: " + oldValue );
            }

            if($scope.number === parseInt($scope.number)){

            } else if(isNaN($scope.number)){

                if(isNaN(newValue) && oldValue == ""){
                    toggleDisplay();
                }
            }
            $scope.number = parseInt($scope.number);
        });

 */

        $scope.$watch('number', function(newValue, oldValue){
            if(newValue == "" && oldValue != ""){
                console.log("test")
            }
        });


        $scope.findPrime = findPrime;
        function findPrime(a){
            var array = [];
            var counter = 0;
            while(array.length < a){
                if(isPrime(counter)){
                    array.push(counter);
                }
                counter++;
            }
            $scope.prime = counter - 1;
        }
        function isPrime(a){
            if(a<2){
                return false;
            }

            if(a===2){
                return true;
            }

            for(var i = 2; i < a; i++){
                if(a%i === 0){
                    return false;
                }
            }
            return true;
        }
        function toggleDisplay(){
            $scope.showPrime = !$scope.showPrime;
            $scope.showWarning = !$scope.showWarning;
            console.log("toggle")
        }
    }

}());