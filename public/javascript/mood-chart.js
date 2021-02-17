const ctx = document.getElementById('myChart');



const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Your Moods',
            data: [],
            backgroundColor: [
                'rgba(47, 157, 144, .4)',
                
            ],
            borderColor: [                
                'rgba(47, 157, 144, 1)'                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {            
            yAxes: [{                
                ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1.0,                    
                }
            }]
        },
        title: {
            display: true,
            fontSize: 18,
            text: 'Moodtracker'
        },        
        responsive: true,
        aspectRatio: 2,
        maintainAspectRatio: true,
        tooltips: {
            mode: 'nearest'
        } 
    }
});

getData();

async function getData() {
  const response = await fetch('/api/moods/')
  .then(dbMoodData => {
      return dbMoodData.json();
  })
  .then(dbMoodData => {
    console.log(dbMoodData);
    myChart.data.datasets[0].data = dbMoodData.map(moodData => moodData.mood_rating);
    myChart.data.labels = dbMoodData.map(moodData => moodData.mood_date);
    
    
    myChart.update();
    
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
    
  