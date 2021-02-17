var button = document.querySelector("#button");

function displayWaterGif() {
  // Create a variable to hold the value of rating
  fetch(
    "https://api.giphy.com/v1/gifs/search?q=water&rating=g&api_key=FFriNIm74coTFQkIGMJquSlGPMXH0OgI&limit=10"
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (response) {
      console.log(response.data[0]);
      var responseContainerEl = document.querySelector("#response-container");
      responseContainerEl.innerHTML = "";
      var gifImg = document.createElement("img");
      var x = Math.floor(Math.random() * 8 + 1);
      gifImg.setAttribute("src", response.data[x].images.fixed_width.url);
      responseContainerEl.appendChild(gifImg);
    });
}
displayWaterGif();
