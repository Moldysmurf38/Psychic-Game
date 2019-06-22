// Base variables
var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var wrong = [];

// Display base variables on the webpage
var winsText = $("#win-text");
var lossesText = $("#loss-text");
var guessText = $("#guess-number");
var wrongChoiceText = $("#wrong-guess");

var psychicChoice = letterChoice[Math.floor(Math.random() * letterChoice.length)];
//console.log("Psychic guess: " + psychicChoice);

// Function that handles any user input
$(document).on("keyup", function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    // Sets parameters to read for user input being letters or not
    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" ||
        userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" ||
        userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" ||
        userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" ||
        userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" ||
        userGuess === "z") {
        // Sets the parameters for a correct guess
        if (userGuess === psychicChoice) {
            wins++;
            $("#win-text").html(wins);
            $("#guess-number").html(10);
            $("#wrong-guess").html("");
            reset();
        }
        // Sets the parameters for a wrong guess
         else {
            guesses--;
            $("#guess-number").html(guesses);
            wrong.push(userGuess);
            $("#wrong-guess").html(wrong+", ");
         }
        // // If guess number reaches zero
         if (guesses <= 0) {
             losses++;
             $("#loss-text").html(losses);
             $("#guess-number").html(10);
             $("#wrong-guess").html("");
             reset();
         }
    // Handles any non-letter user input
    } else {
        alert("Please press a letter key!");
    }
});

// Function that resets guesses. clears wrong div, and serves up new guess
function reset() {
    guesses = 10;
    wrong = [];
    psychicChoice = letterChoice[Math.floor(Math.random() * letterChoice.length)];
    //console.log("Psychic guess: " + psychicChoice);
}