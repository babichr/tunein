import React from 'react';
import { Link } from "react-router-dom";

import './Stations.styles.css';
import { urlLocations } from "../../routes";

const StationsItem = ({ station }) => {
    return (
        <div className="col-lg-4">
            <div className="card" >
                <div className="card-header">
                    <Link to={`${urlLocations.station}/${station.id}`} >
                        <b>{ station.name }</b>
                    </Link>
                </div>
                <div className="card-body">
                    <img width={100} src={station.imgUrl} alt=""/>
                    <div className="desc">
                        { station.description }
                    </div>
                    <div className="desc">
                        <b>Reliability:  { station.reliability }</b>
                    </div>
                    <div className="desc">
                        <b>Popularity: { station.popularity }</b>
                    </div>
                    { station.tags.map(tag => (
                        <Link key={tag} to={`${urlLocations.stations}/${tag}`} >
                            <div className="badge badge-primary">
                                { tag }
                            </div>
                        </Link>
                    )) }

                </div>
            </div>
        </div>
    )
};

export default StationsItem;