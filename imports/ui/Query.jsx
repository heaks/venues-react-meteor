import React, { Component, PropTypes } from 'react';

export default class Query extends Component {
    render() {
        return(
            <tr>
                <td>{this.props.query.request}</td>
                <td>{this.props.query.searchPoint.lat} {this.props.query.searchPoint.long}</td>
                <td>{this.props.query.radius} km</td>
            </tr>
        )
    }
}

Query.propTypes = {
  query: PropTypes.object.isRequired,
};
