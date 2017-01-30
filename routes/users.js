var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
    res.send('respond with a resource');
});

// POST method route
router.post('/', function (req, res) {
    // res.send('respond with a resource');
    console.log(req.body);
});

router.post('/quotes', function (req, res) {

});

module.exports = router;
