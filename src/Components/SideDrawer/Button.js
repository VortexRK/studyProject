import React from "react";
//import "./Button.css";

function Button(props) {
  return (
    <div>
      <button onClick={props.click} className="drawer_Button">
        <div className="test" />
        <div className="test" />
        <div className="test" />
      </button>
    </div>
  );
}

export default Button;
