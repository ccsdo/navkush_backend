const SponsorshipForm = require("../models/sponsorShipForm");
const sponsorshipTemplate = require("../templates/sponsorshipTemplate");
const createSponsorship = async (req, res) => {
  try {
    const newSponsorship = new SponsorshipForm(req.body);
    await newSponsorship.save();
    sponsorshipTemplate(newSponsorship);
    res.status(201).json({ message: "Sponsorship created successfully", data: newSponsorship });
  } catch (error) {
    console.error("Error creating sponsorship:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports =  createSponsorship ;