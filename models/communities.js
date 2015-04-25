/**
 * Created by Tommz on 20/04/15.
 */


var mongoose = require('mongoose')
    , Schema = mongoose.Schema;


//Structure
var CommunitiesScheme = new Schema({
    name: {type: String, required: true, index: {unique: true}},
    country: {type: Schema.ObjectId, ref: 'countries'},
    categories: [{type: Schema.ObjectId, ref: 'categories'}]
});


// Exporting
module.exports = mongoose.model('communities', CommunitiesScheme);