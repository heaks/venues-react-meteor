import React, { Component, PropTypes } from 'react';

export default class Query extends Component {
    handleClick() {
        this.props.removeQuery(this.props.query._id)
    }
    render() {
        return(
            <tr>
                <td>
                    <button onClick={this.handleClick.bind(this)}>x</button>
                    {this.props.query.request}
                </td>
                <td>{this.props.query.searchPoint.lat} {this.props.query.searchPoint.long}</td>
                <td>{this.props.query.radius} km</td>
                <td>{this.props.query.time}</td>
            </tr>
        )
    }
}

Query.propTypes = {
  query: PropTypes.object.isRequired,
};
