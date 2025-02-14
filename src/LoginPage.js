import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";
const Login = () => {
  return (
      <div className="SignIn">
      <NavLink to="/login/Employer" className="SignUp_Employer">
          Employer Login
        </NavLink>
        <NavLink to="/login/Employee" className="SignUp_Employee">
          Employee Login
        </NavLink>
      </div>
  );
};
export default Login;
