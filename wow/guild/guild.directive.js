(function () {
    'use strict';

    angular
        .module('wow.guild')
        .directive('guildClass', function () {
            return {
                restrict: 'E',
                scope: {
                    name: "@",
                    display: "@",
                    model: "="
                },
                template: "<input type=\"checkbox\" name=\"guild-classes\" id=\"{{name}}\" ng-model=\"model\"><label for=\"{{name}}\">{{display}}</label><br>"
            }
        })



})();