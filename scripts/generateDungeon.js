import {Enemy, generateEnemy, grabEnemyStats, cr1CreatureList, cr2CreatureList, cr3CreatureList} from './enemies.js';

const generatedDungeonEnemies = [];
for (let i = 0; i < 10; i++) {
    let num = Math.random();
    if (num < 0.5) {
        generatedDungeonEnemies.push(generateEnemy(1));
    } else if (num > 0.5 && Math.random() < 0.6) {
        generatedDungeonEnemies.push('loot');
    } else {
        generatedDungeonEnemies.push('');
    }

};

console.log(generatedDungeonEnemies)