import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/responsible-foraging">
        Please forage safely and responsibly.
      </NavLink>
      <p>
        Created with ❤️ & GPT-4 by <a href="http:ailanth.us">ailanth.us</a>
      </p>
    </footer>
  );
};

export default Footer;
