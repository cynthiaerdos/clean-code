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

        .directive('guildDays', function () {
            return {
                restrict: 'E',
                scope: {
                    days: "="
                },
                template: "<ul>" +
                "<li ng-if='days.monday'>Hetfo</li>" +
                "<li ng-if='days.tuesday'>Kedd</li>" +
                "<li ng-if='days.wednesday'>Szerda</li>" +
                "<li ng-if='days.thursday'>Csutortok</li>" +
                "<li ng-if='days.friday'>Pentek</li>" +
                "<li ng-if='days.saturday'>Szombat</li>" +
                "<li ng-if='days.sunday'>Vasarnap</li>" +
                "</ul>"
            }
        })

        .directive('guildClasses', function () {
            return {
                restrict: 'E',
                scope: {
                    class: "="
                },
                templateUrl:"guild/guild-classes.html"
            }
        })

})();