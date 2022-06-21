const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

//## urlencoded , for grab the information that gets posted to your server from an HTML form
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //res.send("Hello World");
  res.sendFile(__dirname + "/index.html");
});

//## sendFile method , for send file index.html to route
app.get("/calculator", (req, res) => {
  // res.sendFile(path.join(__dirname, "index.html"));
  //## Other way
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  //## print object body
  // console.log(req.body);
  //## print object body with property
  // console.log("nama:" ,req.body.num1);
  // console.log("last name:",req.body.num2);
  //## print store on object userLogin
  const userLogin = {
    name: req.body.name,
    "last-name": req.body["last-name"],
  };
  console.log(userLogin);

  const userCalculate = {
    num1: req.body.num1,
    num2: req.body.num2,
  };
  console.log(userCalculate);

  res.send("Thanks");

});

app.listen(port, () => {
  console.log(`This is port ${port} was succesfull`);
});

/* 
-install body parser for parsing middle ware


*/
