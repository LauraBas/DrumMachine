
function onkeyPressed(arg){
    Play(arg.key.toUpperCase());
}

function display(text) {
    let display = document.getElementById("disp")
    let description = document.getElementById(text).dataset["desc"]
    display.innerHTML = description;
}

function Play(letra) {
    display(letra);
    document.getElementById(letra).play();
}

document.onkeypress = onkeyPressed;