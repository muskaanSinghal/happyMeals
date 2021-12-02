import React from "react";
import WelcomePage from "./Pages/WelcomePage";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import { Redirect, Route } from "react-router-dom";
import Login from "./Pages/Login";
const App = () => {
  return (
    <React.Fragment>
      <section className="app">
        <MainHeader />
        <Route path="/" exact>
          <Redirect to="/Welcome"></Redirect>
        </Route>
        <Route path="/Welcome">
          <WelcomePage />
        </Route>
        <Route path="/main/:id">
          <Login />
        </Route>
      </section>
    </React.Fragment>
  );
};

export default App;
