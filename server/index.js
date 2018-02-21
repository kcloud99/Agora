var express = require("express"); // using express for routing

var app = express(); // initializing app variable for routing


var bodyParser = require("body-parser"); // can parse incoming requests and possibly stringify outgoing responses
app.use(bodyParser.json()); // setting for body parser
app.use(bodyParser.urlencoded({ extended: false })); // another setting for body parser
app.use(express.static(__dirname + '/../client/dist')); // location of static files, such as index.html


app.get("/projects", function(req, res) { // fetching projects from database
  console.log("Heard get from app.");
  console.log("Sending hard-coded object, not from actual database.");
  res.send({
    name: "hard-coded name",
    description: "hard-coded description",
    customer: "fake customer ID",
    resources: "hard-coded resources, originally meant to be an array of objects",
    finances: "also meant to be an array of objects",
    timeline: {
      tasks: [{name: "task1", dueDate: "the date that this particular task is due"}, {name: "task2", dueDate: "date that this particular task is due"}],
      startDate: "the starting date of the project",
      endDate: "the end date of the project"
    }
  });
})

app.post("/projects", function(req, res) { // adding a new project to the database
  console.log("Heard post from app.");
})

app.put("/projects", function(req, res) { // updating an existing project in the database
  console.log("Heard put from app.")
})







app.listen(8080, function() { // creates server - this function runs once upon server creation/restart
  console.log("Server created, listening on port 8080"); // listening on localhost:8080
})


