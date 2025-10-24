const getInvolveForm = require("../models/getInvolveForm");
const getInvolveTemplate = require("../templates/getInvolvetemplate");
const createInvolveForm = async (req, res) => {
    try {
        const newForm = new getInvolveForm(req.body);
        await newForm.save();
        getInvolveTemplate(newForm);
        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.errors });
    } 
};

module.exports = createInvolveForm