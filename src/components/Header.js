import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <nav className="navbar justify-content-center ">
      <li className="nav-item nav-link ">
        <Link className=" nav-style" to="/">Top Games</Link>
      </li>
      <li className="nav-item nav-link ">
        <Link className="nav-style" to="/top-streams">Top Live Streams</Link>
      </li>
    </nav>
  );
}

export default Header;