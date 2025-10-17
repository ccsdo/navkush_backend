const {z } = require("zod");
const sanitizeInput = require("../utils/sanitizeInput");

const corporatepartnerSchemaValidator = z.object({
    company: z.string().min(2).max(100).trim().transform(sanitizeInput),
    email: z.string().email("email is invalid").trim().transform(sanitizeInput),
    phone: z.string().min(10,"mobile number should be min 10 digit").max(15,"moblie number should be max 10 digit").trim().transform(sanitizeInput),
    message: z.string().min(10,"message should be min 10 character").max(1000,"message should be max 1000 character").trim().transform(sanitizeInput),
    contact_person: z.string().min(2,"name should be 2 character").max(100,"name max 100 char").trim().transform(sanitizeInput),
    partnership_type: z.string().min(3).max(100).trim().transform(sanitizeInput),
    company_size: z.string().min(1).max(50).trim().transform(sanitizeInput),
});

module.exports = corporatepartnerSchemaValidator;
