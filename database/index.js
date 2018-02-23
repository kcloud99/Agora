var mongoose = require('mongoose');
var uriString = process.env.MONGODB_URI || 'mongodb://localhost/Greenfield';
mongoose.connect(uriString);
var Schema = mongoose.Schema;
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('mongoose connection error', err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var projectSchema = mongoose.Schema({
    name: String,
    description: String,
    customer: String,
    resources: [{name:String, value:String}],
    finances: [{name:String, value:String}],
    timeline: {tasks:[{name:String,dueDate:Date}],start:Date, end:Date, status: String}
  });

var Projects = mongoose.model('Projects', projectSchema);

var createProject = function(obj){

    var newProject = new Projects(obj);
    newProject.save(function(err) {
        if (err) throw err;
        return 'project successfully saved.';
    });
};

var selectAll = function() {
  return Projects.find();
};

var selectAllCustomers = function() {
  console.log("selectAllCustomers function");
  return Projects.find().select("customer");
};

module.exports.selectAll = selectAll;
module.exports.createProject = createProject;
module.exports.selectAllCustomers = selectAllCustomers;
// module.exports.selectAll(function(err, data){
//   console.log(err);
//   console.log(data);
// });
