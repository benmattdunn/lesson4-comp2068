var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  var users = [ 'baisen', 'keith', 'jamie']; //set up an array with a couple names

  res.render('users', {title:'users',
  users: users});
});

//remember models.export makes it publicly avaliable
module.exports = router;
