const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    region: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["in progress", "pending", "completed"],
      default: "in progress",
    },
  },
  {
    timestamps: true, 
  }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
