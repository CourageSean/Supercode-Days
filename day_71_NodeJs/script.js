let data = require('./data')
let myArr = require('./data1')
// console.log(myArr)
let functions = require('./functions')
console.log('fun1', require('./functions1'))
let { greeting, sortArray, sortArrayNumbers } = require('./functions1')
const _ = require('lodash')
let arrNum = [23, 54, 454, 55, 1, 2]
// console.log('______*********______')
// let logIn = require('./logIn')
// console.log(logIn)
// logIn.logIn()
// console.log('______*********______')
console.log(_.sum(arrNum))
console.log('______Deconstruction______')
let { logIn } = require('./logIn')
logIn()
console.log('______*********______')
console.log(data)
console.log(functions)
// console.log(data.myLastName)
// console.log(data.myCities)


console.log('hello world')
let firstName = "superman"
let city = "NYC"
console.log(firstName, city)
// function greeting(firstName, city) {
//     console.log(`I am ${firstName} from ${city}`);
// }
functions.greeting(firstName, city) //functions.js

greeting(firstName, city) //functions1.js
// console.log(functions.sortArray(data.cities))
// console.log(myArr.sort(functions.sortArrayNumbers))
//ES6
// import React, { Component } from 'react';

//package 
//Js Syntax
var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "OO",
    T: " v "
}));



// console.log('----------------------')
// console.log(module)
// console.log('-----------Global Object-----------')
// console.log(global)

// global.setTimeout(() => {
//     console.log(0)
// }, 3000)

// setTimeout(() => {
//     console.log(0)
// }, 4000)


// console.log(__dirname)
// console.log(__filename)