// JC, I'm going to work in this file because I don't fully understand what's happening in server.js and I will integrate functionality later with GS

const express = require("express");
const app = express();
const PORT = 3000;
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("./public/landing.html", { root: __dirname });
});

app.get("/home", (req, res) => {
  res.sendFile("./public/home.html", { root: __dirname });
});

app.get("/moodtracker", (req, res) => {
  res.sendFile("./public/moodtracker.html", { root: __dirname });
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
