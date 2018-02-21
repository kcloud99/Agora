import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {

    var sideStyle = {
      height: 60%,
      width: 15%,
      padding: 20,
      border: solid 1px "gray",
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(3px 0px 3px #666)",
      filter: "drop-shadow(3px 0px 3px #666)"
    };

    return (
      <div style={sideStyle}>
        <ul>
          <li>All Projects</li>
          <li>Project Workspace</li>
          <li>Overall Timeline</li>
          <li>Finance History</li>
          <li>All Resources</li>
          <li>Customer List</li>
        </ul>
      </div>
    )
  }

}