import React from 'react';

class ProjectListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  // chooseProject(project) {
  //   // Set clicked project to current project in state
  //   // pass info to current project in index.jsx
  //   // this.props.setProject(project);
  //   console.log('set project as: ', project);
  // }

  render() {
    const projectStyle = {
      border: "1px solid #60b0f4",
      margin: "10px",
      borderRadius: "10px",
      textAlign: "left"
    };
    const headingStyle = {
      textAlign: "right"
    };
    return (
      <div className="col-md-5" style={projectStyle}>
        <div className="row">
          <h4 className="col-xs-6" onClick={ () => props.current(props.project) }>
            NAME: {this.props.project.name}
          </h4>
          <h4 style={headingStyle} className="col-xs-6">
            CUSTOMER: {this.props.project.customer}
          </h4>
        </div>
        <h4>Description:
        </h4>
        <p>
          {this.props.project.customer}
        </p>
      </div>
    )
  }
}

export default ProjectListEntry;