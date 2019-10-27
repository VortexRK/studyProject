import React from "react";
import ContactPage from "./Contacts/ContactPage";
import LoginPage from "./Login/LoginPage";
import Home from "./Home/Home";
import Header from "./Header/Header";
import ProfilePage from "./Profile/ProfilePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { auth } from "../reducers/auth";
import allReducers from "../reducers/index";
import MainApp from "./reduxTrainingWithoutHooks/mainApp";

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/Contacts" component={ContactPage} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/ProfilePage">
            <ProfilePage />
          </Route>
          <Route exact path="/" component={Home} />
          <Route path="/Redux" component={MainApp} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
