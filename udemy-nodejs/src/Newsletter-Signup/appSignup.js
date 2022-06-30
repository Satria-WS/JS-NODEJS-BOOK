const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");


const port = 8080;

//##static assets
app.use(express.static(path.join(__dirname, "public")));

//##get--------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});


//##listen--------------------------------------------------------------------------
app.listen(port, () => {
  console.log("The server running on port " + port);
});
