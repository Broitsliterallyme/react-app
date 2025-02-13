import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
      <div className="SignLog">
      <NavLink to="/signup" className="SignIn">
          Employer Sign Up
        </NavLink>
        <NavLink to="/login" className="LogIn">
          Employee Log In
        </NavLink>
      </div>
  );
};

export default Navbar;
