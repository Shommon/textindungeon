import {roll, statroll} from "./diceroll.js";
import {baseCharacter, barbarian, cleric} from "./generatecharacter.js";
import { consoleInput, clearConsole, clearInput } from "./console.js";
import { generateMessage, introMessage, introErrorMessage, pickClassMessage, generateErrorMessage, delayMessage} from "./messages.js";


//Play Intro
introMessage();

//Handle Progression
let progression = ['intro','generate','pickclass','ready','end'];
let currentProgression = progression[0];
export let characterName = '';


//Handle Input
document.getElementById("console-input").addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        let input = document.getElementById("console-input").value;
        // consoleInput(input);
        clearInput();
        checkProgression(input);

        // if( && progression[progression.length - 1] === 'intro'){
        //     currentProgression = progression[1];
        // }        
    }
})

function checkProgression(input) {
    //Intro Stage
    if (input === 'generate character' && currentProgression === 'intro') {
        currentProgression = progression[1];
        // consoleInput(currentProgression)
        clearConsole();
        generateMessage();
        console.log(currentProgression)
        return
    } else if (input !== 'generate character' && currentProgression === 'intro') {
        introErrorMessage();
    }

    //Generate Stage
    if (input.length > 0 && currentProgression === 'generate') {
        console.log('true')
        characterName = input;
        currentProgression = progression[2];
        clearConsole();
        pickClassMessage();
        return
    } else if (input.length === 0 && currentProgression === 'generate') {
        generateErrorMessage();
    }

    //Pick Class Stage
    if (currentProgression === 'pickclass') {
        if (input === 'barbarian') {
            let character = new barbarian(characterName, 1);
            consoleInput("Name: " + character);
            consoleInput("Class: " + character.class.toUpperCase);
            consoleInput("Level: " + character.level);
            consoleInput('Type "ready" to begin..."');
            currentProgression = progression[3];
        }
    }
    
    
}


//Generate Character
