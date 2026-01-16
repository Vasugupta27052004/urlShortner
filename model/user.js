const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    required: true,
    unique: true
  },
  visitedCount: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);
