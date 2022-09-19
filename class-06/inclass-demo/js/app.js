'use strict';

// Jose is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Jose knows a little bit of javascript... he can make objects!

// ? what are we going to display?
// Kittens
// TODO figure out what info about each kitten we need to show:
// * name
// * age with a function - 3 months and 12 months
// * interests []
// * isGoodWithCats
// * isGoodWithDogs
// * isGoodWithKids
// * photo

// **** GLOBALS / WINDOW INTO THE DOM *****
// HELPFUL FOR YOUR LAB!!
// let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// DOM MANIPULATION STEP 1: WINDOW INTO YOUR HTML DOCUMENT
// 1 WAY TO DO THIS: document.getElementById = method that will take a string for ID
// 2nd way: document.querySelector = method that takes in a string of either an ID, className, or element type
let kittenSection = document.getElementById('kitten-profiles');

// this console will show you how JS sees an HTML element -- an object!
console.dir(kittenSection);

// **** HELPER FUNCTIONS - UTILITES *****
// helper function : a function used by another function OR method to do some processing
// grabbed from MDN docs
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // max and min are inclusive with this return
}

// ****** OBJECT LITERALS *******

let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['wet food', 'toy mice', 'catnip'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function () {
    this.age = randomAge(3, 12);
  },
  render: function () {
    // ******** DOM MANIPULATION ********
    // EACH KITTY WILL BE RESPONSIBLE FOR RENDERING ITSELF TO THE HTML DOC

    // STEP 2: CREATE THE ELEMENT
    let articleElem = document.createElement('article');
    // articleElem.id = `${this.name}-article`; -- adding an ID to a created element
    // articleElem.setAttribute('class', 'someClass') -- another way to do it
    // STEP 3: GIVE CONTEXT IF NECESSARY
    // STEP 4: ADD IT TO THE DOM --> parent.appendChild(child to append);
    kittenSection.appendChild(articleElem);

    // create h2 element
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age} months`;
    articleElem.appendChild(pElem);

    //   *** LINES 70 - 77 WILL BE HELPFUL FOR YOUR LAB ****
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.interests.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};


let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['dry food', 'fish toy', 'treats'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/jumper.jpeg',
  getAge: function () {
    this.age = randomAge(3, 12);
  },
  render: function () {
    // ******** DOM MANIPULATION ********

    let articleElem = document.createElement('article');
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age} months`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.interests.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};

let serena = {
  name: 'Serena',
  age: 0,
  interests: ['mice', 'lasers', 'scratching'],
  isGoodWithCats: false,
  isGoodWithDogs: false,
  isGoodWithKids: true,
  photo: 'img/serena.jpeg',
  getAge: function () {
    this.age = randomAge(3, 12);
  },
  render: function () {
    // ******** DOM MANIPULATION ********

    let articleElem = document.createElement('article');
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age} months`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.interests.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};

//  ***** EXECUTABLE CODE *********
frankie.getAge(); // need to call this METHOD to generate age for Frankie
frankie.render(); // need to call this METHOD to render all the HTML to the page
jumper.getAge();
jumper.render();
serena.getAge();
serena.render();
// console.log(frankie);

