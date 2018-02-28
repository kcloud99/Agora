// user schema
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects'
  }],
});
var User = mongoose.model('User', userSchema);

module.exports = User;