var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var wins = 1;
var losses = 1;
var guesses = 10;
var wrong = [];

var winsText = document.getElementById("win-text");
var lossesText = document.getElementById("loss-text");
var guessText = document.getElementById("guess-number");
var wrongChoiceText = document.getElementById("wrong-guess");

var psychicGuess = letterChoice[Math.floor(Math.random() * letterChoice.length)];

document.onkeyup = function (event) {

    // Key pressed
    var userGuess = event.key;
    // The computer guess

    console.log(psychicGuess)

    // If player guesses correctly
    if (userGuess === psychicGuess) {
        document.getElementById("win-text").innerHTML = wins++;
        document.getElementById("guess-number").innerHTML = 10;
        document.getElementById("wrong-guess").innerHTML = [];
        reset()
    }
    // Otherwise
    else {
        document.getElementById("guess-number").innerHTML = guesses--;
        wrong.push(userGuess);
        document.getElementById("wrong-guess").innerHTML = wrong;
    }
    // If guess number reaches zero
    if (guesses <= 0) {
        document.getElementById("loss-text").innerHTML = losses++;
        document.getElementById("guess-number").innerHTML = 10;
        document.getElementById("wrong-guess").innerHTML = [];
        reset()
    }

    function reset() {
        guesses = 10;
        wrong = [];
        psychicChoice = letterChoice[psychicGuess];
        psychicGuess = letterChoice[Math.floor(Math.random() * letterChoice.length)];
    }


};