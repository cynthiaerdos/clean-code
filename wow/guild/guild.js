(function(){
    'use strict';

    angular
        .module('wow.guild')
        .controller('Guild', guild);

    guild.$inject = ['getGuilds'];

    function guild(getGuilds){
        console.log(getGuilds);
    }


})();