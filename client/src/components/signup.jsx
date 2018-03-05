import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    props.signup(this.state);
  }

  render() {

    const formStyle = {
      float: 'right',
      margin: '5px'
    };
    const inputStyle={
      margin: '5px'
    };
    return (
      <form className="form-inline" style={formStyle}>
        <div className="form-group mb-2" style={inputStyle}>
          <label className="sr-only">Username</label>
          <input type="email" className="form-control" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
        </div>
        <div className="form-group mx-sm-3 mb-2" style={inputStyle}>
          <label className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary mb-2" style={inputStyle} onClick={this.handleSubmit}>Signup</button>
      </form>
    );
  }
};

export default Signup;