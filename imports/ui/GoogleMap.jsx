import React, { Component, PropTypes } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';

export default GoogleMapInstance = React.createClass({
    getInitialState: function () {
        return {
            apiKey: 'AIzaSyDTuCROZWUGNj7BcNQbWNzcIhbG4mqW0D8'
        }
    },
    onChange: function (center, zoom, bounds, marginBounds) {
        this.props.currentCoordinates(center, zoom)
    },
    render: function () {
        let markersData = this.props.data.searchResults.map((venue, index)=>{
            return (
                <Marker name={venue.name} key={venue.id} lng={venue.location.lng} lat={venue.location.lat} index={index}/>
            )
        });
        return (
            <div style={{width: '700px', height:'400px'}}>
                <h2>Google Map</h2>
                <GoogleMap
                    onChange= {this.onChange}
                    bootstrapURLKeys={{
                        key: this.state.apiKey
                    }}
                    center= {this.props.data.center}
                    zoom= {this.props.data.zoom}
                    >
                    {markersData}
                </GoogleMap>
            </div>
        )
    }
})
