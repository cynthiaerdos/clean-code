(function(){
    'use strict';

    angular
        .module('wow.guild')
        .controller('Guild', guild);

    guild.$inject = ['$http', 'dataservice'];

    function guild($http, dataservice){
        var vm = this;
        vm.classRoles = dataservice.classRoles();

        vm.test = function(){
        console.log(vm.test2);
        };
        $http.get('guild/guilds.json').
            success(function(data) {
                vm.guilds = data;
            }).
            error(function() {
                console.error('Hiba az adatfajl betoltese kozben!')
            });

    }


})();