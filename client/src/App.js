import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import MainProfile from "./pages/mainProfile";
import About from "./pages/about";
import EditProfile from "./pages/editProfile";
import FirstPage from "./pages/firstPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/firstPage"]}>
            <FirstPage />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          {/* add the id after profile */}
          <Route exact path="/user/profile">
            <MainProfile />
          </Route>
          <Route exact path="/user/profile/edit">
            <EditProfile />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
