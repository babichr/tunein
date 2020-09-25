import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { history } from "../routes";
import stationsReducer from "../services/stations/stations.reducer";

export default combineReducers({
  stations: stationsReducer,
  router: connectRouter(history)
});
