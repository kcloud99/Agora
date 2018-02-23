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

    return (
      <div className="col-sm-6 col-md-8 col-lg-8">
          <h3>PROJECTS</h3>
          {this.props.projects.map(function(project, index) {
            return <ProjectListEntry project={project} key={index}/>
          })}
          <div>
          <form method="post" className="form-horizontal">
            <fieldset>
              <legend>New Project Name:</legend>
                <input type="text" id="newProjectName"></input>
              <legend>Customer:</legend>
                <input type="text" id="customerName"></input>
              <legend>Project Description:</legend>
                <input type="text" id="projectDescription"></input>
            </fieldset>
            <button id="newProjectButton" onClick={() => this.addProject(document.getElementById("newProjectName").value)}> Add Project </button>
          </form>
        </div>
      </div>
    )
  }

}

export default ProjectList;