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


document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters.toString();
document.getElementById("remainingGuesses").innerHTML = "Guessed Letters: " + remainingGuesses.toString();
document.getElementById("winCount").innerHTML = "Guessed Letters: " + winCount.toString();
document.getElementById("lossCount").innerHTML = "Guessed Letters: " + lossCount.toString();



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
        document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters.toString();
        document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses.toString();
        document.getElementById("winCount").innerHTML = "Wins: " + winCount.toString();
        document.getElementById("lossCount").innerHTML = "Losses: " + lossCount.toString();
                guessesLeft = 10;
        randomLetter();
    } else if (guessedLetters.length < "10") {
        guessedLetters.push(guess);
        document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters.toString();
        document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses.toString();
        document.getElementById("winCount").innerHTML = "Wins: " + winCount.toString();
        document.getElementById("lossCount").innerHTML = "Losses: " + lossCount.toString();
                guessesLeft--;
    } else {
        lossCount++;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters.toString();
        document.getElementById("remainingGuesses").innerHTML = "Guessed Letters: " + remainingGuesses.toString();
        document.getElementById("winCount").innerHTML = "Guessed Letters: " + winCount.toString();
        document.getElementById("lossCount").innerHTML = "Guessed Letters: " + lossCount.toString();
                guessesLeft = 10;
        randomLetter();
    }
    console.log("guessedLetters " + guessedLetters);
    console.log("guessesLeft" + guessesLeft);
    console.log("wins " + winCount);
    console.log("losses" + lossCount);
};
