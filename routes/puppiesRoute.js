'use strict';
// jshint esversion: 6
// jshint devel: true
// jshin node: true

var app = require(`../app`)
var express = require(`express`);
var puppiesRoute = express.Router();
var puppyModel = require(`../models/Puppy`);
var Puppy = puppyModel.Puppy;
var puppies = puppyModel.puppies;

puppiesRoute.get(`/new`, function(req, res) {
    res.render(`new`);
});

puppiesRoute.get(`/`, function(req, res) {
    var puppy = new Puppy(req.query.name, req.query.age);
    res.redirect(`../`)
});

puppiesRoute.get(`/:id`, function(req, res) {
    for (let puppy of puppies) {
        if (Number(req.params.id) === puppy.id) {
            res.send(puppy);
        }
    }
});

module.exports = puppiesRoute;
