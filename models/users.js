const mongoose = require('mongoose');
const CONSTANTS = require('../constants');

const usersSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: CONSTANTS.USER_GENDER },
    phoneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Phone' },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('User', usersSchema);

module.exports = User;
