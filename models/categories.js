/**
 * Created by Tommz on 20/04/15.
 */



var mongoose = require('mongoose')
    , Schema = mongoose.Schema;


//Structure
var CategoriesScheme = new Schema({
    name: {type: String, required: true},
    community: {type: Schema.ObjectId, ref: 'communities'}
});


// Exporting
module.exports = mongoose.model('categories', CategoriesScheme);