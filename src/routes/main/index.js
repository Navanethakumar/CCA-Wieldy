import React from "react";
import { Route, Switch } from "react-router-dom";
import Widgets from "./Widgets";
import Metrics from "./Metrics";
import Dashboard from "./dashboard";
import Layouts from "./Layouts";
import asyncComponent from "../../util/asyncComponent";
import Crypto from "./dashboard/Crypto";

const Main = ({ match }) => (
  <Switch>
    <Route path={`/dashboard`} component={Crypto} />
    {/* <Route path={`${match.url}/widgets`} component={Widgets}/>
    <Route path={`${match.url}/metrics`} component={Metrics}/>
    <Route path={`${match.url}/layouts`} component={Layouts}/>
    <Route path={`${match.url}/algolia`} component={asyncComponent(() => import('../algolia'))}/> */}
  </Switch>
);

export default Main;
