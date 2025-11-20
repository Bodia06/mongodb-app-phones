const mongoose = require('mongoose');

const phonesSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Date, required: true },
    ram: { type: Number, default: false },
    has_nfc: { type: Boolean, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Phone = mongoose.model('Phone', phonesSchema);

module.exports = Phone;
