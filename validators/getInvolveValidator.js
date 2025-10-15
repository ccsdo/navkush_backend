const {z}=require("zod");
const sanitizeInput = require("../utils/sanitizeInput");

const getInvolveValidator = z.object({
    name: z.string().min(2).max(50).regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces").transform(sanitizeInput),
    email: z.string().email().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format").transform(sanitizeInput),
    company: z.string().min(2).max(100).transform(sanitizeInput),
    mobile: z.string().min(10,{ message: "mobile number should be 10 digits" }).max(11,{ message: "mobile number should be 10 digits" }).transform(sanitizeInput),
});

module.exports = getInvolveValidator; 
