import React from "react";
import "./LoginPage.css";
import { Redirect, Switch } from "react-router-dom";

const user = [{ id: 1, login: "Admin", pass: "test1A" }];

function LoginPage() {
  const [login, setLogin] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [flag, changeFlag] = React.useState(false);
  function check(login, pass) {
    if (user[0].login === login && user[0].pass === pass) {
      //  let isLogged = JSON.stringify({ isLoggedIn: true, name: login });
      changeFlag(!flag);
      localStorage.setItem("isLoggedIn", login);
    } else {
      window.alert("Invalid data");
    }
  }

  if (localStorage.getItem("isLoggedIn") === true) {
    return (
      <Switch>
        <Redirect to="/" />
      </Switch>
    );
  } else if (flag) {
    return (
      <Switch>
        <Redirect to="/ProfilePage" />
      </Switch>
    );
  } else {
    return (
      <div>
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
}

export default LoginPage;
