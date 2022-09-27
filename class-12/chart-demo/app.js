const ctx = document.getElementById('myChart').getContext('2d');
// console.dir(ctx);

let myChartObj = {
  type: 'bar',
  data: {
      labels: ['Green', 'Black', 'Yellow', 'Green', 'Purple', 'Orange', 'Unknown'],
      datasets: [{
        data: [50, 19, 3, 5, 2, 3, 8],
        label: '# of Votes',
          backgroundColor: [
              'green',
              '#4535ff',
              '#f5a9b8',

          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',

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
}

// 2 arg, 1st canvas element, 2nd is an object
const myChart = new Chart(ctx, myChartObj);
