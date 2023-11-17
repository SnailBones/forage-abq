import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to={`/`}> 
        <h1>Forage Albuquerque</h1>
      </Link>      
    </header>
  );
};

export default Header;
