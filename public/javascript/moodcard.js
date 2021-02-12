const moodButton = document.querySelector("#moodButton");

async function generateMoodInput() {
  var title = document.querySelector("#moodTitle").value;
  if (title != "") {
    var mood_rating = document.querySelector("#moodSlider").value;
    console.log(mood_rating);
    var mood_date = document.querySelector("#moodDate").value;
    console.log(mood_date);
    const response = await fetch('/api/moods', {
      method: 'POST',
      body: JSON.stringify({
        title,
        mood_rating,
        mood_date
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } else {
    alert("Please enter a mood");
    return;
  }
}

var field = document.querySelector('#moodDate');
var date = new Date();

//setting mooddate input to appear as today's date:

// Set the date
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);


moodButton.addEventListener("click", generateMoodInput);
