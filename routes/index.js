var express = require('express')
    , router = express.Router();



// API loading - change this to subdomain!
router.use('/api', require('./api'));


// routes loading
//router.use('/users', require('./users'))



router.get('/', function(req, res) {
    console.log(req.getLocale());
    res.render('index');
})

module.exports = router;