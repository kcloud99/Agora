import React from 'react';



class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div>
        <div className="names row">
          <h1 className="col-sm-6">Project Name:   {this.props.project.name}</h1>
          <h2 className="col-sm-6">Customer:   {this.props.project.customer}</h2>
        </div>
        <div className="projectInfo row">
          <h3>Description:   {this.props.project.description}</h3>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h3>Timeline:   {this.props.project.timeline.startDate}</h3>
            <h3>Timeline:   {this.props.project.timeline.endDate}</h3>
          </div>
          <div className="col-sm-4">
            <h3>Resources:   {this.props.project.resources.toString()}</h3>
          </div>
          <div className="col-sm-4">
            <h3>Financials:   {this.props.project.finances.toString()}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Workspace;