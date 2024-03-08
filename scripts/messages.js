import { clearConsole, consoleInput } from "./console.js";
import { characterName } from "./main.js";

export function delayMessage(text, time) {
    setTimeout(function() {
        consoleInput(text);
    },1000*time);
}

export function introMessage() {
    consoleInput('Welcome Traveler, this is Text In Dungeon!');
    consoleInput('To create a character, type "generate character"');
}

export function introErrorMessage() {
    clearConsole();
    introMessage();
    consoleInput('Invalid Input: Please type "generate character"');
}

export function generateMessage() {
    setTimeout(function() { 
        consoleInput("Generating Character...") 
    }, 0)
    //wait 2 seconds
    setTimeout(function() {
        consoleInput("Character Generated!")
    }, 3000)
    setTimeout(() => {
        consoleInput("Please Enter a Name...")
    }, 4000)
}

export function generateErrorMessage() {
    clearConsole();
    consoleInput("Generating Character...") 
    consoleInput("Character Generated!")
    consoleInput("Invalid Input");
    consoleInput("Please Enter a Name...");
}

export function pickClassMessage() {
    consoleInput(`Ah, I see... Your name is ${characterName}!`);
    delayMessage('You sound like a brave soul, what class are you?',2)
    delayMessage('Classes: Barbarian, Wizard, Rogue, Cleric',4)
    delayMessage('Please type your class...',5)
} 