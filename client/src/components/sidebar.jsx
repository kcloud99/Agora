import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
          <li className="list-group-item">Customer List</li>
        </ul>
      </div>
    )
  }

}

export default Sidebar;