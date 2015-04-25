/**
 * Created by Tommz on 20/04/15.
 */



var mongoose = require('mongoose')
    , Schema = mongoose.Schema;


//Structure
var CountriesScheme = new Schema({
    twoLetterCode: {type: String, required: true, index: {unique: true}},
    name: {type: String, required: true, index: {unique: true}},
    community: {type: Schema.ObjectId, ref: 'communities'}
});


// Exporting
module.exports = mongoose.model('countries', CountriesScheme);


