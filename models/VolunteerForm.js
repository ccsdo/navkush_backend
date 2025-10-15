const mongoose = require('mongoose');

const volunteerFormSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  address: { type: String, required: true },
  cityState: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  emergencyContactName: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  emergencyContactRelationship: { type: String, required: true },
  occupation: { type: String, required: true },
  preferredHours: { type: String, required: true },
  previousExperience: { type: String, required: true },
  qualification: { type: String, required: true },
  skills: { type: String, required: true },
  volunteerAreas: { type: [String], required: true },
});

module.exports = mongoose.model('VolunteerForm', volunteerFormSchema);
