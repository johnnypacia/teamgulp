var express    = require('express');
var app        = express();
var fs         = require('fs');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(3000);
