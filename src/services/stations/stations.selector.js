export const stationsSelector = state => state.stations;

export const stationSelector = (state, id) =>
  state.stations.find(station => station.id === id);
