import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import Home from "./home/Home";
import { BrowserRouter as Router } from "react-router-dom";

import { Route, Switch } from "react-router-dom";

import Checkout from "./screens/checkout/Checkout";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
