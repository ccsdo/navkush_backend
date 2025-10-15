const express = require("express");
const router = express.Router();
const getInvolveController = require("../controller/getInvolveController");
const donationController = require("../controller/donationController");
const donationSupportController = require("../controller/donationSupportController");
const volunteeringController = require("../controller/volunteringController");
const corporatepartnerController = require("../controller/corporatePartnerController");
const contactController = require("../controller/contactFormController");
const VolunteerForm = require("../controller/volunteerFormController");
const createMembershipForm = require("../controller/membershipController");
const internshipController = require("../controller/internshipController");
const createSponsorship = require("../controller/sponsorshipController");



const getInvolveSchemaValidator = require("../validators/getInvolveValidator");
const donationSchemaValidator = require("../validators/donationSchemaValidator");
const donationSupportSchemaValidator = require("../validators/donationSupportSchemaVAlidators");
const VolunteeringSchemaValidator = require("../validators/VolunteeringSchemaValidator");
const corporatepartnerSchemaValidator = require("../validators/corporatepartnerSchemaValidator");
const contactSchemaValidator = require("../validators/contactSchemaValidator");
const VolunteerFormSchema = require("../validators/VolunteerFormSchemaValidator");
const membershipFormSchemaValidator = require("../validators/memberShipSchemaValidator");
const internshipSchema = require("../validators/internshipSchemaValidator");
const sponsorshipSchema = require("../validators/sponsorShipSchemaValidator");



const  validate  = require("../middleware/validate");








router.post("/getinvolve",validate(getInvolveSchemaValidator), getInvolveController);
router.post("/donation",validate(donationSchemaValidator), donationController);
router.post("/donationsupport",validate(donationSupportSchemaValidator), donationSupportController);
router.post("/volunteer",validate(VolunteeringSchemaValidator), volunteeringController);
router.post("/partnership",validate(corporatepartnerSchemaValidator), corporatepartnerController);
router.post("/contact",validate(contactSchemaValidator), contactController);
router.post("/volunteerform",validate(VolunteerFormSchema), VolunteerForm);
router.post("/membershipform",validate(membershipFormSchemaValidator), createMembershipForm);
router.post("/internshipform", validate(internshipSchema), internshipController)
router.post("/sponsorship",validate(sponsorshipSchema), createSponsorship)

module.exports = router;


