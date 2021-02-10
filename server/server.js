const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios").default;
const requestJson = require("./assets/request.json");
app.use(bodyParser.urlencoded({ extended: false }));

const port = 5500;
const usersSignup = [];
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
//get example
app.get("/getSpecificData", async function (req, res) {
  console.log("spec", requestJson);
  return axios
    .post(
      "https://datadashboardapi.health.gov.il/api/queries/_batch",
      requestJson
    )
    .then((resfromDashBoard) => {
      console.log("bl", resfromDashBoard.data);
      res.json(resfromDashBoard.data);
    });
});

//TODO get specific data from helth.gov

//contact us mail sending
app.post("/send", function (req, res) {
  let name = req.body.name4;
  let email = req.body.mail4;
  let subject1 = req.body.options1;
  let msg = req.body.subj;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rwzntm@gmail.com",
      pass: "ExampleNode2011@",
    },
  });

  var mailOptions = {
    from: email,
    to: "rwzntm@gmail.com",
    subject: subject1,
    text:
      "name:\n" +
      name +
      "\nemail:\n" +
      email +
      "\nsubject\n" +
      subject1 +
      "\nmessage:\n" +
      msg,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.send("data submited!");
      //  res.redirect("/send");
      console.log("Email sent: " + info.response);
    }
  });
});

//listening to port 5500
app.listen(port);
console.log("listening....");
