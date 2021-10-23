import React from "react";

import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import GetUsers from "./pages/GetUsers";
import NewUser from "./pages/NewUser";
import UserProfile from "./pages/UserProfile";
import EditUserProfile from "./pages/EditUserProfile";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      {/* <ul>
        <li>
          <Link to="/dashboard/users">List Users</Link>
        </li>
        <li>
          <Link to="/dashboard/create-user">Create New User</Link>
        </li>
        <li>
          <Link to="/dashboard/view-profile/:id">View UserProfile</Link>
        </li>
        <li>
          <Link to="/dashboard/editProfile/:id">Edit UserData</Link>
        </li>
      </ul> */}
      <Switch>
        <Route path="/dashboard/all-users">
          <GetUsers />
        </Route>
        <Route path="/dashboard/create-user">
          <NewUser />
        </Route>
        <Route path="/dashboard/view-profile/:id">
          <UserProfile />
        </Route>
        <Route path="/dashboard/editProfile/:id">
          <EditUserProfile />
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard"></Redirect>
        </Route>
        <Route path="/dashboard">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
