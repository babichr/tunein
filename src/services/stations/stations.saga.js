import { put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";

import { urlLocations } from "../../routes";
import { isUrlMatch } from "../router/router.utils";

import {
  GET_STATIONS,
  GET_STATIONS_FAILURE,
  GET_STATIONS_SUCCESS
} from "./stations.action";
import { getStationsRequest } from "./stations.api";
import { stationsSelector } from "./stations.selector";

function* getStationsOnLocationsChange() {
  try {
    const stations = yield select(stationsSelector);
    if (!stations.length) {
      yield put({ type: GET_STATIONS });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchStations() {
  try {
    const { data, status } = yield getStationsRequest();
    if (status === 200) {
      yield put({
        type: GET_STATIONS_SUCCESS,
        payload: data.data
      });
    } else {
      yield put({
        type: GET_STATIONS_FAILURE
      });
    }
  } catch (error) {
    yield put({ type: GET_STATIONS_FAILURE });
    console.log(error);
  }
}

export default function* stationsSaga() {
  yield takeEvery(LOCATION_CHANGE, getStationsOnLocationsChange);
  yield takeLatest(GET_STATIONS, fetchStations);
}
