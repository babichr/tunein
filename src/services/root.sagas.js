import { all } from "redux-saga/effects";

import stationsSaga from "../services/stations/stations.saga";

export default function* rootSaga() {
  yield all([stationsSaga()]);
}
