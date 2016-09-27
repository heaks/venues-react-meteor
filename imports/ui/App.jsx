import React, { Component, PropTypes } from 'react';

import QueriesList from './QueriesList';
import GoogleMapInstance from './GoogleMap';
import Results from './Results';
import SearchForm from './SearchForm';

export default App = React.createClass({
    getInitialState() {
        return {
            center: {lat: 49.834388, lng: 24.025106},
            zoom: 11,
            searchRadius: 3000
        }
    },
    currentCoordinates(center, zoom=11) {
        console.log('current coordinates ', center, zoom);
        // this.setState({center: center, zoom: zoom});
        console.log('new state: ', this.state);
    },
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Venues Search</h1>
                    <SearchForm />
                    <QueriesList />
                    <GoogleMapInstance currentCoordinates={this.currentCoordinates} data={this.state}/>
                    <Results/>
                </header>

            </div>
        )
    }
});