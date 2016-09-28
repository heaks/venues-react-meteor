import React, { Component, PropTypes} from 'react';

export default class Marker extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <img{...this.props.image}/>
            </div>
        )
    }
}

Marker.defaultProps = {
    image: {
        src : "/map_marker_1.png",
        height: '20px',
        width: '12px'
    },
    style: {
        cursor: 'pointer',
        position: 'absolute',
        width: 20,
        height: 20
    }
};