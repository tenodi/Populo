/**
 * Created by Tommz on 12/4/15.
 */


var mongoose = require('mongoose')
    , Schema = mongoose.Schema;


//Structure
var UsersScheme = new Schema({

    // essential
    email: {type : String, required: true, index: { unique: true }},
    password: {type: String, required: true},
    role: {type: String, required: true},

    // info
    firstName: {type: String},
    lastName: {type: String},
    phone: String,
    associations: {type: Schema.ObjectId, ref: 'associations'},

    // stats
    dateLastLogin: Date,
    dateRegistered: {type: Date, default: Date.now()}

    // specialisations:
    //      manager
    // TODO add manager specific properties
});


// Exporting
module.exports = mongoose.model('users', UsersScheme);


