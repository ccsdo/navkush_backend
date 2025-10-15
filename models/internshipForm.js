const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    address: { type: String, trim: true },
    cityState: { type: String, trim: true },
    contactNumber: { type: String, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    qualification: { type: String, trim: true },
    skills: { type: String, trim: true },
    internshipAreas: [{ type: String }], // Checkbox + Other field
    preferredHours: { type: String, trim: true },
    previousExperience: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InternshipApplication", internshipSchema);
