import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './components/pages/signIn';
import SignUp from './components/pages/signUp';
import Profile from './components/pages/profile/profile';
import './App.css';

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
          <Route exact path="/profile/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
