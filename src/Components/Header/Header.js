import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
//import Button from "../SideDrawer/Button";
/*const styles = {
    nav: {
        navRight: 'auto'
    }
}*/

function Header(props) {
  return (
    <header className="header">
      <div className="logo">The logo</div>
      <div className="spacier" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/ProfilePage">Profile</Link>
        </li>
        <li>
          <Link to="/Redux">Redux</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
