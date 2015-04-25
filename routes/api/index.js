/**
 * Created by Tommz on 20/04/15.
 */


var express = require('express')
    , router = express.Router();


// loading other routes
router.use('/communities', require('./communities'))
router.use('/categories', require('./categories'))







module.exports = router;