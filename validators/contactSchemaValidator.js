const {z} = require("zod");
const sanitizeInput = require("../utils/sanitizeInput");

const contactSchemaValidator = z.object({
    name: z.string().min(2).max(100).trim().transform(sanitizeInput),
    email: z.string().email().trim().transform(sanitizeInput),
    phone: z.string().min(10).max(15).trim().transform(sanitizeInput),
    subject:z.string().min(3).max(200).trim().transform(sanitizeInput),
    message: z.string().min(10).max(1000).trim().transform(sanitizeInput),
});

module.exports = contactSchemaValidator;
