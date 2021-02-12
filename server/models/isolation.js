const mongoose = require("mongoose");

const Isolation = mongoose.model("Isolation", {
  username: { type: String, required: true, unique: true },
  id: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  startDate: { type: Date, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  endDate: { type: Date, required: true },
});

module.exports = { Isolation };
