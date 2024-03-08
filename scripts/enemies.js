import { roll } from "./diceroll.js";
import zombieStats from "../enemies/zombie.json" assert {type: "json"};
import skeletonStats from "../enemies/skeleton.json" assert {type: "json"};
import spiderStats from "../enemies/spider.json" assert {type: "json"};
import ratStats from "../enemies/rat.json" assert {type: "json"};

export function Enemy(name, level){
    this.name = name;
    this.level = level;
    this.ac = 0;
    this.hp = 0;
    this.hpmax = 0;
}

export function grabEnemyStats(creature){
    switch (creature.name) {
        case 'zombie':
            return zombieStats
        case 'skeleton':
            return skeletonStats
        case 'spider':
            return spiderStats
        case 'rat':
            return ratStats
    }

    console.log(creatureStats) 
}

// ,'skeleton','spider','rat'
export const cr1CreatureList = ['zombie','skeleton','spider','rat'];
export const cr2CreatureList = []
export const cr3CreatureList = []


export function generateEnemy(cr) {
    let creature = null;
    let data = null;
    switch (cr) {
        case 1:
            creature = cr1CreatureList[Math.floor(Math.random() * cr1CreatureList.length)];
            creature = new Enemy(creature, 1);
            creature.ac = grabEnemyStats(creature).ac
            creature.hp = roll(grabEnemyStats(creature).hp).reduce((a, b) => a + b, 0);
            creature.hpmax = creature.hp;
            creature.stats = grabEnemyStats(creature).stats
            return creature
        case 2:
            creature = cr2CreatureList[Math.floor(Math.random() * cr1CreatureList.length)];
            return creature
        case 3:
            creature = cr3CreatureList[Math.floor(Math.random() * cr1CreatureList.length)];
            return creature
    }
}

