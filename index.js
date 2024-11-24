
let buttonContainer = document.getElementById('letters');
let textEditor = document.getElementById('textEditor');
let replaceChars = document.getElementById("replaceChars");
let caseSensitive = document.getElementById("caseSensitive");
let shuffleButton = document.getElementById("shuffle");

async function init () {
    let config = await fetch("config.json").then(response => response.json())

    let buttonLetters = Object.keys(config)
    let lettersToReplace = Object.values(config);
    buttonLetters.forEach((letter, index) => {
        const button = document.createElement('button');
        button.innerText = letter;
        button.id = "character";

        button.onclick = () => {
            if (replaceChars.checked) {
                if (!caseSensitive.checked) {
                    textEditor.value = textEditor.value.replaceAll(lettersToReplace[index].toUpperCase(), letter);
                    textEditor.value = textEditor.value.replaceAll(lettersToReplace[index].toLowerCase(), letter);
                } else {
                    textEditor.value = textEditor.value.replaceAll(lettersToReplace[index], letter);
                }
            } else {
                textEditor.value += letter;
            }
        };
        buttonContainer.appendChild(button);
    });
    
    shuffleButton.addEventListener("click", () => {
        buttonLetters.forEach((letter, index) => {
            if (!caseSensitive.checked) {
                textEditor.value = textEditor.value.replaceAll(lettersToReplace[index].toUpperCase(), letter);
                textEditor.value = textEditor.value.replaceAll(lettersToReplace[index].toLowerCase(), letter);
            } else {
                textEditor.value = textEditor.value.replaceAll(lettersToReplace[index], letter);
            }
        }); 
    })
}

init();