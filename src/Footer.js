import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
<div className="Footer" >
      <h2 className="contact-header">CONTACT US</h2>
      <div className="footer">
        <p>📧 somemail@gmail.com</p>
        <p>📞 +977 9876543210</p>
        <p>📍 Pulchowk, Lalitpur</p>
        <div className="social-icons">
          <span>📷</span>
          <span>🔗</span>
          <span>📘</span>
        </div>
      </div>
      </div>
  );
};

export default Footer;
