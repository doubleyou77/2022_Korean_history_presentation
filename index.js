const express = require('express');

const app = express();

const home = require('./src/routes/home');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + '/src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', home);

module.exports = app;