import React from "react";
import { motion } from "framer-motion";
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
        <motion.li
          whileHover={{ scale: 1.1, transition: { duration: 0.08 } }}>
          <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
        </motion.li>
        <motion.li          
        whileHover={{ scale: 1.1, transition: { duration: 0.08 } }}>
          <NavLink to="/about" activeClassName="active" className="nav-link">About Us</NavLink>
        </motion.li>
        <motion.li          
        whileHover={{ scale: 1.1, transition: { duration: 0.08 } }}>
          <NavLink to="/stories" activeClassName="active" className="nav-link">Unbound Stories</NavLink>
        </motion.li>
      </ul>
      <div className="SignLog">
      <NavLink to="/signup" className="SignIn">
          Sign Up
        </NavLink>
        <NavLink to="/login" className="LogIn">
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
//Lable the buttons
//call center for blinds
