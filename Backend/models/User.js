const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
    match: [/^[\w.%+-]+@(securelytix|gmail)\.com$/, 'Only @securelytix.com or @gmail.com emails allowed']
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
