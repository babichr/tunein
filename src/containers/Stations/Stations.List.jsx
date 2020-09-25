import React from 'react';
import StationsItem from "./Stations.Item";

const StationsList = ({ stations = [] }) => {
    return (
        <div className="row" >
            { stations?.map(station => (
                <StationsItem key={station.id} station={station} />
            )) }
        </div>
    )
};

export default StationsList;