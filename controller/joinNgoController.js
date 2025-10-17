const joinNgoSchema = require("../models/joinNgo");
const fs = require("fs");
const uploadOnCloudinary = require("../utils/cloudnary");
const joinNgoController = async (req, res) => {
  try {
    const newForm = new joinNgoSchema(req.body);
    const db = await newForm.save();
    const id = db.id;
    for (const [fieldName, files] of Object.entries(req.files)) {
      const uploadRes = await uploadOnCloudinary(files[0].path);
      await joinNgoSchema.findOneAndUpdate(
        { _id: id },
        { $set: { [`${fieldName}`]: uploadRes.secure_url } }, // Set the new field's value
      );
    }
    res.status(201).json(newForm);
  } catch (error) {
    console.error("Error creating Join NGO form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = joinNgoController;
