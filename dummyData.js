var dummyData = [{
    name: "Fix a wall",
    description: "Fix a wall at the client's house.",
    customer: "Some ID from the customer database, or just a plain text name for now",
    resources: [{miles: 30}],
    finances: [{expectedPayment: 300}],
    timeline: {
      tasks: [{name: "Drive to client's house.", dueDate: "February 21st, 2018"}, {name: "inspect wall for damages", dueDate: "February 21st, 2018"}],
      startDate: "February 20th, 2018",
      endDate: "February 23rd, 2018"
    }
},
{
  name: "Fix a sink",
    description: "Fix a leaking sink at client's house.",
    customer: "Some ID from the customer database, or just a plain text name for now",
    resources: [{miles: 20}, {pipes: "$20"}],
    finances: [{expectedPayment: 100}, {materials: 20}],
    timeline: {
      tasks: [{name: "Meet client", dueDate: "March 1st, 2018"}, {name: "Buy new pipes", dueDate: "March 2nd, 2018"}],
      startDate: "March 1st, 2018",
      endDate: "March 2nd, 2018"
    }
},
{
  name: "Build a shed",
    description: "Build a shed at client's backyard",
    customer: "Some ID from the customer database, or just a plain text name for now",
    resources: [{miles: 25}, {wood: "$100"}],
    finances: [{expectedPayment: 950}, {materials: 100}],
    timeline: {
      tasks: [{name: "Meet client", dueDate: "March 4th, 2018"}, {name: "Buy wood", dueDate: "March 5th, 2018"}, {name: "Cut wood", dueDate: "March 6th, 2018"}],
      startDate: "March 4th, 2018",
      endDate: "March 8th, 2018"
    }
}]

module.exports.dummyData = dummyData;