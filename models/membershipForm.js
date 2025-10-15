const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    companyName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    mobile: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipCode: { type: String },
    occupation: { type: String },
    briefProfile: { type: String },

  },
  { timestamps: true }
);

module.exports = mongoose.model("membershipForm", membershipSchema);

