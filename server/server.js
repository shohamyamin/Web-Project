const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const axios = require("axios").default;
const requestJson = require("./assets/request.json");
const { User } = require("./models/User");
const moment = require("moment");
(async function () {
  const port = 5500;
  const usersSignup = [];
  const dbUri =
    "mongodb+srv://admin:tgdKFltZAEnOo4fP@cluster0.wyskd.mongodb.net/coronaDB?retryWrites=true&w=majority";
  await mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.use(cors());
  app.use(bodyParser.json());
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
      // console.log(resfromDashBoard.data);
      return res.json(resfromDashBoard.data);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  });

  //Verifies user data in the DB and returns an answer accordingly
  app.post("/login", async (req, res) => {
    try {
      // const user = db
      //   .get("users")
      //   .find({ username: req.body.username })
      //   .value();
      console.log("userFront", req.body);

      const user = await User.findOne({ username: req.body.username });
      // console.log("user", user);

      if (!user) {
        return res.sendStatus(401);
      }
      const isolation = new Isolation({
        username: req.body.username,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        startDate: req.body.startDate,
        email: req.body.email,
        id: req.body.id,
        endDate: moment(req.body.startDate).add(7, "days").calendar(),
      });
      console.log("isolation", isolation);
      await isolation.save();

      //const valid = await bcrypt.compare(req.body.password, user.password);

      res.json({});
    } catch (err) {
      console.log("error" + err);
      res.sendStatus(500);
    }
  });

  //Verifies user data in the DB and returns an answer accordingly
  app.post("/isolation", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });

      if (!user) {
        return res.sendStatus(401);
      }
      //const valid = await bcrypt.compare(req.body.password, user.password);
      const valid = user.password == req.body.password;
      if (!valid) {
        return res.sendStatus(401);
      }
      res.json({});
    } catch (err) {
      console.log("error" + err);
      res.sendStatus(500);
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
