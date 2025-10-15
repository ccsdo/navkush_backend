const {z} = require("zod");


const sponsorshipSchema = z.object({
  organizationName: z.string().min(1, "Organization name is required"),
  contactPerson: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  cityStateZip: z.string().optional(),
  contactNumber: z
    .string()
    .regex(/^[0-9]{10,15}$/, "Enter a valid contact number"),
  email: z.string().email("Enter a valid email"),
  website: z.string().optional(),

  areas: z.array(z.string()).optional(),
  areasOther: z.string().optional(),
  sponsorshipAmount: z.string().min(1, "Sponsorship amount is required"),
  duration: z.string().optional(),
  preferredPaymentMode: z.enum(["Bank Transfer", "Cheque"], {
    required_error: "Preferred payment mode is required",
  }),

  acknowledge: z.enum(["Yes", "No"]),
  preferredNameForAck: z.string().optional(),

  declaration: z.boolean().refine(val => val === true, {
    message: "You must agree to the sponsorship declaration",
  }),
  confirmInfo: z.boolean().refine(val => val === true, {
    message: "You must confirm the information provided",
  }),

  signature: z.string().optional(),
  date: z.string().or(z.date()).optional(),
});

module.exports = sponsorshipSchema;
