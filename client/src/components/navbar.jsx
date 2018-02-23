import React from 'react';

var Navbar = (props) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Agora</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>
    </ul>
    </div>
  </nav>
)

export default Navbar;