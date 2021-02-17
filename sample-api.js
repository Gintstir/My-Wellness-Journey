var button = document.querySelector("#button");

function displayWaterGif() {
  // Create a variable to hold the value of rating
  fetch(
    "https://api.giphy.com/v1/gifs/search?q=water&rating=g&api_key=FFriNIm74coTFQkIGMJquSlGPMXH0OgI&limit=15"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.data[0]);
      var responseContainerEl = document.querySelector("#response-container");
      responseContainerEl.innerHTML = "";
      var gifImg = document.createElement("img");
      var x = Math.floor(Math.random() * 19 + 1);
      gifImg.setAttribute("src", response.data[x].images.fixed_height.url);
      responseContainerEl.appendChild(gifImg);
    });
}
displayWaterGif();
