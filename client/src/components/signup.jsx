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
    <form method="POST" action="localhost:8080/signup" className="form-inline" style={formStyle}>
      <div className="form-group mb-2" style={inputStyle}>
        <label className="sr-only">Username</label>
        <input name="username" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group mx-sm-3 mb-2" style={inputStyle}>
        <label className="sr-only">Password</label>
        <input type="password" name="password" className="form-control" placeholder="worosddmsmdmskd" />
      </div>
      <button type="submit" className="btn btn-primary mb-2" style={inputStyle}>Signup!!!!</button>
    </form>
  );
};

export default Signup;