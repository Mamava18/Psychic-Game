//The purpose of this program is to create a letter guessing game user vs. computer.

//Global variables
var numwins = 0;
var numloses = 0;
var guessleft = 10;
var userentry = [];
var compoption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//User has to make a choice
//Computer has to make a choice
//Compare user and computer choice 
//If letters are the same, the user wins and the game resets
//If the letters are different, then the number of guesses left decreases by one
//When the counter reaches to the last guess left (0) and the letters are not the same, then the user loses
//Each letter is saved in the array and displayed until there is a win.


//This section opens an event and it requires that when a key is pressed, the code inside is executed.
document.onkeyup = function (event) {

    //This is to declare a local variable that takes an input from the user through an event (when pressing a key).
    var letguess = event.key;
    //console.log("user guesss:" + letguess);

    //This is to declare a local variable to generate a computer guess which is a random letter chosen from the array compoption declared in the global scope.
    var compguess = compoption[Math.floor(Math.random() * compoption.length)];
    //console.log('computer guess: ' + compguess);

    //This is to indicate that as soon as the user executes the event, the number of guesses contained in the variable guessleft, is decreased by one.
    guessleft--;
    //console.log("Guesses left " + guessleft);

    //In this condition if the number of guesses left is equal to 0 then the number of of loses increases by 1 and the game resets
    if (guessleft === 0) {
        numloses++;
        //console.log("Loses: " + numloses);
        userentry = [];
        guessleft = 9;

    }

    //In this condition if the letter guessed by the user is the same as the one guessed by the computer, then the user wins and the game resets
    if (letguess === compguess) {
        numwins++;
        //console.log("Wins: " + numwins);
        guessleft = 9;
        userentry = [];
        //console.log("Your choices: " + userentry);
    }

    //With this condition I evaluate if the letters are different and then the letter gets stored in the array and is displayed
    else {
        if (numloses >= 0) {
            userentry.push(letguess);
            //console.log("Your choices: " + userentry);
        }
    }

    //In this part of the code, the variables are written to each corresponding html element using the method getElementById()
    var userwins = document.getElementById("wins"); 
    userwins.innerHTML = "<p>Wins: " + numwins + "</p>"; //Writes the number of wins

    var userloses = document.getElementById("loses");
    userloses.innerHTML = "<p>Loses: " + numloses + "</p>"; //Writes the number of loses

    var numguess = document.getElementById("gleft");
    numguess.innerHTML = "<p>Guesses left: " + guessleft + "</p>" //Writes the number of guesses left

    var userguesses = document.getElementById("arrguess");
    userguesses.innerHTML = "<p>Your Gueses so far: " + userentry + "</p>" //Writes the array of values entered by the user until the game is reset 
}



