import React from "react";
import "./SideDrawer.css";

function SideDrawer(props) {
  return (
    <div className="side_drawer">
      <div className="flex_container">
        <i className="icon">AT</i>
        <p>
          {props.contact.name} {props.contact.age} {props.contact.email}
        </p>
      </div>
      <div className="button_flex">
        <button type="button" className="button_click">
          Invite
        </button>
        <button type="button" className="button_click">
          Cancel
        </button>
        <button type="button" className="button_click">
          Delete
        </button>
      </div>
    </div>
  );
}

export default SideDrawer;
