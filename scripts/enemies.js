import { roll } from "./diceroll.js";

export function Enemy(name, level){
    this.name = name;
    this.level = level;
    this.ac = 0;
    this.hp = 0;
    this.hpmax = 0;
}

// ,'skeleton','spider','rat'
export const cr1CreatureList = ['zombie'];
export const cr2CreatureList = []
export const cr3CreatureList = []


export function generateEnemy(cr) {
    let creature = null;
    let data = null;
    switch (cr) {
        case 1:
            creature = cr1CreatureList[Math.floor(Math.random() * cr1CreatureList.length)];
            creature = new Enemy(creature, 1);
            return creature
        case 2:
            creature = cr2CreatureList[Math.floor(Math.random() * cr1CreatureList.length)];
            return creature
        case 3:
            creature = cr3CreatureList[Math.floor(Math.random() * cr1CreatureList.length)];
            return creature
    }
}



console.log(generateEnemy(1));
