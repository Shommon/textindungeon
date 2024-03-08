// make a dice roller
/** Simple Dice Roller
 * @param {string} dice - The dice roll
 * @returns {array} tray - The tray of rolls
 */

export function roll(dice) {
    // detect first and last numbers with regex for an input string if {number}d{number}
    let match = dice.toString().match(/(\d+)d(\d+)/);
    if (match) {
        let rolls = parseInt(match[1]);
        let sides = parseInt(match[2]);
        let tray = [];
        for (let i = 0; i < rolls; i++) {
            tray.push(Math.floor(Math.random() * sides) + 1);
        }
        return tray;
    }
}

export function statroll(tray){
    tray.sort((a,b) => b - a);
    tray.pop();
    return tray.reduce((a, b) => a + b, 0)
}

