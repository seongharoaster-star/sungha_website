const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
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
    tableCount: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      default: "",
      trim: true,
    },

    selections: {
      roaster: {
        shape: String,
        duct: String,
        fuel: String,
        knob: String,
        options: [String],
      },

      grill: {
        shape: String,
        kind: String,
        material: String,
        handle: { type: String, default: null },
        guard: String,
      },

      table: {
        material: String,
        leg: String,
        holder: String,
        sizes: [
          {
            w: Number,
            h: Number,
            qty: Number,
          },
        ],
      },

      others: {
        cart: String,
        igniter: String,
        etc: [String],
      },
    },

    status: {
      type: String,
      enum: ["in progress", "pending", "completed"],
      default: "in progress",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", RequestSchema);
