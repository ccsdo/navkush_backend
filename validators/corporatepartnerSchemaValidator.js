const {z } = require("zod");
const sanitizeInput = require("../utils/sanitizeInput");

const corporatepartnerSchemaValidator = z.object({
    company: z.string().min(2).max(100).trim().transform(sanitizeInput),
    email: z.string().email().trim().transform(sanitizeInput),
    phone: z.string().min(10).max(15).trim().transform(sanitizeInput),
    message: z.string().min(10).max(1000).trim().transform(sanitizeInput),
    contact_person: z.string().min(2).max(100).trim().transform(sanitizeInput),
    partnership_type: z.string().min(3).max(100).trim().transform(sanitizeInput),
    company_size: z.string().min(1).max(50).trim().transform(sanitizeInput),
});

module.exports = corporatepartnerSchemaValidator;
