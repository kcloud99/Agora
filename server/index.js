var express = require("express"); // using express for routing

var app = express(); // initializing app variable for routing


var bodyParser = require("body-parser"); // can parse incoming requests and possibly stringify outgoing responses
app.use(bodyParser.json()); // setting for body parser
app.use(bodyParser.urlencoded({ extended: false })); // another setting for body parser
app.use(express.static(__dirname + '/../client/dist')); // location of static files, such as index.html
var premadeProjects = require("../dummyData.js")

var db = require("../database/index.js"); // assuming we want the database file to be called 'db'

app.get("/projects", function(req, res) { // fetching projects from database
  console.log("Heard get from app.");
  console.log("Sending hard-coded object, not from actual mongodb database.");
  res.send(premadeProjects.dummyData); // sending dummy data from static file, not from database


  //function, assuming called find, should have tableName.find() somewhere in the body, which returns all of the rows of the table, meaning an array of objects
  //db.find().then(function(rows) res.send(rows));
  //                        ^ this argument should be the return value of the .find function, which should be an array of all of the table row objects
})


app.post("/projects", function(req, res) { // adding a new project to the database
  console.log("Heard post from app.");

  //there should be a function, assuming called save, which takes a single object and saves it into the database via mongoose connection, possibly adding a timestamp field to the row, but the rest of the object schema in the database should match the object key:value pairs in the req.body object
  // db.save(req.body) <= should take the object, map it into a new Collection(obj) (meaning a new document/row in the collection/table) and then .save() the new variable
  //db function needs no return value
  //this function itself needs no response
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





app.listen(8080, function() { // creates server - this function runs once upon server creation/restart
  console.log("Server created, listening on port 8080"); // listening on localhost:8080
})


/* what I imagine the database schema to be for a particular project

{
    name: String,
    description: String,
    customer: customer_id, // from another table
    resources: [{key: value}, {key: value}, {key: value}],
    finances: [{key: value}, {key: value}, {key: value}],
    timeline: {
      tasks: [{name: "task1", dueDate: "the date that this particular task is due"}, {name: "task2", dueDate: "date that this particular task is due"}],
      startDate: "the starting date of the project",
      endDate: "the end date of the project"
    }
  }
}


*/




