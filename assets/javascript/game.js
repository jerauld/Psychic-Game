var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var winsDisplay = document.querySelector("#winsDisplay");
var lossesDisplay = document.querySelector("#lossesDisplay");
var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay")


var userWinCount = 0;
var userLossCount = 0;
var userGuessesLeft = 9;
var guessesMade = [];
var randomLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];


document.addEventListener('keyup', function (event) {
    //If the user presses a key that is not A-Z, the program will do nothing.
    if (alphabetArray.indexOf(event.key) > -1) {
        guessCheck();
    }
});

function guessCheck(){
    if (event.key === randomLetter) {
        //When the player wins, increase the Wins counter,
        userWinCount++;
        winsDisplay.textContent = userWinCount;
        //and start the game over again
        reset();
    } else {
        //When a guess is in correct, the guess should be be pushed into the guessesMade array and then displayed.
        guessesMade.push(event.key);
        guessesMadeDisplay.textContent = guessesMade;
        //When a guess is incorrect, guesses left will reduce by one and then displayed.
        userGuessesLeft--;
        guessesLeftDisplay.textContent = userGuessesLeft;
        //When the userGuessesLeft reaches 0, the userLossCount value will increase by one and then displayed.
        if (userGuessesLeft === 0) {
            userLossCount++;
            lossesDisplay.textContent = userLossCount;
            //and start the game over again
            reset();
        }
    }
}

function reset(){
    //When the game ends, guesses made should reset to null
    guessesMade = [];
    guessesMadeDisplay.textContent = guessesMade;
    //When the game ends, guesses left should reset to 9
    userGuessesLeft = 9;
    guessesLeftDisplay.textContent = userGuessesLeft;
}