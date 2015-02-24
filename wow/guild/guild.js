(function(){
    'use strict';

    angular
        .module('wow.guild')
        .controller('Guild', guild);

    guild.$inject = ['$http'];

    function guild($http){
        var vm = this;

        $http.get('guild/guilds.json').
            success(function(data) {
                vm.guilds = data;
            }).
            error(function() {
                console.error('Hiba az adatfajl betoltese kozben!')
            });

    }


})();