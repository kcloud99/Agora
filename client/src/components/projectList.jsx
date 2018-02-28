import React from 'react';
import ProjectListEntry from './projectListEntry.jsx';
import Header from './header.jsx';

const ProjectList = (props) => (

  <div>
    <Header />
    <h2>PROJECTS</h2>
    {props.projects.map(function(project, index) {
      return <ProjectListEntry project={project} key={index}/>
    })}
  </div>
)

export default ProjectList;