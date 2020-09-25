import React from "react";
import { Switch, Route } from "react-router";
import { createBrowserHistory } from "history";

import Stations from "../containers/Stations/Stations";
import Station from "../containers/Station/Station";

export const history = createBrowserHistory();

export const urlLocations = {
  root: "/",
  stationInfo: "/station/:id?",
  stationsTag: "/stations/:tag?",
  stations: "/stations",
  station: "/station"
};

export default () => (
  <>
    <Switch>
      <Route exact path={urlLocations.stationsTag} component={Stations} />
      <Route exact path={urlLocations.root} component={Stations} />
      <Route exact path={urlLocations.stationInfo} component={Station} />
      <Route path={"*"} component={() => <h1>404</h1>} />
    </Switch>
  </>
);
