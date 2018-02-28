import React from 'react';

const Signup = (props) => {
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
        <input type="email" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group mx-sm-3 mb-2" style={inputStyle}>
        <label className="sr-only">Password</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary mb-2" style={inputStyle}>Signup!</button>
    </form>
  );
};

export default Signup;