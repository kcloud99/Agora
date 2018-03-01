var express = require("express"); // using express for routing
var db = require('../database/index.js');
var app = express(); // initializing app variable for routing
var request = require('request');
var session = require('express-session');
app.use(session({
  secret: 'Secret token',
  cookie: {
    maxAge: 60000
  }
}));

var bodyParser = require("body-parser"); // can parse incoming requests and possibly stringify outgoing responses
app.use(bodyParser.json()); // setting for body parser
app.use(bodyParser.urlencoded({ extended: false })); // another setting for body parser
app.use(express.static(__dirname + '/../client/dist')); // location of static files, such as index.html
// var premadeProjects = require("../dummyData.js")

var db = require("../database/index.js"); // assuming we want the database file to be called 'db'

app.get("/projects", function(req, res) { // fetching projects from database
  console.log("Heard get from app.");
  db.selectAll(req.session.user).then( (results) => res.send(results));
})

app.get("/customers", function(req, res) { // fetching customers from database
  console.log("Heard request for all customers.");
  db.selectAllCustomers().then(function(customers) {res.send(customers)});
});

app.post("/projects", function(req, res) { // adding a new project to the database
    db.createProject(req.body, req.session.user);
    res.send(req.body);
})

app.put("/projects", function(req, res) { // updating an existing project in the database
  console.log("Heard put from app.");
  db.updateProject(req.body);
})

  //the function in the database file should use tableName.findByIdAndUpdate(id, obj, optional callback)
  //the first argument is the id of that particular row/project/document being modified in the database
  //the second argument is the object that react is passing to the server, which the server is passing into the database
  //that object should be the newest data reflecting the project, so if the name of the project was updated, the name in that object should not equal the name in the database until after the modify function runs

app.post("/signup", function(req, res) { // signing up, creating new user in database with object from request body
  console.log("Signup attempt.");
  console.log(req.body);
  db.createUser(req.body); // assuming req.body.username is username and req.body.password is password
})

app.post("/login", function(req, res) { // logging in, needs to validate user with data from object in request body
  //should take username, see if there's a match, and then see if the passwords match
  console.log("Login attempt.");
  console.log(req.body);
  if (db.validateUser(req.body)) { // if user is validated, then officially create session
    req.session.regenerate(function() {
      req.session.user = req.body.username;
      res.send("Logged in as " + req.body.username);
    })
  } else {
    res.send("Invalid credentials.");
  }
})

app.get("/logout", function(req, res) { // signing out, should destroy session
  console.log("Signout attempt.");
  req.session.destroy(function() {
    res.send("Logged out.");
  })
})

app.get("/", function(req, res) { // checking to see if logged in, and prompted to do so if not
  if (!!req.session.user === false) {
    res.send("Please log in.");
  }
})

var port = process.env.PORT || 8080;

app.listen(port, function() { // creates server - this function runs once upon server creation/restart
  console.log("Server created, listening on port 8080"); // listening on localhost:8080
})
