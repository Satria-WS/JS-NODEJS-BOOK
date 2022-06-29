const express = require("express");
const app = express();
const https = require("https");

const port =  3000;

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=-6.413184&lon=106.794645&units=metric&appid=03541cac39d73f6a1fe3683c8ac05c3d&mode=json&lang=id&q=Depok";

  https.get(url, (response) => {
    console.log(response);
  });

  res.send("Server is up and running");
});

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
