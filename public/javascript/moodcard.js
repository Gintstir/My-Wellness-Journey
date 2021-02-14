const moodButton = document.querySelector("#moodButton");
$('#noMoodEntered').hide();

async function generateMoodInput() {
  $('#noMoodEntered').hide();
  var title = document.querySelector("#moodTitle").value;
  if (title != "") {
    var mood_rating = document.querySelector("#moodSlider").value;
    var mood_date = document.querySelector("#moodDate").value;
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
    if(response.ok) {
      document.location.reload();
    } 
  } else {
    $('#noMoodEntered').show();
    return;
  } 
}


//js to display today's date in mood date Input
var field = document.querySelector('#moodDate');
var date = new Date();

//setting mooddate input to appear as today's date:

// Set the date
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);


moodButton.addEventListener("click", generateMoodInput);
