import React, { Component, PropTypes} from 'react';

export default class Venue extends Component {
    render() {
        return (
            <li><b>{this.props.name}</b> {this.props.location.address} {this.props.location.city} {this.props.location.cc}</li>
        )
    }
}