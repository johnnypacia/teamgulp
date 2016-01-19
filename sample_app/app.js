var express    = require('express');
var app        = express();
var fs         = require('fs');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

app.use(urlencodedBodyParser);



app.get('/', function(req, res) {
  // read the index_text.json file
  // parse that json string
  // send it back to the client
  fs.readFile('index_text.json', 'utf8',function(error, data){
    if (!error) {
      var textObject = JSON.parse(data);
      var responseText = textObject.text;
      res.send(responseText);
    }
  });
  // res.send('hello world.');
});

app.get('/randomword', function(req, res) {
  // read the words.json file
  // parse the data from the json
  // select a random word
  // send back the random word
  fs.readFile('words.json', 'utf8', function(error, data) {
    var words = JSON.parse(data);
    res.send(words[Math.floor(Math.random() * words.length)])
  });
});

app.get('/randomword/new', function(req, res) {
  res.render('new');
});

app.post('/randomword', function(req, res) {
  var body = req.body;

  fs.readFile('words.json', 'utf8', function(error, data) {
    // save new word to our words.json file
      // push the new word to the words array

    var words = JSON.parse(data);
    var newWord = body.rando;

    words.push(newWord);

    var wordsJson = JSON.stringify(words);

    fs.writeFile('words.json', wordsJson, function(error){
      // do something like redirect
      if (!error) {
        res.redirect('/');
      } else {
        res.redirect('/');
      }
    });
  });



});

app.get('/user', function(req, res) {
  res.render('user', { name: 'Austin', sex: 'Yes, please.' });
});



app.listen(3000);
