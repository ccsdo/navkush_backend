const mongoose = require('mongoose')

const joinNgoSchema=new mongoose.Schema({
 authorizedPerson: { type: String, required: true },
    organizationName: { type: String, required: true },
    organizationType: {
      type: String,
      enum: ["NGO", "Trust", "Society", "Other"],
      required: true,
    },
    organizationEmail: { type: String, required: true },
    authorizedPersonEmail: { type: String, required: true },
    website: { type: String },
    workingArea: { type: String },
    mobile: { type: String },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipCode: { type: String },
    occupation: { type: String },

    // File upload fields (store file URLs or paths)
    panCard: { type: String },
    registrationCertificate: { type: String },
    bylaws: { type: String },
    auditReport: { type: String },
    annualReport: { type: String },
    certificate80G: { type: String },


   
},
{ timestamps: true }
)

module.exports = mongoose.model("joinngo",joinNgoSchema)