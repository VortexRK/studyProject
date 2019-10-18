import React from "react";
import { Redirect } from "react-router-dom";

function ProfilePage(props) {
  // let user = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (localStorage.getItem("isLoggedIn")) {
    return <div> PROFILE {localStorage.getItem("isLoggedIn")}</div>;
  } else {
    return (
      <div>
        <Redirect to="/LoginPage" />
      </div>
    );
  }
}

export default ProfilePage;
