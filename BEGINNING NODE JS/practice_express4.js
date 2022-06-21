const express = require('express');
const app = express();

const path = require('path');

//app.use is a special function to increase functionality with Express by adding a function to our application ’ s middleware stack. 
//With express.static( ‘ public ’ ), we specify that any request that ask for assets should get it from the ‘ public ’ directory.

app.use(express.static('public'))
