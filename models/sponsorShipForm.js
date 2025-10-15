const mongoose = require("mongoose");
const sponsorshipSchema = new mongoose.Schema(
  {
    organizationName: { type: String, required: true },
    contactPerson: { type: String },
    address: { type: String, required: true },
    cityStateZip: { type: String },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String },

    // Sponsorship Details
    areas: [{ type: String }],
    areasOther: { type: String },
    sponsorshipAmount: { type: String, required: true },
    duration: { type: String },
    preferredPaymentMode: { type: String, enum: ["Bank Transfer", "Cheque"], required: true },

    // Acknowledgement
    acknowledge: { type: String, enum: ["Yes", "No"], required: true },
    preferredNameForAck: { type: String },

    // Declaration
    declaration: { type: Boolean, default: false },
    confirmInfo: { type: Boolean, default: false },
    signature: { type: String },
    date: { type: Date },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Sponsorship", sponsorshipSchema);

