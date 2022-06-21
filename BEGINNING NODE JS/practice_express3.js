//how to making routes
/*
1) app is an instance of the express module

2) METHOD is an HTTP request method (GET, POST, PUT or DELETE)

3) PATH is a path on the server.

4) HANDLER is the function executed when the route is matched.

*/
const express = require('express');
var app = express()

const path = require('path');

app.get('/index' , (req,res) => {
  res.sendFile(path.resolve(__dirname,'index_practice.html'));
})

app.listen(3000);