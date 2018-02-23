import React from 'react';



var Workspace = (props) => {
  console.log(props.project);
  return(
  <div>
    <div className="names">
      <h1>Project Name:   {props.project.name}</h1>
      <h2>Customer:   {props.project.customer}</h2>
    </div>
    <div className="projectInfo">
      <h3>Description:   {props.project.description}</h3>
      <h3>Timeline:   {props.project.timeline.tasks.toString()}</h3>
    </div>
  </div>
)}

export default Workspace;