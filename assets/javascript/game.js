//The first step will be to declare variables that will store the number of wins, loses and guesses left.

var numwins = 0;
var numloses = 0;
var guessleft = 10;
var userentry = [];
var compoption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var useroption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//User has to make a choice
//Computer has to make a choice
//Compare user and computer choice and determine if win or lose
//If lose, reduce the number of guesses by one until equal to 0
//If win, increase the number of wins until the number of lose is equal to 0
//Record all the letters guessed by user


document.onkeyup = function (event) {

    var letguess = event.key;
    console.log("user guesss:" + letguess + ", ");
    //var letguess = String.fromCharCode(event.keyCode).toLowerCase();
    //console.log('your guess: ' + letguess);
    var compguess = compoption[Math.floor(Math.random() * compoption.length)];
    console.log('computer guess: ' + compguess);


    guessleft--;
    console.log("Guesses left " + guessleft);

    if (guessleft === 0) {
        numloses++;
        console.log("Loses: " + numloses);
        guessleft = 10;

    }

    if (letguess === compguess) {
        numwins++;
        console.log("Wins: " + numwins);
        guessleft = 10;
        userentry = [];
        //userentry.push(letguess);
        console.log("Your choices: " + userentry);
    }
    else {
        //letguess = [];
        if (numloses >= 1) {
            userentry.push(letguess);
            console.log("Your choices: " + userentry);
        }
        //numloses++;
        //guessleft--;
        //console.log("Guesses left " + guessleft);
        //userentry = [];
        //console.log("Loses: " + numloses);
        //console.log("Your entries: " + userentry);
    }




}



