/**
 * Created by Tommz on 20/04/15.
 */

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;


var AssociationsSchema = new Schema({

    // essential
    name: {type: String, required: true},
    country: {type: Schema.ObjectId, ref: 'countries'},
    members: {type: Schema.ObjectId, ref: 'members'},
    // TODO allow login

    // info
    contactPerson: {type: Schema.ObjectId, ref: 'members'},
    contactEmail: String,
    contactPhone: String,
    website: String,

    // stats
    dateLastLogin: Date,
    dateRegistered: {type: Date, default: Date.now()}
});