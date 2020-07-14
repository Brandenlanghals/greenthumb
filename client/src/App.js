import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import MainProfile from "./pages/mainProfile";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/signIn"]}>
            <SignIn />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/profile">
            <MainProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
