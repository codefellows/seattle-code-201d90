'use strict';

console.log('hey world heyyyy!');

// // TODO Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// declare variable that will store the user response from my prompt

// // TODO alert if user guessed right
// if -> userGuess === correct answer -> alert user they are correct

// // TODO Indicates through an alert if the guess is “too high”
// if -> userGuess > correct answer -> alert user they are too high
// // TODO alert if quess “too low”.
// if -> userGuess < correct answer -> alert user they are too low

// TODO After all attempts have been exhausted, tell the user the correct answer.
// if attempts === 0 -> alert the correct answer

// ? It should give the user exactly four opportunities to get the correct answer.
// ? Consider using a loop of some sort.


// while loop

// let attempts = 4;
// let myNum = 30;

// while(attempts){
//   let userGuess = +prompt('What number am I thinking of?');
//   if(userGuess === myNum){
//     alert('You are right!');
//     break;
//   } else if(userGuess > myNum){
//     alert('Too high');
//   } else if(userGuess < myNum){
//     alert('Too low');
//   }
//    attempts--;
//    if(attempts === 0){ // i === 3
//     alert(`The correct answer was ${myNum}`);
//    }
// }







// TODO Add a 7th question that has multiple possible correct
// declare variable that store user guess from prompt
// // ? answers that are stored in an array.
// values stored in an array that user can guess
// ? Give the user 6 attempts to guess the correct answer.
// TODO The guesses will end once the user guesses a correct answer
// if -> userguess === any element in that array -> alert correct
// TODO or they run out of attempts.
// if -> attempts === 0 -> end the guessing round
// TODO Display all the possible correct answers to the user.
// alert -> all elements in my array
// ? Consider using a loop of some sort for this question.


let boyBands = ['backstreet boys', 'take that', 'bts', 'one direction', 'new edition'];

function questionSeven(){
  for(let i = 0; i < 6; i++){ // ! slow loop - counter for my 6 attempts
    let boyBandGuess = prompt('Guess one of my fave boy bands').toLowerCase();
    // boyBandGuess = bts
    for(let j = 0; j < boyBands.length; j++){ // ! fast loop - to look at every element in the array
      if(boyBandGuess === boyBands[j]){
        alert('OMG I LOVVVEEE THEM!');
        i = 6;
        break;
      }
    }

  }
}

questionSeven();
alert(`These are all of my fave boybands ${boyBands}`);
