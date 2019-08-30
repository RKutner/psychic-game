var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

let guessedLetters = [];
let remainingGuesses=10;
let winCount=0;
let lossCount=0;


window.onload = gameStart();

function gameStart() {
    guessedLetters = [];
    remainingGuesses = 10;
    winCount = 0;
    lossCount = 0;
    currentLetter = 0;
}


document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters.toString();
document.getElementById("remainingGuesses").innerHTML = "Guessed Letters: " + remainingGuesses.toString();
document.getElementById("winCount").innerHTML = "Guessed Letters: " + winCount.toString();
document.getElementById("lossCount").innerHTML = "Guessed Letters: " + lossCount.toString();



// Picks a random Letter
function randomLetter() {
    currentLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(currentLetter);
}



randomLetter();

document.onkeyup = function (event) {
    var guess = event.key;
    if (letters.includes(guess)){
    if (guess === currentLetter) {
        winCount++;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters.toString();
        document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses.toString();
        document.getElementById("winCount").innerHTML = "Wins: " + winCount.toString();
        document.getElementById("lossCount").innerHTML = "Losses: " + lossCount.toString();
                remainingGuesses = 10;
        randomLetter();
    } else if (guessedLetters.length < "10") {
        guessedLetters.push(guess);
        document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters.toString();
        document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses.toString();
        document.getElementById("winCount").innerHTML = "Wins: " + winCount.toString();
        document.getElementById("lossCount").innerHTML = "Losses: " + lossCount.toString();
                remainingGuesses--;
    } else {
        lossCount++;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters.toString();
        document.getElementById("remainingGuesses").innerHTML = "Guessed Letters: " + remainingGuesses.toString();
        document.getElementById("winCount").innerHTML = "Guessed Letters: " + winCount.toString();
        document.getElementById("lossCount").innerHTML = "Guessed Letters: " + lossCount.toString();
                remainingGuesses = 10;
        randomLetter();
    }
    // console.log("guessedLetters " + guessedLetters);
    // console.log("remainingGuesses" + remainingGuesses);
    // console.log("wins " + winCount);
    // console.log("losses" + lossCount);
}};
