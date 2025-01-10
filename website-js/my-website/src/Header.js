// import React from 'react';
import './Header.css';
import Button from './Button';

const Header = () => {
  return (
    <header className="Header-header">
      <h1>Jasmin Salgado</h1>
      <nav>
        {/* <ul> */}
          <Button />
          {/* <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Contact</li> */}
        {/* </ul> */}
      </nav>
    </header>
  );
};

export default Header;