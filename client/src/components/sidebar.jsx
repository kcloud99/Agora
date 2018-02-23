import React from 'react';
import $ from 'jquery'; // might be temporary to make AJAX calls easier

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }

  displayCustomers() { // should send an AJAX call, via jquery or react, querying the server/database for all customers
    console.log("Display all customers.")
    // fetch("/customers").then(function(response) {console.log(response)});
    //trying with jquery's ajax
    $.ajax({
      url: "http://localhost:8080/customers",
      type: "GET",
      success: (results) => {
        console.log(results);
        this.setState({
          customers: results
        })
      }
    })
  }

  render () {

    // var sideStyle = {
    //   backgroundColor: "#FFF",
    //   WebkitFilter: "drop-shadow(3px 0px 3px #666)",
    //   filter: "drop-shadow(3px 0px 3px #666)"
    // };

    return (
      <div id="sidebar" className="col-sm-3">
        <ul className="list-group">
          <li className="list-group-item">All Projects</li>
          <li className="list-group-item">Project Workspace</li>
          <li className="list-group-item">Overall Timeline</li>
          <li className="list-group-item">Finance History</li>
          <li className="list-group-item">All Resources</li>
          <li className="list-group-item" onClick={this.displayCustomers.bind(this)}>Customer List</li>
        </ul>
        {this.state.customers.map(customer => <div>{customer.customer}</div>)}
      </div>
    )
  }

}

export default Sidebar;