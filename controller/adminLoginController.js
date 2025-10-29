const Admin = require("../models/adminForms");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminLoginController=async(req,res)=>{
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }
        // Create JWT token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // token valid for 1 hour
    );

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
module.exports=adminLoginController;