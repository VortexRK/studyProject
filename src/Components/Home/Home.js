import React from "react";

function Home() {
  if (localStorage.getItem("isLoggedIn")) {
    return <h1> {localStorage.getItem("isLoggedIn")}</h1>;
  } else {
    return (
      <div>
        <h3> Hello! Loggin pls!</h3>
      </div>
    );
  }
}

export default Home;
