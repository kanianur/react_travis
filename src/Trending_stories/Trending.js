import React, { Component } from 'react';
import './Trending.css';
import propTypes from 'prop-types';

const Trending =  props => {
    return(
        <div>
            <div className="media">
                <div className="media-left"><span className="numbering-circle sm">#{props.number}</span></div>
                <div className="media-body"><a href={props.url}>{props.title}</a></div>
            </div>
        </div>

    )
}

Trending.propTypes = {
    title: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    number: propTypes.string.isRequired
};

export default Trending