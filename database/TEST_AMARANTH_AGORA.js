var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amaranthgroup',{useMongoClient: true});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var Customer = require('./customer.schema');
var User = require('./user.schema');
var Project = require('./project.schema');

var createUser = function(username, password){
    var newUser = new User({
        _id: new mongoose.Types.ObjectId(),
         username: username,
         password: password
    })
    newUser.save(function(err) {
        if (err) throw err;
        console.log('user successfully saved.');
    });
}

var createCustomer = function(name, address, phone, email, projectId){
    var newCustomer = new Customer({
       // _id: new mongoose.Schema.Types.ObjectId(),
        name: name,
        address: address,
        phone: phone,
        email: email
    });
    newCustomer.save(function(err) {
        if (err) throw err;
        console.log('customer successfully saved.');
    });
}
var createProject = function(name, description, resources, finances, tasks, startDate, endDate){
    var newProject = new Project({
        _id: new mongoose.Schema.Types.ObjectId(),
        name: name,
        description: description,
        resources: resources,
        finances: finances,
        timeline: {tasks: tasks, start: startDate, end:endDate }
    });
    newProject.save(function(err) {
        if (err) throw err;
        console.log('project successfully saved.');
    });
}
//  UNCOMMENT INFORMAL TESTBED
createProject('test===1','first test project',
    [{name:'labor'},{name:'materials'}],     // resources
    [{name:'project due',name:'amount'}],    // finances
    [{name:'estimate'}],                     // tasks,
    '1/21/2018',                             // start date
    '1/22/2018'                              // end date
    );
createUser ('glenntest===1','pass===1');
var c1 = {name: 'glenn1', address:'1111 easy street', phone:'1234567', email:'glenn@amaranthgroup.com', projectId:11111};
createCustomer(c1.name,
    c1.address,
    c1.phone,
    c1.email,
    c1.projectId);


//  TO TEST THIS:
// in terminal:
//  mongo
//   show dbs
//    use amaranthgroup
//      db.customers.find()  // note the plural collections
//      db.projects.find()
//      db.users.find()
//
////module.exports.save = save;