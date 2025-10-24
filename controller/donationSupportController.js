const donationSupportFormSchema = require("../models/donationSupportForm");
const donationTemplate = require("../templates/donationSupporttemplate");


const donationSupportController = async (req, res) => {
    try {
        const newForm = new donationSupportFormSchema(req.body);
        await newForm.save();
        donationTemplate(newForm);
        res.status(201).json(newForm);


    }
    catch(err){
           res.status(400).json({ error: err});
    }
}

module.exports = donationSupportController;