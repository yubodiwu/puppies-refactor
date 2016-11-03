'use strict';
// jshint esversion: 6
// jshint devel: true
// jshin node: true

var express = require('express');
var router = express.Router();
var puppiesRoute = require(`./puppiesRoute`);
var puppies = require(`../app`).puppies;

/* GET home page. */
router.get('/about', function(req, res) {
    res.render(`about`);
});

router.get(`/contact`, function(req, res) {
    res.render(`contact`);
});

router.get(`/puppies/new`, function(req, res) {
    res.render(`new`);
});

router.use(`/puppies`, puppiesRoute);

router.get(`/`, function(req, res) {
    res.send(puppies);
});

module.exports = router;
