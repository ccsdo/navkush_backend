const {z} = require("zod");
const sanitizeInput = require("../utils/sanitizeInput");

const VolunteerFormSchema = z.object({
  fullName: z.string().min(2).max(100).trim().transform(sanitizeInput),
  dob: z.string().min(new Date(1900, 0, 1)).max(new Date()).transform(sanitizeInput),
  gender: z.enum(['Male', 'Female', 'Other']).transform(sanitizeInput),
  address: z.string().min(5).max(200).trim().transform(sanitizeInput),
  cityState: z.string().min(2).max(100).trim().transform(sanitizeInput),
  contactNumber: z.string().min(10).max(15).trim().transform(sanitizeInput),
  email: z.string().email().transform(sanitizeInput),
  emergencyContactName: z.string().min(2).max(100).trim().transform(sanitizeInput),
  emergencyContactNumber: z.string().min(10).max(15).trim().transform(sanitizeInput),
  emergencyContactRelationship: z.string().min(2).max(100).trim().transform(sanitizeInput),
  occupation: z.string().min(2).max(100).trim().transform(sanitizeInput),
  preferredHours: z.string().min(2).max(100).trim().transform(sanitizeInput),
  previousExperience: z.string().min(2).max(500).trim().transform(sanitizeInput),
  qualification: z.string().min(2).max(100).trim().transform(sanitizeInput),
  skills: z.string().min(2).max(200).trim().transform(sanitizeInput),
  volunteerAreas: z.array(z.string().min(2).max(100).trim()).min(1).transform(sanitizeInput),
});

module.exports = VolunteerFormSchema;
