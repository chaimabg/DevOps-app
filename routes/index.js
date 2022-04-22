var express = require('express');
var router = express.Router();
var app = require('app');
const port = 3000;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.listen(port, ()=>{
  console.log(`app listening on port ${port}`);
})
module.exports = router;
