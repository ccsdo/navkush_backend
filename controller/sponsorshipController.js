const SponsorshipForm = require("../models/sponsorShipForm");

const createSponsorship = async (req, res) => {
  try {
    const sponsorshipData = req.body;
    const newSponsorship = new SponsorshipForm(sponsorshipData);
    await newSponsorship.save();
    res.status(201).json({ message: "Sponsorship created successfully", data: newSponsorship });
  } catch (error) {
    console.error("Error creating sponsorship:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports =  createSponsorship ;