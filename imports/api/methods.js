import 'meteor/lfergon:exportcsv';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Queries } from '/imports/api/queries';
import { Meteor } from 'meteor/meteor';

export const exportCSV = new ValidatedMethod({
    name: 'export.csv',
    validate: new SimpleSchema({
        data: { type: [Object], blackbox: true }
    }).validator(),
    run(venues) {
        const headling = true;
        const delimiter = '; ';
        return exportcsv.exportToCSV(venues.data, headling, delimiter);
    }
});

export const insertQuery = new ValidatedMethod({
    name: 'insert.query',
    validate: new SimpleSchema({
        request: {type: String},
        searchPoint: {type: Object},
        'searchPoint.lat': {type: String},
        'searchPoint.lng': {type: String},
        radius: {type: String}
    }).validator(),
    run(document) {
        document.time = (new Date()).toUTCString();
        document.owner = Meteor.userId();
        Queries.insert(document);
    }
});

export const removeQuery = new ValidatedMethod({
    name: 'delete.query',
    validate: new SimpleSchema({
        _id: {type: String}
    }).validator(),
    run({ _id }) {
        let query = Queries.findOne({_id: _id});
        if(query) {
            Queries.remove({_id: _id});
        }
    }
});