import React from 'react';
import ProjectListEntry from './projectListEntry.jsx';

const ProjectList = (props) => (

  <div>
      <h3>PROJECTS</h3>
      {props.projects.map(function(project, index) {
        return <ProjectListEntry project={project} key={index}/>
      })}
  </div>
)

export default ProjectList;