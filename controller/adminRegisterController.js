const Admin = require("../models/adminForms");
const validate=require("../middleware/validate");
const adminSchema = require("../validators/adminValidator");
const bcrypt = require("bcryptjs");

const adminRegisterController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: "Admin already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashedPassword });
    await admin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = adminRegisterController;