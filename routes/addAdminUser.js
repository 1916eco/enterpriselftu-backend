var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  //https://www.youtube.com/watch?v=HHg2jA0OCBA

  const Data = new AdminUser({
    userId:'fFfVhFTEgDbsd1IKpK2hsMaE01u1',
    isAdmin:true
})
Data.save()
res.end("Worked")
  
});

module.exports = router;