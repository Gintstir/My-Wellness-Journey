const moodButton = document.querySelector("#moodButton");

function myFunction() {
  var titleInput = document.querySelector("#moodTitle").value;
  console.log(titleInput);
  if ((titleInput = "Enter your mood")) {
    alert("Please enter a mood");
    return;
  }
  var moodInput = document.querySelector("#moodSlider").value;
  console.log(moodInput);
  var moodDate = document.querySelector("#moodDate").value;
  console.log(moodDate);
}
moodButton.addEventListener("click", myFunction);
