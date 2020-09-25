import { SORT_DIRECTION } from "./Stations.constants";

export const sortStations = (stations, param, sortDirection) =>
  !param
    ? stations
    : stations.sort(
        (stationA, stationB) =>
          sortDirection === SORT_DIRECTION.ASC.value
            ? stationA[param] - stationB[param]
            : stationB[param] - stationA[param]
      );

export const filterStationsByTags = (stations, tag) => {
  if (!tag) return stations;
  return stations.filter(station => station.tags.includes(tag));
};
