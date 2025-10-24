const VolunteerForm = require("../models/VolunteerForm");
const volunteerTemplate = require("../templates/volunteertemplate");
const volunteerFormController = async (req, res) => {
  try {
    const formData = new VolunteerForm(req.body);
    await formData.save();
    volunteerTemplate(formData);
    res.status(201).json({ message: "Form submitted successfully", data: formData });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Error submitting form", error });
  }
};

module.exports = volunteerFormController;