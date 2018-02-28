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

var updateProject = function(obj) {
  Projects.findByIdAndUpdate(obj._id, obj);
}

var selectAllCustomers = function() {
  console.log("selectAllCustomers function");
  return Projects.find().select("customer");
};

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Projects'
  }],
});

var Users = mongoose.model('Users', userSchema);

var createUser = function(obj) {
  var newObj = {
    username: obj.username,
    password: obj.password
  };

  var newUser = new Users(newObj);
  newUser.save();
}

var validateUser = function(obj) { // returns boolean
  Users.findOne({"username": obj.username}, function(err, user) {
    if (err) {return err;}

    return user.password === obj.password;
  })
}

module.exports.selectAll = selectAll;
module.exports.createProject = createProject;
module.exports.selectAllCustomers = selectAllCustomers;
module.exports.updateProject = updateProject;
module.exports.createUser = createUser;
module.exports.validateUser = validateUser;
// module.exports.selectAll(function(err, data){
//   console.log(err);
//   console.log(data);
// });















