const express = require("express");
const app = express();
const https = require("https");

const port = 3000;

app.get("/", (req, res) => {
  const queryCity = "Depok";
  const apiKey = "03541cac39d73f6a1fe3683c8ac05c3d";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=-6.413184&lon=106.794645&units=${units}&appid=${apiKey}&mode=json&lang=id&q=${queryCity}`;

  //##Making HTTP get request
  https.get(url, (response) => {
    console.log("statusCode", response.statusCode); //200
    // console.log("headers", response.headers); //Object headers
    // console.log(response);

    //##call the response on when receive some data
    response.on("data", (data) => {
      //console.log(data);//hexadecimal code
      //## Using JSON parse() , format hexadecimal , binary , text to object JS
      //console.log(JSON.parse(data));//print object data

      //##Convert hexadecimal , binary , text to OBJECT
      const weatherData = JSON.parse(data);
      //##Change object property value from "Kota Depok" to "Kota Bogor"
      //weatherData.name = "Kota Bogor";
      const temp = weatherData.main.feels_like;
      const weatherDescription = weatherData.weather[0].description; //awan pecah
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@4x.png`;

      //##The browser is going to be a send method
      //we can only have one res.send , if more than one will be crashed
      //res.send( " <h1>The temperature in Indonesia is " + temp + " degrees Celcius.</h1>" + `<h1>The weather is currently ${weatherDescription}</h1>`);

      //##written all the things that we want to send
      res.write(
        " <h1>The temperature in Indonesia is " +
          temp +
          " degrees Celcius.</h1>"
      );
      res.write(`<h1>The weather is currently ${weatherDescription}</h1>`);
      res.write(`<img src=${imageURL} alt="iconImage"/>`);
      res.send();

      //##create obJect data
      const object = {
        name: "tole",
        hobby: "Football Manager 2022",
      };
      //##Convert object to JSON
      console.log(JSON.stringify(object));
    });
  });

  //##we can only have one res.send , if more than one will be crashed
  // res.send("Server is up and running");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
