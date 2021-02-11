const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Your Moods',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

getData();

async function getData() {
  const response = await fetch('/api/moods');
  const data = await response.text();

  const table = data.split('\n').slice(1);
  table.forEach(row => {
    const columns = row.split(',');
    const date = columns[2];
    const rating = columns[3];
    console.log(date, rating)
  })
}


// var data = [
//     {
//       x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00', '2014-01-04 10:20:00', '2014-02-04 12:00:00'],
//       y: [1, 3, 4, 7, 5],
//       type: 'scatter'
//     }
    
//   ];

//   var layout = {
//       title: "Mood - Tracker"
//   }
  
  
  
//   fetch('/api/moods')

//   .then((res) => {
//     console.log(res);
//     Plotly.newPlot('myDiv', data, layout);
        
//     });
    
  