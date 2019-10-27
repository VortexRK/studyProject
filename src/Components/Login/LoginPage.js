import React from "react";
import "./LoginPage.css";
import { Redirect, Switch } from "react-router-dom";
import { success, fail } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const user = [{ id: 1, login: "Admin", pass: "test1A" }];

function LoginPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const [login, setLogin] = React.useState("");
  const [pass, setPass] = React.useState("");
  function check(login, pass) {
    if (user[0].login === login && user[0].pass === pass) {
      let userData = { name: login, date: new Date().toString() };
      console.log("Success", userData);
      localStorage.setItem("user", JSON.stringify(userData));

      dispatch(success(userData));
    } else {
      dispatch(fail("Invalid data, try again."));
    }
  }
  if (login.length > 0 && pass > 0) {
  }

  if (currentUser) {
    return (
      <Switch>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <div>
        <div>
          <form className="login_form" onSubmit={() => check(login, pass)}>
            <input
              className="input_form"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              placeholder="login"
              required
            />
            <input
              className="input_form"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
              placeholder="password"
              type="password"
              maxLength="15"
              required
            />
            <button className="input_button" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
