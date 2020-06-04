function Play(letra) {
    document.getElementById(letra).play();
    let display = document.getElementById("disp")
    let description = document.getElementById(letra).dataset["desc"]
    display.innerHTML = description;

}

