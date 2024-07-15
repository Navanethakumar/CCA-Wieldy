import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const Dashboard = ({ match }) => (
  <Switch>
    {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/crm`}/>
    <Route path={`${match.url}/crm`} component={asyncComponent(() => import('./CRM/index'))}/> */}
    {/* <Route exact path={`/dashboard/crypto`} component={</>}/> */}
    {/* <Route path={`${match.url}/listing`} component={asyncComponent(() => import('./Listing/index'))}/> */}
  </Switch>
);

export default Dashboard;
