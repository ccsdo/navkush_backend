const donationForm = require("../models/donationForm");
const donationTemplate = require("../templates/donationTemplate");

const createDonationForm = async (req, res) => {
    try {
        console.log("Request Body:Ijkdfbgkjsdfbdf");
        const newForm = new donationForm(req.body);
        // console.log("Req Body:", req.body);
        // console.log(newForm);
        await newForm.save();
// console.log(newForm);
        donationTemplate(newForm)
        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.errors });
    } 
};

module.exports = createDonationForm;

       