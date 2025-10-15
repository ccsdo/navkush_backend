
const {z} = require("zod");
const sanitizeInput = require("../utils/sanitizeInput");

const membershipFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required").transform(sanitizeInput),
  companyName: z.string().optional().transform(sanitizeInput),
  email: z.string().email("Invalid email address").transform(sanitizeInput),
  phone: z.string().optional().transform(sanitizeInput),
  mobile: z.string().min(10, "Mobile number is required").transform(sanitizeInput),
  address: z.string().optional().transform(sanitizeInput),
  city: z.string().optional().transform(sanitizeInput),
  state: z.string().optional().transform(sanitizeInput),
  country: z.string().optional().transform(sanitizeInput),
  zipCode: z.string().optional().transform(sanitizeInput),
  occupation: z.string().optional().transform(sanitizeInput),
  briefProfile: z.string().optional().transform(sanitizeInput),
});
module.exports = membershipFormSchema;
