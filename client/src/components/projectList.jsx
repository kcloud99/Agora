import React from 'react';

class projectList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    var listStyle = {
      height: 60%,
      width: 80%,
      border: solid 1px "gray",
      backgroundColor: "#FFFFFF",
    }
    return (
      <div>
        {props.projects.map(function(project) {
          return <ProjectListEntry project="project"/>
        })}
      </div>
    )
  }

}