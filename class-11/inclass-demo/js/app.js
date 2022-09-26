'use strict';

console.log('hey there hey!');

// ******* GLOBAL VARIABLES *******
let voteCount = 15;
let goatArray = [];

// ******* DOM REFERENCES *********
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');

let resultsBtn = document.getElementById('show-results-btn');
let resultsContainer = document.getElementById('results-container');


// ******* CONSTRUCTOR FUNCTION ********

function Goat(name, fileExtension = 'jpg'){
  this.name = name;
  this.img = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;

  goatArray.push(this);
}

// ****** HELPER FUNTCION / UTILITIES ******
function randomIndex(){
  return Math.floor(Math.random() * goatArray.length);
}


function renderImgs(){
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();

  // this will run and make sure they are unique
  // ? multiple conditions to check for with 3 images
  // ? OR use a container to store your 3 indexes and do your validation on that
  while(imgOneIndex === imgTwoIndex){
    imgTwoIndex = randomIndex();
  }

  imgOne.src = goatArray[imgOneIndex].img;
  imgTwo.src = goatArray[imgTwoIndex].img;

  goatArray[imgOneIndex].views++;
  goatArray[imgTwoIndex].views++;

  imgOne.alt = goatArray[imgOneIndex].name;
  imgTwo.alt = goatArray[imgTwoIndex].name;
}

// ***** EVENT HANDLERS **********

function handleClick(event){
  console.dir(event.target);
  let imgClicked = event.target.alt;

  // TODO: Add clicks to the image that was clicked
  console.log('img clicked >>', imgClicked);

  for(let i = 0; i < goatArray.length; i++){
    if(goatArray[i].name === imgClicked){
      // increase vote counts
      goatArray[i].clicks++;
    }
  }

  // TODO: decrement the vote count
  voteCount--;

  // TODO: call the render img to reload new images
  renderImgs();

  // TODO: after voting rounds have ended... end the clicks!
  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
}

function handleShowResults(){
  // TODO: Display results - once there are no more votes left
  if(voteCount === 0){
    for(let i = 0; i < goatArray.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${goatArray[i].name} was viewed: ${goatArray[i].views} and clicked: ${goatArray[i].clicks}`;
      resultsContainer.appendChild(liElem);
    }
    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

// ****** EXECUTABLE CODE ********

// ! OBJECT CREATION

new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

renderImgs();

imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);
