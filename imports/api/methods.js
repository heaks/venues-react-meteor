import { Meteor } from 'meteor/meteor';
import 'meteor/lfergon:exportcsv';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

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