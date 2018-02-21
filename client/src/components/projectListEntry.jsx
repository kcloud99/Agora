import React from 'react';

class ProjectListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var listEntryStyle = {
      border: solid 1px "DDDDDD"
    };

    return (
      <div style={listEntryStyle}>
        {props.project.name}
      </div>
    )
  }
}