// validators/contactValidator.js
const { z } = require("zod");
const sanitizeInput = require("../utils/sanitizeInput")
const phoneRegex = /^[0-9+\-\s()]{7,20}$/; // permissive: digits, + - spaces, parens

const careerSchema = z.object({
  name: z.string().min(1, "Name is required").max(200).transform(sanitizeInput),
  email: z.string().email("Invalid email address").max(254).transform(sanitizeInput),
  phone: z.string().optional().refine(val => {
    if (!val) return true; // optional
    return phoneRegex.test(val);
  }, {
    message: "Invalid phone number",
  }).transform(sanitizeInput),
  message: z.string().min(10,"message should be of 10 character").max(2000,"message should be of 20").optional().transform(sanitizeInput),
  // resume will be stored as a string (URL or local path) by backend after multer/cloudinary upload
  resume: z.string().optional().or(z.literal("")).nullable(),
});

module.exports =  careerSchema;
