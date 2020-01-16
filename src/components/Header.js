import React from 'react';
import { NavLink } from 'react-router-dom';




function Header(){
  return(
    <nav className="navbar justify-content-start fixed-top">
      
      <li className="nav-item nav-link h6">
        <NavLink className=" nav-style" exact to="/" activeClassName="active">Top Games</NavLink>
      </li>
      <li className="nav-item nav-link h6">
        <NavLink className="nav-style" to="/top-streams" activeClassName="active">Top Live Streams</NavLink>
      </li>
    </nav>
  );
}


export default Header;