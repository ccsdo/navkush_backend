const donationSupportFormSchema = require("../models/donationSupportForm");


const donationSupportController = async (req, res) => {
    try {
        const newForm = new donationSupportFormSchema(req.body);
        await newForm.save();
        res.status(201).json(newForm);
    }
    catch(err){
           res.status(400).json({ error: err.errors });
    }
}

module.exports = donationSupportController;