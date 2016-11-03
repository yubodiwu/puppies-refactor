'use strict';
// jshint esversion: 6
// jshint devel: true
// jshin node: true

const PORT = 3000;
var express = require('express');
var path = require('path');
var Puppy = require(`./models/Puppy`);
var routes = require('./routes/index');

var app = express();
var puppies = require(`./models/Puppy`).puppies;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(`/public`, express.static(`public`));

app.get(`/`, function(req, res) {
    res.send(puppies)
});

app.use('/', routes);

app.listen(PORT, function() {
    console.log(`listening on ${PORT}`);
});

module.exports = {
    app,
    puppies
};
