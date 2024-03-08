//copy all console output to console output div


export function consoleInput(text) {
    const output = document.querySelector('.console.output.container');
    output.innerHTML += text;
    //create new line
    output.innerHTML += '<br>';

    //Send to main.js
}

//Detect enter keyp press while typing in input field
document.getElementById("console-input").addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        consoleInput(document.getElementById("console-input").value);
        document.getElementById("console-input").value = "";
    }
})


