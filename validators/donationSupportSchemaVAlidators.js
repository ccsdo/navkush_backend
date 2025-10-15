const {z } = require("zod");
const sanitizeInput = require("../utils/sanitizeInput");



const donationSupportSchema = z.object({
  name: z.string()
    .min(2, "Name required")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .transform(sanitizeInput),
 email: z.string()
    .email("Invalid email")
    .transform(sanitizeInput),
  phone: z.string()
    .regex(/^\d{10}$/, "Mobile must be 10 digits")
    .transform(sanitizeInput),
message:z.string().min(10,"Message must be at least 10 characters long").transform(sanitizeInput).optional()
});


module.exports = donationSupportSchema; 