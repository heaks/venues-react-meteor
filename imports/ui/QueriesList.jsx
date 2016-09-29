import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Queries } from '../api/queries';

import Query from './Query';


export default class QueriesList extends Component {
    renderQueries() {
        return this.props.queries.map((query) => (
            <Query key={query._id} query={query}/>
        ));
    }
    render() {
        return (
            <div>
                <h2>Queries</h2>
                <table className="queries-list table-stripped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Request</th>
                        <th>Search point</th>
                        <th>Radius</th>
                        <th>Search time</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderQueries()}
                    </tbody>
                </table>
            </div>
        )
    }
}

QueriesList.propTypes = {
    queries: PropTypes.array.isRequired,
};

export default createContainer(() => {
    Meteor.subscribe('queries');
    return {
        queries: Queries.find({owner: Meteor.userId()}).fetch(),
    };
}, QueriesList);