const donationForm = require("../models/donationForm");
const donationTemplate = require("../templates/donationTemplate");

const createDonationForm = async (req, res) => {
    try {
        const newForm = new donationForm(req.body);
        await newForm.save();
        donationTemplate(newForm)
        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.errors });
    } 
};

module.exports = createDonationForm;

       