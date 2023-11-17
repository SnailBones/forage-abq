import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            What's in Season
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-plants">All Plants</NavLink>
        </li>
        <li>
          <NavLink to="/responsible-foraging">Responsible Foraging</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
