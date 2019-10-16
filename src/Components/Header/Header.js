import React from "react";
import "./Header.css";
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
          <a href="#" target="_blank">
            Home
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Contacts
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Profile
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
