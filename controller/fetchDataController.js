const careerSchema = require("../models/careerForm");
const ContactForm = require("../models/contactForm");
const corporatePartnerForm = require("../models/corporatePartnerForm");
const DonationForm = require("../models/donationForm");
const DonationSupportForm = require("../models/donationSupportForm");
const InvolveForm = require("../models/getInvolveForm");
const InternshipApplication = require("../models/internshipForm");
const joinngo = require("../models/joinNgo");
const membershipForm = require("../models/membershipForm");
const Sponsorship = require("../models/sponsorShipForm");
const VolunteerForm = require("../models/VolunteerForm");
const VolunteeringForm = require("../models/volunteeringForm");
  
const fetchDataController = async (req, res) => {
  try {
    // Fetch all form submissions from the database
    const [
      careerForms,
      contactForms,
      corporatePartnerForms,
      donationForms,
      donationSupportForms,
      involveForms,
      internshipApplications,
      joinngoForms,
      membershipForms,
      sponsorshipForms,
      volunteerForms,
      volunteeringForms,
    ] = await Promise.all([
      careerSchema.find(),
      ContactForm.find(),
      corporatePartnerForm.find(),
      DonationForm.find(),
      DonationSupportForm.find(),
      InvolveForm.find(),
      InternshipApplication.find(),
      joinngo.find(),
      membershipForm.find(),
      Sponsorship.find(),
      VolunteerForm.find(),
      VolunteeringForm.find(),
    ]);
    res.status(200).json({
      careerForms,
      contactForms,
      corporatePartnerForms,
      donationForms,
      donationSupportForms,
      involveForms,
      internshipApplications,
      joinngoForms,
      membershipForms,
      sponsorshipForms,
      volunteerForms,
      volunteeringForms,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

module.exports = fetchDataController;
