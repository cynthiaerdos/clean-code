angular.module('dataservice', [])
    .factory('dataservice', function(){
        return {classRoles: classRoles};

        function classRoles(){
            return [
                {id: 0, name: 'warrior', display: 'Warrior', tank: true, mDps: true, rDps: false, heal: false},
                {id: 1, name: 'paladin', display: 'Paladin', tank: true, mDps: true, rDps: false, heal: true},
                {id: 2, name: 'hunter', display: 'Hunter', tank: false, mDps: false, rDps: true, heal: false},
                {id: 3, name: 'rogue', display: 'Rogue', tank: false, mDps: true, rDps: false, heal: false},
                {id: 4, name: 'priest', display: 'Priest', tank: false, mDps: false, rDps: true, heal: true},
                {id: 5, name: 'dk', display: 'Death Knight', tank: true, mDps: true, rDps: false, heal: false},
                {id: 6, name: 'shaman', display: 'Shaman', tank: false, mDps: true, rDps: true, heal: true},
                {id: 7, name: 'mage', display: 'Mage', tank: false, mDps: false, rDps: true, heal: false},
                {id: 8, name: 'warlock', display: 'Warlock', tank: false, mDps: false, rDps: true, heal: false},
                {id: 9, name: 'monk', display: 'Monk', tank: true, mDps: true, rDps: false, heal: true},
                {id: 10, name: 'druid', display: 'Druid', tank: true, mDps: true, rDps: true, heal: true}
            ];
        }
    });