/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">What's in Season</Link>
        </li>
        <li>
          <Link href="/all-plants">All Plants</Link>
        </li>
        <li>
          <Link href="/responsible-foraging">Responsible Foraging</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
