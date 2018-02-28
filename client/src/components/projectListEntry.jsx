import React from 'react';

class ProjectListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h5>
          {this.props.project.name}
        </h5>
        <h6>Customer:
        </h6>
        <p>
          {this.props.project.customer}
        </p>
        <h6>Description:
        </h6>
        <p>
          {this.props.project.description}
        </p>
      </div>
    )
  }
}

export default ProjectListEntry;