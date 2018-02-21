import React from 'react';

class projectList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      nameVal: '';
    }
  }

  addProject(name) => {
    console.log(name);
    this.setState({nameVal: name});
  }

  render() {

    var listStyle = {
      height: 60%,
      width: 80%,
      border: solid 1px "gray",
      backgroundColor: "#FFFFFF",
    };

    return (
      <div style={listStyle}>
      <div>
        <input type="text" id="newProjectName">
        <button id="newProjectButton" onClick={() => this.addProject(document.getElementById("newProjectName").value)}> Add Project </button>
      </div>
        {props.projects.map(function(project) {
          return <ProjectListEntry project="project"/>
        })}
      </div>
    )
  }

}