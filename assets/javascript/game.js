
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 8;
var guessesLeft = 8;
var guessedLetters = [];
var letterToGuess = null;



var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);





    var updateGuessesLeft = function() {
      document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
    };

    var updateLetterToGuess = function() {
      this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    };
    var updateGuessesSoFar = function() {

      document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
    };

    var reset = function() {
      totalGuesses = 8;
      guessesLeft = 8;
      guessedLetters = [];

      updateLetterToGuess();
      updateGuessesLeft();
      updateGuessesSoFar();
    }

    updateLetterToGuess();
    updateGuessesLeft();



    document.onkeyup = function(event) {
        guessesLeft--;
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      console.log(userGuess);

      guessedLetters.push(userGuess);
      updateGuessesLeft();
      updateGuessesSoFar();

            if (guessesLeft > 0){
                if (userGuess == computerGuess){
                    wins++;
                    document.querySelector('#wins').innerHTML = "Wins: " + wins;
                    alert("Yes, the force is strong!");
                    reset();
                }
            }else if(guessesLeft == 0){

                losses++;
                document.querySelector('#losses').innerHTML = "Losses: " + losses;
                alert("Sorry, you fail...");

                reset();
            }
    };
