import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-col1">
        <h3>Categories</h3>
        <Link to={"#"}>Web builder</Link>
        <Link to={"#"}>Hosting</Link>
        <Link to={"#"}>Data Center</Link>
        <Link to={"#"}>Robotic-Automation</Link>
      </div>
      <div className="footer-col2">
        <h3>Contact</h3>
        <Link to={"#"}>Contact</Link>
        <Link to={"#"}>Privacy Policy</Link>
        <Link to={"#"}>Terms of Service</Link>
        <Link to={"#"}>Categories</Link>
        <Link to={"#"}>About</Link>
      </div>
      <div className="footer-col3">
        <select>
          <option>United States</option>
          <option>India</option>
        </select>
      </div>
    </footer>
  );
};
