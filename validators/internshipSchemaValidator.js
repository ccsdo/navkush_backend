const { z } = require("zod");
const sanitizeinput = require("../utils/sanitizeInput");

const internshipSchema = z.object({
  fullName: z.string().min(3, "Full name is required").transform(sanitizeinput),
  dob: z.string().transform(sanitizeinput),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z.string().optional().transform(sanitizeinput),
  cityState: z.string().optional().transform(sanitizeinput),
  contactNumber: z
    .string()
    .min(7, "Contact number is too short")
    .max(15, "Contact number is too long")
    .optional().transform(sanitizeinput),
  email: z.string().email("Invalid email").transform(sanitizeinput),
  qualification: z.string().optional().transform(sanitizeinput),
  skills: z.string().optional().transform(sanitizeinput),
  internshipAreas: z
    .array(z.string())
    .nonempty("Please select at least one area"),
  preferredHours: z.string().optional().transform(sanitizeinput),
  previousExperience: z.string().optional().transform(sanitizeinput),
});

module.exports = internshipSchema;

