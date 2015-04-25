/**
 * Created by Tommz on 21/04/15.
 */

var express = require('express')
  , router = express.Router()
  , Categories = require('../../../models/categories');



router.get('/:communityId', function(req, res){
  Categories.find({community:req.params.communityId}, {name: true}, function(err, categories){
    res.send(categories);
  })
});







module.exports = router;