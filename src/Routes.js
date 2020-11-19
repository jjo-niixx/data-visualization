import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  );
}
