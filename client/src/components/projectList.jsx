import React from 'react';
import ProjectListEntry from './projectListEntry.jsx'
//*** CHANGE TO STATELESS FUNCTION COMPONENT
class ProjectList extends React.Component{




  render() {

    return (
      <div className="col-sm-6 col-md-8 col-lg-8">
          <h3>PROJECTS</h3>
          {this.props.projects.map(function(project, index) {
            return <ProjectListEntry project={project} key={index}/>
          })}
      </div>
    )
  }

}

export default ProjectList;