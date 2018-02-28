import React from 'react';
import $ from 'jquery'; // might be temporary to make AJAX calls easier
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';

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
      url: "localhost:8080/customers",
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
          <li className="list-group-item"><Link to="/addProject">Add Project</Link></li>
          <li className="list-group-item"><Link to="/allProjects">All Projects</Link></li>
          <li className="list-group-item"><Link to="/workspace">Project Workspace</Link></li>
          <li className="list-group-item"><Link to="/timeline">Overall Timeline</Link></li>
          <li className="list-group-item"><Link to="/finance">Finance History</Link></li>
          <li className="list-group-item"><Link to="/resources">All Resources</Link></li>
          <li className="list-group-item"><Link to="/customers">Customer List</Link></li>
        </ul>
      </div>
    )
  }

}

export default Sidebar;