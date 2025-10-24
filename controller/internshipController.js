const internshipForm = require("../models/internshipForm");
const internshipTemplate = require("../templates/internshiptemplate");
const internshipController = async (req, res) => {
    try {
        const newForm = new internshipForm(req.body);
        await newForm.save();
        internshipTemplate(newForm);
        res.status(201).json(newForm);
    } catch (error) {
        console.error("Error creating internship application:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = internshipController;