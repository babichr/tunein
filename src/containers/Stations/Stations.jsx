import React, { useState } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import {stationsSelector} from "../../services/stations/stations.selector";
import StationsList from "./Stations.List";
import { STATIONS_SORT_OPTIONS, SORT_DIRECTION } from './Stations.constants'
import StationsSorters from "./Stations.Sorter";
import {filterStationsByTags, sortStations} from './Stations.utils'

const Stations = ({ stations, match: { params: { tag } = {} } }) => {

    const [ param, setSortBy ] = useState(STATIONS_SORT_OPTIONS.Reliability.value);
    const [ sortDirection, setSortDirection ] = useState(SORT_DIRECTION.ASC.value);

    const preparedStations = () => {
        return filterStationsByTags(sortStations(stations, param, sortDirection), tag);
    };

    return (
        <div className="container" >
            <StationsSorters setSortBy={setSortBy} setSortDirection={setSortDirection} />
            <StationsList stations={preparedStations()} />
        </div>
    )
};

export default connect(
    createStructuredSelector({
        stations: stationsSelector
    })
)(Stations);