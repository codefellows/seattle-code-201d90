'use strict';

console.log('hey there hey!');

// ! LOCAL STORAGE DEMO CODE STARTS ON LINE 193

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

Goat.prototype.myMethod = function () {
  return 'hey';
};

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

  // TODO: Create arrays that will hold our dynamic data for the chart obj
  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  // TODO: Loop through our goatArray and pull out the necessary information for our data arrays
  for (let i = 0; i < goatArray.length; i++) {
    goatNames.push(goatArray[i].name);
    goatVotes.push(goatArray[i].clicks);
    goatViews.push(goatArray[i].views);
  }

  // TODO: create a chart object to pass into the Chart constructor call to populate the chart
  Chart.defaults.font.size = 20;
  Chart.defaults.font.weight = 'bold';

  let myChartObj = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: '# of Votes',
        data: goatVotes,
        backgroundColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: goatViews,
        backgroundColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: 'white' },
        },
        x: {
          ticks: { color: 'white' }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white',
            padding: 30,
            font: {
              size: 16
            }
          },
        }
      }
    },
    // defaults: {
    //   font: {
    //     size: 20
    //   }
    // }
  };

  // TODO: call the Chart constructor. It takes in 2 args, the canvas element and the object with data
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

    // ********* LOCAL STORAGE STARTS HERE ************
    // STEP 1: STRINGIFY THE DATA
    let stringifiedGoats = JSON.stringify(goatArray);

    console.log('stringified goats >>>', stringifiedGoats);

    // STEP 2: ADD TO LOCAL STORAGE
    localStorage.setItem('myGoats', stringifiedGoats);

  }
}



// ? call my chart function here if I wanted to keep the button
function handleShowResults() {
  if (voteCount === 0) {
    renderChart();
    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

// ********* MORE LOCAL STORAGE CODE *********
// STEP 3: PULL DATA OUT OF LOCAL STORAGE
let retreivedGoats = localStorage.getItem('myGoats');
console.log('retreivedGoats >>> ', retreivedGoats);

// STEP 4: PARSE MY DATA INTO CODE MY APP CAN USE

let parsedGoats = JSON.parse(retreivedGoats);

console.log('parsed Goats >>>', parsedGoats);

// ****** EXECUTABLE CODE ********

if(retreivedGoats){
  goatArray = parsedGoats;
} else{
  new Goat('bunny-goat', 'png');
  new Goat('cool-goat');
  new Goat('cruisin-goat');
  new Goat('float-your-goat');
  new Goat('goat-out-of-hand');
  new Goat('kissing-goat');
  new Goat('sassy-goat');
  new Goat('smiling-goat');
  new Goat('sweater-goat');
}

// ***** REBUILD GOAT INSTANCES USING CONSTRUCTOR *****

// if (retreivedGoats) {
//   for (let i = 0; i < parsedGoats.length; i++) {
//     if (parsedGoats[i].name === 'bunny-goat') {
//       let reconstructedBunnyG = new Goat(parsedGoats[i].name, 'png');
//       reconstructedBunnyG.clicks = parsedGoats[i].clicks;
//       reconstructedBunnyG.views = parsedGoats[i].views;
//     } else {
//       let reconstructedGoat = new Goat(parsedGoats[i].name);
//       reconstructedGoat.clicks = parsedGoats[i].clicks;
//       reconstructedGoat.views = parsedGoats[i].views;
//     }
//   }
// } else {
//   new Goat('bunny-goat', 'png');
//   new Goat('cool-goat');
//   new Goat('cruisin-goat');
//   new Goat('float-your-goat');
//   new Goat('goat-out-of-hand');
//   new Goat('kissing-goat');
//   new Goat('sassy-goat');
//   new Goat('smiling-goat');
//   new Goat('sweater-goat');
// }

console.log('goat array after if/else', goatArray);
console.log('goat array after constructor >> ', goatArray);
renderImgs();

imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);


