import React from 'react';
import { Queries } from '../api/queries';

const SearchForm = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        const text = this.refs.searchRequest.value;
        const data = this.props.data;

        Queries.insert({
            request: text,
            searchPoint: {lat: data.center.lat.toFixed(6), long: data.center.lng.toFixed(6)},
            radius: (data.searchRadius / 1000).toFixed(2),
            time: (new Date()).toUTCString()
        });

        let url = "https://api.foursquare.com/v2/venues/search?ll=" + data.center.lat + ', ' + data.center.lng +
            "&client_id=DGBXAQGXLY0IRU0FLP4GAFRR10VWVSWRD5I3SYBUVIEVA5PB" +
            "&client_secret=0E4RIEHZLCH5EMWHG0QSYS2WDTAURN0KSRI3WRITQ3X4MILM" +
            "&v=20160115&radius=" + data.searchRadius +
            "&locale=en" + "&query=" + text;

        HTTP.get(url, {}, (error, result) => {
            if(error) console.log(error);
            if(result) {
                this.props.updateResults(result);
            }
        });

        this.refs.searchForm.reset();
    },
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
});

export default SearchForm