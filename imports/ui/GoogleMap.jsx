import React, { Component, PropTypes } from 'react';
import GoogleMap from 'google-map-react'

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
        console.log('props: ', this.props);
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
                />
            </div>
        )
    }
})

// export default class GoogleMapInstance extends Component {
//     constructor(props) {
//         super(props);
//     }
//     componentDidMount() {
//         console.log('Google Map mounted');
//
//     }
//     render() {
//         return (
//             <div style={{width: '700px', height:'400px'}}>
//                 <h2>Google Map</h2>
//                 <GoogleMap
//                     center= {this.props.center}
//                     zoom= {this.props.zoom}
//                 />
//             </div>
//         )
//     }
// }
//
// GoogleMapInstance.defaultProps = {
//     center: {lat: 49.510000, lng: 24.010000},
//     zoom: 9,
//     greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
// };
