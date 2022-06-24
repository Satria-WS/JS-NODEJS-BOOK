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

app.post("/Calculator", (req, res) => {
  //##check with log req.body
  //console.log(req.body);
  const objectBMI = {
    weight: req.body.weight,
    height: req.body.height,
  };
  //##store on variable
  const weight = objectBMI.weight;
  const height = objectBMI.height;
  // console.log(weight, height); // 70 170

  //##create function calculate BMI CALCULATOR
  function calculateBMI(weight, height) {
    const calculate = weight / Math.pow(height / 100, 2);
    // console.log(Math.floor(calculate));
    return Math.floor(calculate);
  }
  calculateBMI(weight, height);

  //## checking
  if (calculateBMI(weight, height) === 24) {
    console.log("Weight: ", weight);
    console.log("Height: ", height);
    console.log("ideal: ", true);
    res.send("lo ideal");
  } else {
    console.log("Weight: ", weight);
    console.log("Height: ", height);
    console.log("ideal: ", false);
    res.send("lo gendut goblok gendut anjing idiot");
  }
});

//## listen port
app.listen(port, () => {
  console.log(`port: ${port} was succesfull`);
});

//##exponen
// Math.pow(height,2)

//##check function
/* 
function check1(number1) {
  const number9 = number1;
  return number9;
}
check1();

if (check1(9) === 9) {
  console.log(true);
} else {
  console.log(false);
}
 */

/* 
//## Note
//parseFloat() , convert string to firs number
//example: 
var num_10 = "10";
console.log(parseFloat(num_10) === 10)//true
console.log(num_10 + 4);
console.log(parseFloat(num_10) + 4)//14 
*/