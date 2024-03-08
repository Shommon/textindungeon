//copy all console output to console output div

export function consoleInput(text) {
    const output = document.querySelector('.console.output.container');
    output.innerHTML += text;
    //create new line
    output.innerHTML += '<br>';
}

export function clearConsole() {
    const output = document.querySelector('.console.output.container');
    output.innerHTML = '';
}


export function clearInput(){
    document.querySelector('#console-input').value = '';
}



