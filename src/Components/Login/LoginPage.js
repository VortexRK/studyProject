import React from "react";
import Header from "../Header/Header";
import "./LoginPage.css";

const user = [{ id: 1, login: "Admin", pass: "test1A" }];

function check(login, pass) {
  if (user[0].login === login && user[0].pass === pass) {
    window.alert("Successful!!!!!!!!!");
  } else {
    window.alert("invalid data");
  }
}

function LoginPage() {
  const [login, setLogin] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <form className="login_form">
          <input
            className="input_form"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            placeholder="login"
          />
          <input
            className="input_form"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
            placeholder="password"
            type="password"
            maxLength="15"
          />
          <button className="input_button" type="submit" onClick={() => check(login, pass)}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
