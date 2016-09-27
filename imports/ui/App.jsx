import React, { Component, PropTypes } from 'react';

import QueriesList from './QueriesList';
import GoogleMapInstance from './GoogleMap';
import Results from './Results';
import SearchForm from './SearchForm';

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Venues Search</h1>
                    <SearchForm />
                    <QueriesList />
                    <GoogleMapInstance />
                    <Results/>
                </header>

            </div>
        )
    }
}