import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";
import Login from "./Login";
import Authenticated from "./Authenticated";
import PrivateRoute from "./PrivateRoute";
import NotVerifiedUser from "./NotVerifiedUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div className="container1">
          <Router>
            <Switch>
              <Route exact path="/" component={SignUp} />
              <Route path="/Login" component={Login} />
              <Route path="/notverified" component={NotVerifiedUser} />
              <PrivateRoute
                component={Authenticated}
                path="/Authenticated"
                exact
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
export default App;
