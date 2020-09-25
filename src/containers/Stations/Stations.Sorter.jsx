import React from "react";
import { Link } from 'react-router-dom';

import {SORT_DIRECTION, STATIONS_SORT_OPTIONS} from "./Stations.constants";
import {urlLocations} from "../../routes";

const StationsSorters = ({ setSortBy, setSortDirection }) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h3>Sort by </h3>
                    <select className="form-control" onChange={e => setSortBy(e.target.value)} >
                        { Object.values(STATIONS_SORT_OPTIONS).map(option => (
                            <option key={option.value} value={option.value}>{option.title}</option>
                        )) }
                    </select>
                </div>
                <div className="col-lg-6">
                    <h3>Directions: </h3>
                    <select className="form-control" onChange={e => setSortDirection(e.target.value)} >
                        { Object.values(SORT_DIRECTION).map(option => (
                            <option key={option.value} value={option.value}>{option.title}</option>
                        )) }
                    </select>
                </div>
            </div>
            <Link to={urlLocations.stations} >
                <div className="btn">Reset tags filter</div>
            </Link>
            <hr/>
        </>
    )
};

export default StationsSorters;