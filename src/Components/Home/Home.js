import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const currentUser = useSelector((state) => state.auth.user);
  console.log("HOME", currentUser);
  if (currentUser) {
    return (
      <h1>
        {currentUser.name} {currentUser.date}
      </h1>
    );
  } else {
    return (
      <div>
        <h3> Hello! Loggin pls!</h3>
      </div>
    );
  }
}

export default Home;
