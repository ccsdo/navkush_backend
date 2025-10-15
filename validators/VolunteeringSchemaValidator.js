const {z} = require("zod");
const sanitizeInput = require("../utils/sanitizeInput");


const VolunteeringSchemaValidator = z.object({
    name: z.string().min(2).max(100).regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces").transform(sanitizeInput),
    email: z.string().email().trim().transform(sanitizeInput),
    age: z.number().min(18, "Age must be at least 18").max(100, "Age must be less than or equal to 100").transform(sanitizeInput),
    phone: z.string().min(10).max(15).trim().transform(sanitizeInput),
    skills: z.string().min(10).max(1000).trim().transform(sanitizeInput),
    availability: z.string().min(5).max(100).trim().transform(sanitizeInput),
    interests: z.string().min(3).max(100).trim().transform(sanitizeInput),
});
module.exports = VolunteeringSchemaValidator; 