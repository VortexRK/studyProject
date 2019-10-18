import React from "react";
import ContactPage from "./Contacts/ContactPage";
import LoginPage from "./Login/LoginPage";
import Home from "./Home/Home";
import Header from "./Header/Header";
import ProfilePage from "./Profile/ProfilePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/Contacts" component={ContactPage} />
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/ProfilePage">
          <ProfilePage />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
