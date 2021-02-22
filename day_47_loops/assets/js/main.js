//For Loops
//for(statement1,statement2,statement3){
// do Something
//}
//for(start/before,condition,step/after){
// do Something
//}

//
// 1
// 2
// 3
// 4
// 5
// 6
for (let i = 1; i < 7; i++) {
    console.log(i);
}
// 1-100
//1+2+3+..+99+100
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i

}
console.log(sum)
//Aufgabe 1: 8 stars
// ********
// ********
// ********
// ********
// ********

for (let i = 0; i < 5; i++) {
    console.log('********')
}
// Aufgabe 2:
//*
//** 
//*** 
//****
//*****
//******
let tree2 = '';
for (let j = 0; j < 6; j++) {
    tree2 += "*"
    console.log(tree2)
}
//Aufgabe-3
//5
//6
//7
//8
//9

for (let k = 5; k <= 9; k++) {
    console.log(k)
}
//Aufgabe-4
//50
//49
//48
//47
//46
//45
for (let i = 50; i >= 45; i--) {
    console.log(i);
}

//Aufgabe-5
// ************************************************
// ************************************************
// ************************************************
// ************************************************
for (let i = 0; i < 4; i++) {
    // console.log('*')
    let display = ""
    for (let j = 0; j < 10; j++) {
        display += '*'
    }
    console.log(display)
}
let step = 0
for (; step < 3;) {
    console.log(step)
    step++
}
for (let step = 0; step < 3; step++) {
    console.log(step)
}

//Iterable:
//Arrays,Strings,Objects
//for(start;condition;itteration){
//     do something
// }
// for(__of__){
//
// }
//for (__in__){
//
// }
console.log('%cBREAK_____________________BREAK', 'color:tomato');
let country = ['france', 'germany', 'spain']
// FRANCE
// GERMANY
// SPAIN
for (let i = 0; i < country.length; i++) {
    console.log(i)
    console.log(country[i].toUpperCase())
}

// France
// Germany
// Spain
for (let i = 0; i < country.length; i++) {
    console.log(i)
    console.log(country[i].charAt(0).toUpperCase() + country[i].slice(1))
}

// for of
// 
let numbers = [0, 4, 5, 6, 2]
for (let i of numbers) {
    console.log(i)
}
let text = "text"
for (let i of text) {
    console.log(i)
}

// input
//[10,30,20]
//20
//60
//40
// forOf
// forLoop
// forEach
let numbers2 = [10, 30, 20]
console.log('%c forLoop', 'color:tomato')
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i] * 2)
}
console.log('%c forOf', 'color:tomato')
for (let i of numbers2) {
    console.log(i * 2)
}
console.log('%c forEach', 'color:tomato')
numbers2.forEach(x => console.log(x * 2))

// break statement
// continue statement
console.log('%c break', 'color:tomato')
for (let i = 0; i <= 10; i++) {

    if (i == 5) {
        break;
    }
    console.log(i)
}
console.log('%c continue', 'color:tomato')
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i)
}
// while Loop
//while(conditon){
//     do something
// }
console.log('%c While-loop', 'color:tomato')
let index = 0
while (index < 5) {

    console.log(index)
    index++
}
//[france,germany,spain]
//FRANCE
//GERMANY
//SPAIN
let indexCountry = 0
while (indexCountry < country.length) {
    console.log(country[indexCountry].toUpperCase())
    indexCountry++
}
// Do-While loop
let index2 = 0
do {
    console.log(index2)
    index2++
} while (index2 <= 1)

//write a loop which prompt for a number greater than 100. if the user enters another numbers ask them again
// let numPrompt
// do {
//     numPrompt = prompt("give a number greater than 100")
// } while (Number(numPrompt) <= 100)
// console.log(Number(numPrompt))