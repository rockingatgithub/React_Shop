import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <ul style={{ listStyle: 'none', display: 'inline-block' }}>
        <li>
          <Link to="/all">All</Link>
        </li>
        <li>
          <Link to="/add">Add Items</Link>
        </li>
        <li>
          <Link to="/cart">Cart Items</Link>
        </li>
      </ul>
      <img
        src="https://image.flaticon.com/icons/svg/628/628556.svg"
        className="cat-img"
        style={{ height: '20px', width: '20px' }}
      />
      <span>0</span>
    </div>
  );
}

export default Navbar;
