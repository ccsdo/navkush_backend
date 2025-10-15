const donationForm = require("../models/donationForm");

const createDonationForm = async (req, res) => {
    try {
        const newForm = new donationForm(req.body);
        // console.log("Req Body:", req.body);
        // console.log(newForm);
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.errors });
    } 
};

module.exports = createDonationForm;

       