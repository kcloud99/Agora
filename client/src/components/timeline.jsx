import React from 'react';

var Timeline = (props) => (
  <div>
    <h2>Start Date: {props.project.timeline.startDate}</h2>
    <h2>End Date: {props.project.timeline.endDate}</h2>
    {props.project.timeline.tasks.map(function(task) {
      return (<div>
                <p>To Do:  {task.name}</p>
                <p>Due:  {task.dueDate}</p>
              </div>
      )
    })}
  </div>
)

export default Timeline;