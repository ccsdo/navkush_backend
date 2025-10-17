const {z}=require('zod')

const sanitizeInput = require("../utils/sanitizeInput");


const joinNgoSchemaValidator = z.object({
  authorizedPerson: z.string().min(2, "Authorized person name is required").transform(sanitizeInput),
  organizationName: z.string().min(2, "Organization name is required").transform(sanitizeInput),
  organizationType: z.enum(["NGO", "Trust", "Society", "Other"]),
  organizationEmail: z.string().email("Invalid organization email").transform(sanitizeInput),
  authorizedPersonEmail: z.string().email("Invalid authorized person email").transform(sanitizeInput),
  website: z.string().url("Invalid website").optional().or(z.literal("")).transform(sanitizeInput),
  workingArea: z.string().optional().or(z.literal("")).transform(sanitizeInput),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Mobile number must be 10 digits")
    .optional()
    .or(z.literal("")).transform(sanitizeInput),
  phone: z.string().optional().or(z.literal("")).transform(sanitizeInput),
  address: z.string().optional().or(z.literal("")).transform(sanitizeInput),
  city: z.string().optional().or(z.literal("")).transform(sanitizeInput),
  state: z.string().optional().or(z.literal("")).transform(sanitizeInput),
  country: z.string().optional().or(z.literal("")).transform(sanitizeInput),
  zipCode: z.string().optional().or(z.literal("")).transform(sanitizeInput),
  occupation: z.string().optional().or(z.literal("")).transform(sanitizeInput),

  // File uploads (URLs or file paths stored in DB)
  panCard: z.string().optional(),
  registrationCertificate: z.string().optional(),
  bylaws: z.string().optional(),
  auditReport: z.string().optional(),
  annualReport: z.string().optional(),
  certificate80G: z.string().optional(),
 
});

module.exports = joinNgoSchemaValidator
