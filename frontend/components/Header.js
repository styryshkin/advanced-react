import React from 'react';
import Nav from './Nav';

const Header = () => (
  <div>
    <div>
      <a href="/">Online Store</a>
      <Nav />
    </div>
    <div>
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
