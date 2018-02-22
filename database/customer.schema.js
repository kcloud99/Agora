var mongoose = require('mongoose');
var customerSchema =  mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  address: String,
  phone: Number,
  email: String
  })

var Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;