import React from "react";
import "./SignUpPage.css";
import { NavLink } from "react-router-dom";
import employee from './assets/Employee.png';
import Imp from './assets/Imp.png';
const ContactPage = () => {
  return (
    <div className="SignUp_Container">
      <div className="header">
        <div className="box">
<img src={employee} alt="icon" />
          <div className="text">
        <NavLink to="/login/Employer" className={"SignUp_Employer"}>
        <h2>JOIN US AS AN EMPLOYER</h2>
        </NavLink>
            <p>
              Our brand has legally certified by the authorities. No need to worry
              because all our product are assured.
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="box">
        <img src={Imp} alt="icon" />
        <div className="text">
        <NavLink to="/login/Employee" className={"SignUp_Employee"}>
        <h2>JOIN US AS AN EMPLOYEE</h2>
                </NavLink>

            <p>
              Rusty jewelry? Say no more! Our products made from fine gold that will
              last long and absolutely no rust.
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Erat ipsum aptent
          commodo senectus dapibus. Semper nascetur convallis placerat, sodales
          suscipit mus congue. Convallis vel urna finibus nisi integer feugiat.
          Maecenas inceptos volutpat risus diam vestibulum viverra tristique.
          Penatibus morbi habitasse finibus consectetur torquent quam mauris
          maximus. Fringilla dolor nam in justo diam habitant. Consequat efficitur
          lobortis, orci lectus vitae elit nulla scelerisque taciti. Quam pretium
          aliquam vehicula libero dolor. Urna lacinia vel dui urna nam posuere massa
          scelerisque cras.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
