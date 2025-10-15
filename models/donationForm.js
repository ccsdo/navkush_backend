const mongoose = require("mongoose");

const donationFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dob: String,
  panNo: String,
  state: String,
  city: String,
  address: String,
  pincode: String,
  amount: Number,
}, { timestamps: true });

module.exports = mongoose.model("DonationForm", donationFormSchema);
