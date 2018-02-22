import React from 'react';

class ProjectListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // var listEntryStyle = {
    //   borderStyle: solid,
    //   borderColor: "#DDDDDD"
    // };

    return (
      <div>
      <h5>
        {this.props.project.name}
        </h5>
        <p>
          {this.props.project.description}
        </p>
      </div>
    )
  }
}

export default ProjectListEntry;