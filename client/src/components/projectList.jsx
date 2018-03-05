import React from 'react';
import ProjectListEntry from './projectListEntry.jsx';

const ProjectList = (props) => (

  <div>
    <h2>PROJECTS</h2>
    {props.projects.map(function(project, index) {
      return <ProjectListEntry project={project} key={index} current={props.current} />
    })}
  </div>
)

export default ProjectList;