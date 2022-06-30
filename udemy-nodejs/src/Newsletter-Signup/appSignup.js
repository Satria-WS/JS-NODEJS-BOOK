const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");

const port = 8080;

//##static assets--------------------------------------------------------------------------
//readed public folder as static
app.use(express.static(path.join(__dirname, "public")));

//##bodyparser/urlencoded--------------------------------------------------------------------------
app.use(bodyParser.urlencoded({extended:true}))

//##get--------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});
//##post--------------------------------------------------------------------------
app.post("/formSignup" , (req,res)=> {
  const userSignup = {
    fName: req.body.fName,
    lName: req.body.lName,
    email:req.body.email
   };
   console.log(userSignup);
})

//##listen--------------------------------------------------------------------------
app.listen(port, () => {
  console.log("The server running on port " + port);
});
