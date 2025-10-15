const mongoose = require("mongoose");

const volunteeringFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  skills: { type: String, required: true},
  availability: { type: String, required: true},
  interests: { type: String, required: true},
});

const VolunteeringForm = mongoose.model("VolunteeringForm", volunteeringFormSchema);

module.exports = VolunteeringForm;
