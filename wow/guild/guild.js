(function(){
    'use strict';

    angular
        .module('wow.guild')
        .controller('Guild', guild);

    guild.$inject = ['$http', 'dataservice'];

    function guild($http, dataservice){
        var vm = this;
        vm.guilds = [];
        vm.whichFaction = whichFaction;
        vm.toggleGuild = toggleGuild;


        function whichFaction(faction){
            if(faction === "A"){
                return "Szovetseg";
            }else{
                return "Horda";
            }
        }

        function toggleGuild(guild){
            vm.guilds[guild.id].show = !(guild.show);

        }

        vm.classRoles = dataservice.classRoles();


        $http.get('guild/guilds.json').
            success(function(data) {
                vm.guilds = data;
            }).
            error(function() {
                console.error('Hiba az adatfajl betoltese kozben!')
            });

    }


})();