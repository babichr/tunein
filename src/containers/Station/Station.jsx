import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from 'react-router-dom';

import {stationSelector} from "../../services/stations/stations.selector";
import "./Station.styles.css"
import {urlLocations} from "../../routes";


const Station = ({ station: { name, description, imgUrl, reliability, popularity, streamUrl } = {} }) => {
    return <div className="container" >
        <Link to={urlLocations.stations} >
            <div className="btn">Back</div>
        </Link>
        <div className="row">
            <div className="col-lg-4">
                <h1>{ name }</h1>
                <img src={imgUrl} alt=""/>
                <p>
                    { description }
                </p>
                <b>Reliability:  { reliability }</b>
                <br/>
                <b>Popularity: { popularity }</b>
                <audio autoPlay controls src={streamUrl}/>
            </div>
        </div>
    </div>
};

export default connect(
    createStructuredSelector({
        station: (state, { match: { params: { id } = {} } }) =>
            stationSelector(state, id)
    })
)(Station);