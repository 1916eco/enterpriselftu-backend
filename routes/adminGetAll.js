var express = require('express');
const AdminUser = require('../Model/AdminUser');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log(req.query)
  const data = await AdminUser.find()
  if(data){
  return res.send(data).end()
  }
  else{
    res.send('')
  }
});

module.exports = router;