import React, { Component, PropTypes } from 'react';
import { removeQuery } from '/imports/api/methods';

export default class Query extends Component {
    handleClick() {
        removeQuery.call({
            _id: this.props.query._id
        })
    }
    render() {
        return(
            <tr>
                <td>
                    <button onClick={this.handleClick.bind(this)}>x</button>
                    {this.props.query.request}
                </td>
                <td>{this.props.query.searchPoint.lat} {this.props.query.searchPoint.lng}</td>
                <td>{this.props.query.radius} km</td>
                <td>{this.props.query.time}</td>
            </tr>
        )
    }
}

Query.propTypes = {
  query: PropTypes.object.isRequired,
};
