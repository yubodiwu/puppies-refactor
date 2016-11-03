'use strict';
// jshint esversion: 6
// jshint devel: true
// jshin node: true

var puppies = [];
var id = 1;

class Puppy {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = id;
        id++;

        puppies.push({
            name: this.name,
            age: this.age,
            id: this.id
        });
    }
}

module.exports = {
    Puppy,
    puppies
};
