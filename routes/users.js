var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json([{user: 'Adam', job: 'Global Security'}, {user: 'Chris', job: 'Blesser of Images'}, {user: 'Edwin Caro', job: 'Support Engineer'}]); 
});

module.exports = router;
