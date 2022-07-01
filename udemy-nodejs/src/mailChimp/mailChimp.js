const express = require("express");
const app = express();
const path = require("path");
const mailchimp = require("@mailchimp/mailchimp_marketing");

const port = 8080;

app.get("/", (req, res) => {
  mailchimp.setConfig({
    apiKey: "5e72fb86a74e20bab950850bdf3d5a21-us14",
    server: "us14",
  });

  //## Just Check Mail chimp
  async function run() {
    const response = await mailchimp.ping.get();
    console.log(response);
    console.log(response.health_status);

    //print log to JSON
    console.log(JSON.stringify(response));
    //print log to Object
    console.log(JSON.parse(JSON.stringify(response)));
  }
  run();

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
