//#1
//use express module
const index = require('express');
//create an object of the express module
var app = index()
//create callback function
app.get('/' , function(req,res) {
  //send 'practice' response
  res.send('practice');
})

//executtion server 3000
//make the server listen onport 3000
app.listen(3000);



//#2
//use express module
const express = require('express');
//create an object of the express module
var app = express()
//create callback function
app.get('/' , function(req,res) {
  //send 'practice' response
  res.send('Hello world');
})

//executtion server 3001
//make the server listen onport 3001
var server = app.listen(3001 , function() {

})