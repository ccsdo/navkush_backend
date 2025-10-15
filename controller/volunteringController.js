
const VolunteeringForm = require("../models/volunteeringForm");

const volunteeringController = async (req, res) => {
    try {
        const newForm = new VolunteeringForm(req.body);
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        console.error("Error saving volunteering form:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = volunteeringController;
 