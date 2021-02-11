const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const axios = require("axios").default;
const requestJson = require("./assets/request.json");
const { User } = require("./models/User");

(async function () {
  const port = 5500;
  const usersSignup = [];
  const dbUri =
    "mongodb+srv://admin:tgdKFltZAEnOo4fP@cluster0.wyskd.mongodb.net/coronaDB?retryWrites=true&w=majority";
  await mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  //get example
  app.get("/getSpecificData", async function (req, res) {
    try {
      const resfromDashBoard = await axios.post(
        "https://datadashboardapi.health.gov.il/api/queries/_batch",
        requestJson
      );
      // const user = new User({ username: "admin", password: "admin" });
      // await user.save();

      const user = await User.findOne({ username: "admin" });
      console.log("user", user);

      // const dashboardModel = new DashboardModel(resfromDashBoard.data);
      console.log(resfromDashBoard.data);
      return res.json(resfromDashBoard.data);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
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
})();
