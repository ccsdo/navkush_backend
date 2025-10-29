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
const joinNgoController = require("../controller/joinNgoController");



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
const  joinNgoSchemaValidator  = require("../validators/joinNgoSchemaValidator");
const careerSchema = require("../validators/CareerSchemaValidator");

const upload =require("../middleware/multer")
const  validate  = require("../middleware/validate");
const careerSchemaController = require("../controller/careerSchemaController");
const fetchDataController = require("../controller/fetchDataController");
const adminSchema = require("../validators/adminValidator");
const adminRegisterController = require("../controller/adminRegisterController");
const adminLoginController = require("../controller/adminLoginController");






 


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
router.post("/joinngo",upload.fields([
    { name: "panCard", maxCount: 1 },
    { name: "registrationCertificate", maxCount: 1 },
    { name: "bylaws", maxCount: 1 },
    { name: "auditReport", maxCount: 1 },
    { name: "annualReport", maxCount: 1 },
    { name: "certificate80G", maxCount: 1 },
  ]),validate(joinNgoSchemaValidator),joinNgoController)
router.post("/career",upload.fields([{name:"resume",maxCount:1}]),validate(careerSchema), careerSchemaController)
router.get("/all",fetchDataController);
router.post("/register",validate(adminSchema),adminRegisterController)
router.post("/login", validate(adminSchema), adminLoginController);




module.exports = router;


 