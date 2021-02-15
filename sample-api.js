console.log("page connected");

function waterGif() {
  var giphyURL =
    "https://api.giphy.com/v1/gifs/search?api_key=FFriNIm74coTFQkIGMJquSlGPMXH0OgI&q=water&limit=25&offset=0&rating=g&lang=en";
  //format the response/promise
  fetch(giphyURL)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          // call displayWaterGif and pass data as an argument
          console.log(data);
          displayWaterGif(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("unable to connect to server");
    });
}

var displayWaterGif = function (data) {
  console.log("ok, you got me");
};

waterGif();
