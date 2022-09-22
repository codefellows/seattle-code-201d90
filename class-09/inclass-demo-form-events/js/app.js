'use strict';

// ! FORM DEMO
// #pragma mark Step 1: GRAB THE ELEMENT WE WANT TO LISTEN TO
let myForm = document.getElementById("my-form");

// #pragma mark Step 3: DEFINE OUR EVENT HANDLER (CALLBACK FUNCTION)
function handleSubmit(event) {
  event.preventDefault();

  let name = event.target.firstName.value;
  console.log(name);

  let age = ~~event.target.age.value;
  console.log(age);
  console.log(typeof age);

  let someNum = 5 + age;
  console.log(someNum);

  myForm.reset();
}

// #pragma mark Step 2: ADD EVENT LISTENER - 2 ARGS - EVENT TYPE, CALLBACK FUNCTION (EVENT HANDLER) = THAT FUNCTION PASSED INTO ANOTHER FUNCTION
myForm.addEventListener('submit', handleSubmit);




// ! BOX CLICK DEMO
// #pragma mark Step 1: GRAB THE ELEMENT WE WANT TO LISTEN TO
let myContainer = document.getElementById('container');
let parentEl = document.getElementById('results');


// #pragma mark Step 3: DEFINE OUR EVENT HANDLER (CALLBACK FUNCTION)
function handleClick(event) {
  console.log('this is the event', event);
  console.log('this is the target', event.target);

  if (event.target.id === 'box-one') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    parentEl.appendChild(pEl);
  } else if (event.target.id === 'box-two') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 2 was clicked!';
    parentEl.appendChild(pEl);
  } else if (event.target.id === 'box-three') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 3 was clicked!';
    parentEl.appendChild(pEl);
  } else {
    let pEl = document.createElement('p');
    pEl.textContent = 'CLICK THE BOXES ONLY!';
    parentEl.appendChild(pEl);
  }
}

// #pragma mark Step 2: ADD EVENT LISTENER - 2 ARGS - EVENT TYPE, CALLBACK FUNCTION (EVENT HANDLER) = THAT FUNCTION PASSED INTO ANOTHER FUNCTION
myContainer.addEventListener('click', handleClick);
