import { statroll, roll } from "./diceroll.js";

export function baseCharacter(name, level) {
    this.name = name;
    this.level = level;
    this.stats = Object.assign({}, baseCharacter.prototype.stats);
    this.equipped = Object.assign({}, baseCharacter.prototype.equipped);
    this.ac = 0;
    this.speed = 0;
    this.hp = 0;
    this.hpmax = 0;
    this.class='';
    this.inventory = [];

    // stat modifier calculation
    this.modifier = function (stat){
        return Math.floor((stat - 10) / 2);
    }

    // Generates Random Stats
    this.genBaseStats = function(){
        let BaseStats = [];
        for (let stat in this.stats){
            BaseStats.push(statroll(roll("4d6")));
        }
        this.BaseStats = BaseStats;
        this.stats.STR = BaseStats[0];
        this.stats.DEX = BaseStats[1];
        this.stats.CON = BaseStats[2];
        this.stats.MAG = BaseStats[3];
    }
}

baseCharacter.prototype.stats = {
    "STR": 0,
    "DEX": 0,
    "CON": 0,
    "MAG": 0,
};
baseCharacter.prototype.equipped ={
    "armor": '',
    "weapon": '',
    "shield": '',
    "magic-item": '',
};


Object.setPrototypeOf(barbarian.prototype, baseCharacter.prototype);

/**------ Character Classes----- */
export function barbarian(name, level) {
    baseCharacter.call(this, name, level);
    this.class = 'barbarian';
    this.genBaseStats();
    //Add Class Bonuses
    this.stats.STR += 4;
    this.stats.CON += 3;
}

export function cleric(name, level){
    baseCharacter.call(this, name, level);
    this.class = 'cleric';
    this.genBaseStats();
    //Add Class Bonuses
    this.stats.MAG += 4;
    this.stats.STR += 2;
}


let hero1 = new barbarian('Steven',1);
console.log(hero1);