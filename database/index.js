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

// var projectSchema = mongoose.Schema({
//     name: String,
//     description: String,
//     customer: String,
//     resources: [{name:String, value:String}],
//     finances: [{name:String, value:String}],
//     timeline: {tasks:[{name:String,dueDate:Date}],start:Date, end:Date, status: String}
//   });

var projectSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    description: String,
    customer: String
  });

var Projects = mongoose.model('Projects', projectSchema);

var createProject = function(obj, username){ // adds a new project to projects table and project id to logged-in user in users table
  console.log("username passed into createProject is " + username);

  var newProject = new Projects({
    _id: new mongoose.Types.ObjectId(),
    name: obj.name,
    description: obj.description,
    customer: obj.customer
  });
  newProject.save(function(err) {
    if (err) throw err;
    console.log("Project saved.");
    console.log(newProject._id);
    var newID = newProject._id;
    Users.findOne({username: username}, function(err, user) {
      user.projects = user.projects.concat(newProject._id || "hardcoded for now");
      user.save();
    })
  });
};

// var selectAll = function(username) { // finds all projects via project ids in user table // refactor for for loop later, or populate method
//   var arrOfProjects = [];
//   Users.findOne({username: username}, function(err, user) {
//     let finishedProjects = 0;
//     user.projects.forEach(projectId => Projects.findById(projectId, function (err, doc) {
//       arrOfProjects.push(doc);
//       finishedProjects++;
//       if (finishedProjects === user.projects.length) {
//         return arrOfProjects;
//       }
//     }))
//   })
//   return arrOfProjects;
// };

// var selectAll = function(username) { // finds all projects via project ids in user table // refactor for for loop later, or populate method
//     var arrOfProjects = [];
//     Users.findOne({username: username}, function(err, user) {
//       for (let i = 0; i < user.projects.length; i++) {
//         Projects.findById(user.projects[i], function (err, doc) {
//           console.log(doc);
//           arrOfProjects.push(doc);
//         });
//       }
//     })
//     return arrOfProjects;
// };

var selectAll = function(username) {
  return Users.findOne({username: username}).populate("projects").exec(function (err, projects) {
    if (err) {return err}

    console.log(projects);
  })
}

var updateProject = function(obj) {
  Projects.findByIdAndUpdate(obj._id, obj);
}

var selectAllCustomers = function() {
  console.log("selectAllCustomers function");
  return Projects.find().select("customer");
};

// var userSchema = mongoose.Schema({
//   username: String,
//   password: String,
//   projects: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Projects'
//   }],
// });

// var userSchema = mongoose.Schema({
//   username: String,
//   password: String,
//   projects: [{projectID: String}]
// });


var userSchema = mongoose.Schema({
  username: String,
  password: String,
  projects: [{ type: Schema.Types.ObjectId, ref: 'Projects' }]
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
  return Users.findOne({username: obj.username}, function(err, user) {
    if (err) return err;
    console.log("DB password is " + user.password);
    console.log("App password is " + obj.password);
    if (user.password == obj.password) {
      return true;
    } else {
      return false;
    }
  });
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
