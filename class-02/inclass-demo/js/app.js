'use strict';

console.log('hey world heyyyy!');

let visitorName = prompt('What is your name?');

alert(`Welcome to my site ${visitorName}! Please guess yes or no to the following questions`);

let questionOneGuess = prompt('Do I have a daughter?').toUpperCase();

if(questionOneGuess === 'Y' || questionOneGuess === 'YES'){
  alert('You are correct!');
} else if(questionOneGuess === 'N' || questionOneGuess === 'NO'){
  alert('Sorry, you are wrong');
}

alert(`Thanks for playing ${visitorName}`);
