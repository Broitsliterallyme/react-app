import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';
import logo from './assets/Logo.png';
const Navbar = () => {
  return (
    <div className="NavBar">
      <img
        src={logo}
        alt="Google Logo"
        className="Logo"
      />
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" className="nav-link">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/stories" activeClassName="active" className="nav-link">Unbound Stories</NavLink>
        </li>
      </ul>
      <div className="SignLog">
        <button className="SignIn">Sign In</button>
        <button className="LogIn">Log In</button>
      </div>
    </div>
  );
};

export default Navbar;
