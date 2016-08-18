import React, { Component } from 'react';
import { Queries } from '../api/queries';

export default class SearchForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const text = this.refs.searchRequest.value;

        Queries.insert({
            request: text,
            searchPoint: {lat: '49.5535', long: '25.5948'},
            radius: 5
        });

        this.refs.searchForm.reset();
    }

    render() {
        return (
            <form ref="searchForm" className="search-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref="searchRequest"
                    placeholder="enter your request"
                />
            </form>
        )
    }
}