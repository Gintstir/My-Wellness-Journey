const moodButton = document.querySelector("#moodButton");

function myFunction() {
  var moodInput = document.querySelector("#moodSlider").value;
  console.log(moodInput);
  var titleInput = document.querySelector("#moodTitle").value;
  console.log(titleInput);
  var moodDate = document.querySelector("#moodDate").value;
  console.log(moodDate);
}
moodButton.addEventListener("click", myFunction);
