var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

let guessedLetters = [];
let guessesLeft=10;
let winCount=0;
let lossCount=0;


window.onload = gameStart();

function gameStart() {
    guessedLetters = [];
    guessesLeft = 10;
    winCount = 0;
    lossCount = 0;
    currentLetter = 0;
}

document.getElementById("guessedLetters").innerHTML= guessedLetters

// Picks a random Letter
function randomLetter() {
    var letter = letters[Math.floor(Math.random() * letters.length)];
    currentLetter = letter.toLowerCase();
    console.log(currentLetter);
}

randomLetter();

document.onkeyup = function (event) {
    var guess = event.key;
    if (guess === currentLetter) {
        winCount++;
        guessedLetters = [];
        guessesLeft = 10;
        randomLetter();
    } else if (guessedLetters.length <"10") {
        guessedLetters.push(guess);
        guessesLeft--;
    } else {
        lossCount++;
        guessedLetters = [];
        guessesLeft = 10;
        randomLetter();
    }
    console.log("guessedLetters " + guessedLetters);
    console.log("guessesLeft" + guessesLeft);
    console.log("wins " + winCount);
    console.log("losses" + lossCount);
};
