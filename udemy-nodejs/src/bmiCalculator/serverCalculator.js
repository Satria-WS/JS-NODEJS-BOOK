const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 8080;

//## using body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //##just check console
  //res.send("this is my bmi calculator");

  res.sendFile(path.join(__dirname, "bmiCalculator.html"));
});

app.post("/", (req, res) => {
  //##check with log req.body
  //console.log(req.body);

  const objectBMI = {
    weight: req.body.weight,
    height: req.body.height,
  };

  //##store on variable
  const weight = objectBMI.weight;
  const height = objectBMI.height;
  console.log(weight, height);

  //##create function calculate BMI CALCULATOR
  function calculateBMI(weight, height) {
    const calculate = weight / Math.pow(height/100, 2);
    console.log(Math.floor(calculate)) 
  }
  calculateBMI(weight, height);

  res.send("succesfull");
});

app.listen(port, () => {
  console.log(`port: ${port} was succesfull`);
});

//exponen
// Math.pow(height,2)
