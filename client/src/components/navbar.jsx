import React from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';

var Navbar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Agora</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
          <li><Login /></li>
          <li><Signup /></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;