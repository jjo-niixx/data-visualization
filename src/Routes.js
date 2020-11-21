import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Search from "./Pages/Search";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}
