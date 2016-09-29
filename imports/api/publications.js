import { Meteor } from 'meteor/meteor';
import { Queries } from './queries';

Meteor.publish('queries', ()=> {
    return Queries.find()
});