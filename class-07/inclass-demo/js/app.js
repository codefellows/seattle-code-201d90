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
let kittenSection = document.getElementById('kitten-profiles');
let kittenCaboodle = [];
// Have a variable to grab your existing table element from your html


// **** HELPER FUNCTIONS - UTILITES *****
// helper function : a function used by another function OR method to do some processing
// grabbed from MDN docs
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // max and min are inclusive with this return
}

// ************ CONSTRUCTOR FUNCTION **********

function Kitten(name,interests,isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo){
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = 0;

  kittenCaboodle.push(this);
}

// ******* PROTOTYPE METHODS ********

Kitten.prototype.getAge = function(){
  this.age = randomAge(3, 12);
};

Kitten.prototype.render = function(){
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

  // ****** TABLE DOM RENDERING ******
  // YOU SHOULD ALREADY HAVE A TABLE IN YOUR SALES.HTML -- NO NEED FOR YOU TO CREATE A TABLE FOR LAB
  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  // tr would be your ul
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  // create content (td or a th) for our table row // think of these as li
  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Good with Cats';
  row1.appendChild(th1Elem);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Good with Dogs';
  row1.appendChild(th2Elem);

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Good with Kids';
  row1.appendChild(th3Elem);

  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);

  let td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);

  let td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(td3Elem);

};

// ***** CREATE OUR OBJECTS USING OUR CONSTRUCTOR ********

new Kitten('Frankie', ['wet food', 'toy mice', 'catnip'], true, true, true, 'img/frankie.jpeg');
new Kitten('Jumper', ['dry food', 'mouse toy', 'treats'], true, false, false, 'img/jumper.jpeg' );
new Kitten('Serena', ['mice', 'lasers', 'scratching'], false, false, false, 'img/serena.jpeg');

console.log(kittenCaboodle);
// kittenCaboodle[0].getAge();
// kittenCaboodle[0].render();


function renderAll(){
  for(let i = 0; i < kittenCaboodle.length; i++){
    kittenCaboodle[i].getAge();
    kittenCaboodle[i].render();
  }
}

renderAll();

// ****** OBJECT LITERALS *******

// let frankie = {
//   name: 'Frankie',
//   age: 0,
//   interests: ['wet food', 'toy mice', 'catnip'],
//   isGoodWithCats: true,
//   isGoodWithDogs: true,
//   isGoodWithKids: true,
//   photo: 'img/frankie.jpeg',
//   getAge: function () {
//     this.age = randomAge(3, 12);
//   },
//   render: function () {
//     // ******** DOM MANIPULATION ********
//     // EACH KITTY WILL BE RESPONSIBLE FOR RENDERING ITSELF TO THE HTML DOC

//     let articleElem = document.createElement('article');
//     kittenSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.name} is ${this.age} months`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.interests.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     articleElem.appendChild(imgElem);
//   }
// };

// let jumper = {
//   name: 'Jumper',
//   age: 0,
//   interests: ['dry food', 'fish toy', 'treats'],
//   isGoodWithCats: true,
//   isGoodWithDogs: true,
//   isGoodWithKids: true,
//   photo: 'img/jumper.jpeg',
//   getAge: function () {
//     this.age = randomAge(3, 12);
//   },
//   render: function () {
//     // ******** DOM MANIPULATION ********

//     let articleElem = document.createElement('article');
//     kittenSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.name} is ${this.age} months`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.interests.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     articleElem.appendChild(imgElem);
//   }
// };

// let serena = {
//   name: 'Serena',
//   age: 0,
//   interests: ['mice', 'lasers', 'scratching'],
//   isGoodWithCats: false,
//   isGoodWithDogs: false,
//   isGoodWithKids: true,
//   photo: 'img/serena.jpeg',
//   getAge: function () {
//     this.age = randomAge(3, 12);
//   },
//   render: function () {
//     // ******** DOM MANIPULATION ********

//     let articleElem = document.createElement('article');
//     kittenSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.name} is ${this.age} months`;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < this.interests.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = this.interests[i];
//       ulElem.appendChild(liElem);
//     }

//     let imgElem = document.createElement('img');
//     imgElem.src = this.photo;
//     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//     articleElem.appendChild(imgElem);
//   }
// };

//  ***** EXECUTABLE CODE *********
// frankie.getAge();
// frankie.render();
// jumper.getAge();
// jumper.render();
// serena.getAge();
// serena.render();

