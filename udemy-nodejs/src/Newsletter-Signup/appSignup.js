// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const app = express();
const port = 1000;

//##static assets--------------------------------------------------------------------------
//readed public folder as static
app.use(express.static(path.join(__dirname, "public")));

//##bodyparser/urlencoded--------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));

//##get--------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});

// settingup mailchimp object
mailchimp.setConfig({
  apiKey: "5e72fb86a74e20bab950850bdf3d5a21-us14",
  server: "us14",
});

//##post--------------------------------------------------------------------------
app.post("/formSignup", (req, res) => {
  const userSignup = {
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
  };
  //console.log(userSignup);

  //uploading data to server
  const listId = "c4fc82ed35";
  async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: userSignup.email,
      status: "subscribed",
      merge_fields: {
        FNAME: userSignup.fName,
        LNAME: userSignup.lName,
      },
    });
    res.send("succesfull");
    console.log(response.id);
  }
  console.log(userSignup);
  //##catch function for catch error if false
  //must use catch(error) function . if not , code will not work
  run().catch((error) => res.sendFile(__dirname + "/failure.html"));
});

//##listen-------------------------------------------------------------------------
app.listen(port, () => {
  console.log("The server running on port " + port);
});
