const express = require('express');
const path = require('path');
const hanspell = require('hanspell');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));

let sentence;
let checkingSentence;

app.route('/')
  .get((req, res) => {
    res.render('index', {sentence, checkingSentence});
  })
  .post(async (req, res) => {
    sentence = req.body.sentence;
    spellCheck(sentence);
    console.log(checkingSentence);
    res.render('index', {sentence, checkingSentence});
  })


app.listen(8000, () => {
  console.log('server start');
});

function spellCheck(spell) {
  const data = function (v) {
    checkingSentence = v;
  }
  const end = function () {
    console.log('// check ends');
  };
  const error = function (err) {
    console.error('// error: ' + err);
  };

  hanspell.spellCheckByPNU(spell, 6000, data, end, error);

}
