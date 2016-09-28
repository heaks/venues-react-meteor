import React, { Component, PropTypes } from 'react';
import { exportCSV } from '/imports/api/methods';

import Venue from './Venue';

export default class Results extends Component {
    handleClick() {
        const fileName = 'my_venues.csv';
        const venues = this.props.allVenues.map((venue)=>{
            return {
                name: venue.name,
                address: venue.location.address,
                city: venue.location.city,
                country: venue.location.cc
            }
        });
        //TODO: venues array doesn't work for some reason, allVenues does work
        exportCSV.call({data: this.props.allVenues}, (err, res) => {
            if(err) console.log(err);
            if(res) {
                let blob = new Blob([res], {type: "text/plain;charset=utf-8"});
                saveAs(blob, fileName);
            }
        });
    }
    renderVenues() {
        return this.props.allVenues.map((venue) =>
            <Venue name={venue.name} key={venue.id} location={venue.location}/>
        );
    }
    render() {
        return (
            <div style={{marginTop:'50px'}}>
                <div className="row">
                    <div className="col-md-9">
                        <h2>Results</h2>

                        <ul>
                            {this.renderVenues()}
                        </ul>
                    </div>
                    <div className="col-md-3 pull-right">
                        {this.props.allVenues.length ?
                            <button onClick={this.handleClick.bind(this)}>Export CSV</button> : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}