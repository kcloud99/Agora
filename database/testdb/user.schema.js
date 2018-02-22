// user schema
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
  },

  customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
  },
});
var User = mongoose.model('User', userSchema);

module.exports = User;