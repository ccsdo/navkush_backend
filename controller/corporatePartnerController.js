const corporatePartnerForm = require("../models/corporatePartnerForm");

const corporatepartnerController = async (req, res) => {
    try {
        const newForm = new corporatePartnerForm(req.body);
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        console.error("Error creating corporate partner form:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = corporatepartnerController;