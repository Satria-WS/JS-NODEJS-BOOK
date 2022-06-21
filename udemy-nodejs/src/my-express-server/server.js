//jshint esversion:6

const express = require("express");
const app = express();
const port = 3000;

//## method get request
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/contact", (req, res) => {
  res.send("This is my contact");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello about okay</h1>");
});



app.get("/hobbies", (req, res) => {
  res.send("<li>mantap</li><li>mantap</li>");
});

//## build port and callbackfunction
//localhost:3000 , it is our domain
app.listen(port, () => {
  console.log("server on port " + port);
});

//## Theory about express js
// "/" just represents localhost:3000/, which is the route or the home page, of our web site.
