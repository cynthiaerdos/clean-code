angular.module('getGuilds', [])
    .factory('getGuilds', getGuilds);

getGuilds.$inject = ['$http'];

function getGuilds($http){
    var obj = {content:null};

    $http.get('guild/guilds.json').success(function(data) {
        // you can do some processing here
        obj.content = data;
    });
    return obj;
}
