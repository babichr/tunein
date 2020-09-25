import { GET_STATIONS_SUCCESS } from "./stations.action";
import initialState from "../../store/initialState";

export default (state = initialState.stations, action) => {
  switch (action.type) {
    case GET_STATIONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
