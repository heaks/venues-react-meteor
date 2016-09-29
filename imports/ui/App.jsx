import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import QueriesList from './QueriesList';
import GoogleMapInstance from './GoogleMap';
import Results from './Results';
import SearchForm from './SearchForm';

export default App = React.createClass({
    getInitialState() {
        return {
            center: {lat: 49.834388, lng: 24.025106},
            zoom: 11,
            searchRadius: 3000,
            searchResults: []
        }
    },
    currentCoordinates(data) {
        let updatedRadius = Math.pow(2, (8 - data.zoom)) * 276890;
        this.setState({center: {lat: data.center.lat, lng:data.center.lng}, zoom: data.zoom, searchRadius: updatedRadius});
    },
    updateResults(result) {
        this.setState({searchResults: result.data.response.venues.map((venue)=>{
            return {
                id: venue.id,
                name: venue.name,
                location: venue.location
            }
        })});
    },
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Venues Search</h1>
                    <SearchForm data={this.state} updateResults={this.updateResults}/>
                    <QueriesList />
                    <GoogleMapInstance currentCoordinates={this.currentCoordinates} data={this.state}/>
                    <Results allVenues={this.state.searchResults}/>
                </header>

            </div>
        )
    }
});