var mongoose = require('mongoose');
var projectSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    resources: [{name:String}],
    finances: [{name:String}],
    timeline: {tasks:[{name:String,dueDate:Date}],start:Date, end:Date}
  });
var Project = mongoose.model('Project', projectSchema);

module.exports = Project;