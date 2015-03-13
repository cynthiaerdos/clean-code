(function(){
    'use strict';

    angular
        .module('wow.guild')
        .controller('Guild', guild);

    guild.$inject = ['$http', 'dataservice'];

    function guild($http ,dataservice){
        var vm = this;
        vm.guilds = [];
        vm.whichFaction = whichFaction;
        vm.toggleGuild = toggleGuild;

        vm.numberOfPages = numberOfPages;
        vm.currentPage = 0;
        vm.pageSize = 10;


        function numberOfPages(){
            var numberOfPages = Math.ceil(vm.guildsFiltered.length/vm.pageSize);

            if(numberOfPages === 0){
                numberOfPages = 1;
            }

            if(numberOfPages<=vm.currentPage){
                console.log("numberOfPages: " + numberOfPages + ", vm.currentPage: " + vm.currentPage);
                vm.currentPage = (numberOfPages-1);
                console.log("numberOfPages: " + numberOfPages + ", vm.currentPage: " + vm.currentPage)
            }
            return numberOfPages;
        }

        function whichFaction(faction){
            if(faction === "A"){
                return "Szövetség";
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