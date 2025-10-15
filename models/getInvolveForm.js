const mongoose = require('mongoose');


const involveFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
});

const InvolveForm = mongoose.model('InvolveForm', involveFormSchema);

module.exports = InvolveForm;
