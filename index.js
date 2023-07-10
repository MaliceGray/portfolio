const word = document.querySelector('#word');

const colour = ['#FFC28B', '#FE6D4E', '#4C7D8E', '#174D7C', '#1C284E'];

function getRandomColor() {
    let randomNumber = Math.floor(Math.random() * colour.length);
    let randomColour = colour[randomNumber];
    return randomColour;
}

function animateLetters(letter) {
    let spanLetters = letter.querySelectorAll('span');

    for(let i = 0; i < spanLetters.length; i++) {
        let spanLetter = spanLetters[i];
        let randomDuration = 0.9 + Math.random() * 1;

        spanLetter.style.setProperty('--duration', randomDuration + 's');
    }

    setInitialRandomColor(spanLetters);

    word.addEventListener('animationiteration', changeColor, true);
}

animateLetters(word);

function setInitialRandomColor(elements) {
    for (let i=0; i < elements.length; i++) {
        let letter = elements[i];
        letter.style.setProperty('--colourOne', getRandomColor());
        letter.style.setProperty('--colourTwo', getRandomColor());
    }
}

function changeColor(event) {
    let spanStyle = getComputedStyle(event.target);
    let finalColor = spanStyle.getPropertyValue('--colourTwo');

    event.target.style.setProperty('--colourOne', finalColor);
    event.target.style.setProperty('--colourTwo', getRandomColor());
}
