const ContactForm = require("../models/contactForm");

const contactController = async (req, res) => {
    try {
        const newForm = new ContactForm(req.body);
        console.log("Req Body:", req.body);
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        console.error("Error creating contact form:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = contactController;