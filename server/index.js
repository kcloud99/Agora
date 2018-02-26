var express = require("express"); // using express for routing
var db = require('../database/index.js');
var app = express(); // initializing app variable for routing
var request = require('request');

var bodyParser = require("body-parser"); // can parse incoming requests and possibly stringify outgoing responses
app.use(bodyParser.json()); // setting for body parser
app.use(bodyParser.urlencoded({ extended: false })); // another setting for body parser
app.use(express.static(__dirname + '/../client/dist')); // location of static files, such as index.html
// var premadeProjects = require("../dummyData.js")

var db = require("../database/index.js"); // assuming we want the database file to be called 'db'

app.get("/projects", function(req, res) { // fetching projects from database
  console.log("Heard get from app.");

  // console.log("Sending hard-coded object, not from actual mongodb database.");
  // res.send(premadeProjects.dummyData); // sending dummy data from static file, not from database

  db.selectAll().then( (results) => res.send(results));
  //function, assuming called find, should have tableName.find() somewhere in the body, which returns all of the rows of the table, meaning an array of objects
  //db.find().then(function(rows) res.send(rows));
  //                        ^ this argument should be the return value of the .find function, which should be an array of all of the table row objects
})

app.get("/customers", function(req, res) {
  console.log("Heard request for all customers.");
  db.selectAllCustomers().then(function(customers) {res.send(customers)});
});

app.post("/projects", function(req, res) { // adding a new project to the database
    db.createProject(req.body);  // not sure if we will still need to parse the body, probably NOT
    res.send(req.body);
})



app.put("/projects", function(req, res) { // updating an existing project in the database
  console.log("Heard put from app.");
  //there should be a function, assuming called modify, which takes a single object and updates that row in the database via mongoose
  //db.modify(req.body) <= passing in the current request body, which should take the current state of the particular project in react
  //db function needs no return value
  //this function itself needs no response
})

  //the function in the database file should use tableName.findByIdAndUpdate(id, obj, optional callback)
  //the first argument is the id of that particular row/project/document being modified in the database
  //the second argument is the object that react is passing to the server, which the server is passing into the database
  //that object should be the newest data reflecting the project, so if the name of the project was updated, the name in that object should not equal the name in the database until after the modify function runs



var port = process.env.PORT || 8080;

app.listen(port, function() { // creates server - this function runs once upon server creation/restart
  console.log("Server created, listening on port 8080"); // listening on localhost:8080
})

// request({
//     url: "http://localhost:8080/projects",
//     method: "POST",
//     json: true,
//     body: {"name": "Fix a shed", "description": "Fix a shed at the client's house.", "customer": "customer name", "resources": "poreclain", "finances": "450", "timeline": "should finish by next week"}
// }, function (error, response, body){
//     console.log("Posted hard-coded request.");
// });
