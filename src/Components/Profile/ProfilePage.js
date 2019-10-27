import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfilePage(props) {
  // let user = JSON.parse(localStorage.getItem("isLoggedIn"));
  const currentUser = useSelector((state) => state.auth.user);
  if (currentUser) {
    return (
      <div>
        PROFILE {currentUser.name} {currentUser.date}
      </div>
    );
  } else {
    return (
      <div>
        <Redirect to="/LoginPage" />
      </div>
    );
  }
}

export default ProfilePage;
