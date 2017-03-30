import React from "react";
import List from "./RepoList.jsx";
import Search from "./RepoSearch.jsx";
import { Route } from "react-router-dom";

export default () => (
  <div>
    <h1>Github Repos</h1>
    <Route path="/:query?" component={Search}/>
    <List />
  </div>
);
