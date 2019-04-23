import { Router } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import App from "./App";
import MainHeader from "./MainHeader";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("UA-138909386-1");
}

ReactDOM.render(
  <main className="App">
    <MainHeader />
    <Router>
      <App path="/" />
      <About path="/about" />
    </Router>
  </main>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
