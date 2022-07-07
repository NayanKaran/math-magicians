import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <p>Math Magicians</p>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default NavBar;
