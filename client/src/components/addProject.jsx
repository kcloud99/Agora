import React from 'react';

//** TODO : REFACTOR FOR HIDDEN STYLING

class AddProject extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      customer: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxprops.action:',props.action);
    this.action = props.action;
  }

  addProject(object) {
    console.log(name);

          var url = '/projects';
          var data = object;
         fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data),
          headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(this.action());
  }

  handleChange (e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.addProject(this.state);
    this.clearFormVals();
  }

  clearFormVals() {
    this.setState({
      name: '',
      customer: '',
      description: '',
    });
  }


  render() {
    const buttonStyle = {
      float: 'right'
    };
    return (
      <div>
        <form method="post" className="form-horizontal">
          <fieldset>
            <div className="form-group">
              <legend>New Project Name:</legend>
                <input className="form-control" type="text" id="newProjectName" name="name" value={this.state.name} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <legend>Customer:</legend>
                <input className="form-control" type="text" id="customerName" name="customer" value={this.state.customer} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <legend>Project Description:</legend>
                <input className="form-control" type="text" id="projectDescription" name="description" value={this.state.description} onChange={this.handleChange}></input>
            </div>
          </fieldset>
          <div className="form-group">
            <button id="newProjectButton" style={buttonStyle} type="submit" onClick={this.handleSubmit} className="btn btn-primary"> Add Project </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddProject;