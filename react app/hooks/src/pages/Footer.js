import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="foot-panel1">
        Back to Top
      </div>

      <div className="foot-panel2">
        {Array(4).fill().map((_, i) => (
          <ul key={i}>
            <p>Get to Know Us</p>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">About Amazon</a>
            <a href="#">Investor Relations</a>
            <a href="#">Amazon Devices</a>
            <a href="#">Amazon Science</a>
          </ul>
        ))}
      </div>

      <div className="foot-panel3">
        <div className="logo"></div>
      </div>

      <div className="foot-panel4">
        <div className="pages">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>
        <div className="copyright">
          © 2003-2025, Tripathi.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
}

export default Footer;
