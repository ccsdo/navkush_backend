// models/Contact.js
const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 200 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
  phone: { type: String, trim: true, maxlength: 20 },
  message: { type: String, trim: true, maxlength: 2000 },
  // resume stores either a file path on server or a remote URL (Cloudinary, S3, etc.)
  resume: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model("careerSchema", careerSchema);
