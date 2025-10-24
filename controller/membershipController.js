const membershipForm = require("../models/membershipForm");
const membershipTemplate = require("../templates/membershipTemplate");
const createMembershipForm = async (req, res) => {
  try {
    const newForm = new membershipForm(req.body);
    await newForm.save();
    
    membershipTemplate(newForm);
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = createMembershipForm;