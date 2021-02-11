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
moodButton.addEventListener("click", generateMoodInput);
