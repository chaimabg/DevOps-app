var express = require('express');
var router = express.Router();
var app = express();
const port = 3000;
/* GET home page. */
exports.helloWord = function () {
  return("hello world");
}
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.listen(port, ()=>{
  console.log(`app listening on port ${port}`);
})
module.exports = router;
