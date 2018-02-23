var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Greenfield');
var Schema = mongoose.Schema;
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
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
}

var selectAll = function(callback) {
  return Projects.find();
};

module.exports.selectAll = selectAll;
module.exports.createProject = createProject;
// module.exports.selectAll(function(err, data){
//   console.log(err);
//   console.log(data);
// });