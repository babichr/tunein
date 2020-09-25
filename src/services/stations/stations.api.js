import instance from "../root.api";

export const getStationsRequest = params =>
  instance.get("/stations.json", {
    params
  });
