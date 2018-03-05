var express = require("express"); // using express for routing
var db = require('../database/index.js');
var app = express(); // initializing app variable for routing
var request = require('request');
var session = require('express-session');
app.use(session({
  secret: 'Secret token',
  cookie: {
    maxAge: 6000000
  }
}));
// app.use((req, res, next) => {
//  console.log(`${Date.now()} ${req.method} ${req.url} ${req.sessionID} ${req.session.id} ${req.session.cookie}`)
//  next();
// })

var bodyParser = require("body-parser"); // can parse incoming requests and possibly stringify outgoing responses
app.use(bodyParser.json()); // setting for body parser
app.use(bodyParser.urlencoded({ extended: false })); // another setting for body parser
app.use(express.static(__dirname + '/../client/dist')); // location of static files, such as index.html
// var premadeProjects = require("../dummyData.js")

app.post("/projects", function(req, res) { // fetching projects from database
  console.log("Heard get from app.");
  console.log('In /projects, user: ', req.body.username);
  db.selectAll(req.body.username).then(function(results) {
    console.log('Results: ', results);
    res.send(JSON.stringify(results.projects))});
})

app.get("/customers", function(req, res) { // fetching customers from database
  console.log("Heard request for all customers.");
  console.log(req.session.user);
  db.selectAllCustomers().then(function(customers) {res.send(customers)});
});

app.post("/project", function(req, res) { // adding a new project to the database
  console.log("in projects post route");
  console.log(req.body);
  db.createProject(req.body.data, req.body.username); // Async issues
  res.send(JSON.stringify(req.body) + " will be added to the database.");
})

app.put("/projects", function(req, res) { // updating an existing project in the database
  console.log("Heard put from app.");
  db.updateProject(req.body); // send response first
})

  //the function in the database file should use tableName.findByIdAndUpdate(id, obj, optional callback)
  //the first argument is the id of that particular row/project/document being modified in the database
  //the second argument is the object that react is passing to the server, which the server is passing into the database
  //that object should be the newest data reflecting the project, so if the name of the project was updated, the name in that object should not equal the name in the database until after the modify function runs

app.post("/signup", function(req, res) { // signing up, creating new user in database with object from request body
  console.log("Signup attempt.");
  console.log("in signup post route ");
  console.log(req.body);
  db.createUser(req.body); // assuming req.body.username is username and req.body.password is password
})

app.post("/login", function(req, res) { // logging in, needs to validate user with data from object in request body
  //should take username, see if there's a match, and then see if the passwords match
  console.log('Login body: ', req.body);
  db.validateUser(req.body)
  .then(function(status) {
      console.log(status);
      if (status) { // if user is validated, then officially create session
        // req.session.regenerate(function(err) {
        //   if (err) console.log("ERROR: " + JSON.stringify(err));
        //   req.session.user = req.body.username;
        //   console.log('user session: ', req.session.user)
        //   res.send("true");
        // });
        res.send("user is validated");
      } else {
        res.send("Invalid credentials.");
        // console.log(db.validateUser(req.body));
      }
  })
})

app.get("/logout", function(req, res) { // signing out, should destroy session
  console.log("Signout attempt.");
  req.session.destroy(function() {
    res.send("Logged out.");
  })
})

// app.get("/", function(req, res) { // checking to see if logged in, and prompted to do so if not
//   console.log('In / home route!');
//   console.log('User session: ', req.session.user);
//   if (!!req.session.user === false) {
//     res.send("false");
//   } else {
//     res.send("true");
//   }
// })

var port = process.env.PORT || 8080;

app.listen(port, function() { // creates server - this function runs once upon server creation/restart
  console.log("Server created, listening on port 8080"); // listening on localhost:8080
})
