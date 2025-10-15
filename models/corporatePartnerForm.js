const mongoose = require("mongoose");

const corporatePartnerFormSchema = new mongoose.Schema({
    company: {
        type: String,

        required: true,
    },
    email: {
        type: String,
        required: true,
    },  
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    contact_person: {
        type: String,
        required: true,
    },
    partnership_type: {
        type: String,
        required: true,
    },
    company_size: {
        type: String,
        required: true,
    },
}, { timestamps: true });
module.exports = mongoose.model("corporatePartnerForm", corporatePartnerFormSchema);