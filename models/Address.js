const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  houseNo: { type: String, required: true },
  apartment: { type: String, required: true },
  category: { type: String, enum: ['Home', 'Office', 'Friends & Family'], required: true },
});

module.exports = mongoose.model('Address', addressSchema);
