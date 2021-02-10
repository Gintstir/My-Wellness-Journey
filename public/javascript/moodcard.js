const moodButton = document.querySelector("#moodButton");

function generateMoodInput() {
  var titleInput = document.querySelector("#moodTitle").value;
  console.log(titleInput);
  if (titleInput != "") {
    var moodInput = document.querySelector("#moodSlider").value;
    console.log(moodInput);
    var moodDate = document.querySelector("#moodDate").value;
    console.log(moodDate);
  } else {
    alert("Please enter a mood");
    return;
  }
}
moodButton.addEventListener("click", generateMoodInput);
