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

// Canvas element for chart to render to
let canvasElem = document.getElementById('my-chart').getContext('2d');

// ******* CONSTRUCTOR FUNCTION ********

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;

  goatArray.push(this);
}

// ****** HELPER FUNTCION / UTILITIES ******
function randomIndex() {
  return Math.floor(Math.random() * goatArray.length);
}


function renderImgs() {
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();

  while (imgOneIndex === imgTwoIndex) {
    imgTwoIndex = randomIndex();
  }

  imgOne.src = goatArray[imgOneIndex].img;
  imgTwo.src = goatArray[imgTwoIndex].img;

  goatArray[imgOneIndex].views++;
  goatArray[imgTwoIndex].views++;

  imgOne.alt = goatArray[imgOneIndex].name;
  imgTwo.alt = goatArray[imgTwoIndex].name;
}


// ******** CANVAS DEMO - CHART FUNCTION *******

function renderChart() {

  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  for (let i = 0; i < goatArray.length; i++) {
    goatNames.push(goatArray[i].name);
    goatVotes.push(goatArray[i].clicks);
    goatViews.push(goatArray[i].views);
  }

  let myChartObj = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        data: goatVotes,
        label: '# of Votes',
        backgroundColor: [
          'green',
        ],
        borderColor: [
          'green'

        ],
        borderWidth: 10
      },
      {
        data: goatViews,
        label: '# of Views',
        backgroundColor: [
          'blue'

        ],
        borderColor: [
          'blue'
        ],
        borderWidth: 10
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(canvasElem, myChartObj);
}


// ***** EVENT HANDLERS **********

function handleClick(event) {

  let imgClicked = event.target.alt;

  for (let i = 0; i < goatArray.length; i++) {
    if (goatArray[i].name === imgClicked) {
      // increase vote counts
      goatArray[i].clicks++;
    }
  }
  voteCount--;

  renderImgs();

  if (voteCount === 0) {
    imgContainer.removeEventListener('click', handleClick);
    renderChart(); // rendering the chart without the button
  }
}

// ? call my chart function here if I wanted to keep the button
function handleShowResults() {
  if (voteCount === 0) {
    // for (let i = 0; i < goatArray.length; i++) {
    //   let liElem = document.createElement('li');
    //   liElem.textContent = `${goatArray[i].name} was viewed: ${goatArray[i].views} and clicked: ${goatArray[i].clicks}`;
    //   resultsContainer.appendChild(liElem);
    // }
    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

// ****** EXECUTABLE CODE ********

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


