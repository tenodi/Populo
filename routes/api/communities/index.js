/**
 * Created by Tommz on 20/04/15.
 */

var express = require('express')
  , router = express.Router()
  , Communities = require('../../../models/communities');



router.get('/', function(req, res){
  Communities.find({}, {name: true}, function(err, communities){
    res.send(communities);
  })
});







module.exports = router;