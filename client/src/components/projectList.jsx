import React from 'react';
import ProjectListEntry from './projectListEntry.jsx'

class ProjectList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      nameVal: ''
    }
  }

  addProject(name) {
    console.log(name);
    this.setState({nameVal: name});
  }

  render() {

    // var listStyle = {
    //   height: 60,
    //   width: 80,
    //   borderStyle: solid,
    //   borderColor: 'black',
    //   backgroundColor: "#FFFFFF",
    // };

    return (
      <div>
        <div>
          <input type="text" id="newProjectName"></input>
          <button id="newProjectButton" onClick={() => this.addProject(document.getElementById("newProjectName").value)}> Add Project </button>
        </div>
          {this.props.projects.map(function(project) {
            return <ProjectListEntry project={project} key={project.name}/>
          })}
      </div>
    )
  }

}

export default ProjectList;