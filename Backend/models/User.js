const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w.-]+@securelytix\.com$/ | /^[\w.-]+@gmail\.com$/ | /^[\w.-]+@yahoo\.com$/ | /^[\w.-]+@outlook\.com$/
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);


