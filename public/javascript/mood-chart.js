const ctx = document.getElementById('myChart');



const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Moods',
            data: [],
            backgroundColor: 'rgba(47, 157, 144, .4)',
            borderColor: 'rgba(47, 157, 144, 1)',
            borderWidth: 2,            
            radius: 5,
            pointStyle: 'circle',
            pointHitRadius: 20,
            pointBorderColor: 'rgba(124, 115, 191, .9)',
            pointBackgroundColor: 'rgba(124, 115, 191, .9)',
            
            
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
            fontSize: 20,
            text: 'Moodtracker™'
        },
        tooltips: {
            mode: 'nearest',
            titleAlign: 'center',
            titleFontSize: 18,
            titleFontColor: '#2e1b0f',
            bodyFontColor: '#2e1b0f',
            bodyFontSize: 18,
            bodyAlign: 'center',
            backgroundColor: 'hsl(0, 28%, 91%, 0.8)',
            caretSize: 10,
            caretPadding: 10,
            xPadding: 10,
            yPaddig: 10,
            // callbacks: {
            //     label: function(tooltipItems, data) {
            //         return 'Your Mood: ' + dbMoodData.map(moodData => moodData.title);
            //     }
            // }
            
        },

        responsive: true,
        aspectRatio: 2,
        maintainAspectRatio: true,
         
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
    
  