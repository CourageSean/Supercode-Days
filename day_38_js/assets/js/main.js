//var , let ,const
//String , Number, Boolean
var text = "Hello";
let isDone = true;
const PI = 3.14;

//Js Output
console.log(PI);
document.getElementById("result1").innerHTML = text;
document.write(text);
//alert(text)

//camelcase
//Interaction
// let myName = prompt('give your name')
// console.log(myName)
// let isCool = confirm('are you cool')
// console.log(isCool);

//String + number =string
//Number + String= string

//String*Number =Number

//functions
//Declaration
//Callings (trigger)

//Declaration
function myFunction() {
  console.log("hello world");
}

//Callings (trigger)
myFunction();

//

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function multiply() {
  console.log(typeof num1.value);
  document.getElementById("result2").innerHTML = num1.value * num2.value;
}
let twoName = "hi" + "ho";
let twoNumber = "11" + "2";
console.log(twoNumber);
//typeof

//1.1 Number
console.log(typeof 3);
//1.2 String
console.log(typeof "Hi");
//1.3 Boolean
console.log(typeof true);

//1.4 null
let box = null;
console.log(typeof box); //object:refrencing to an unexisting object
console.log(box);

//1.5 undefined
let unknown = undefined;
console.log(unknown);
console.log(typeof unknown);
let unknown2;
console.log(unknown2);
console.log(typeof unknown2);

//1.6 object
let arr = [0, 1, 4];
console.log(typeof arr);

//1.7 funnction

console.log(typeof alert);
console.log(multiply);
console.log(typeof multiply);

//NaN : not a number

const result3 = document.getElementById("result3");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");

function add() {
  //result3.innerHTML = (num3.value * 1) + (num4.value * 1)
  result3.innerHTML = Number(num3.value) + Number(num4.value);
}

//Types conversions
//String Conversion

let isDone2 = true;
isDone2 = String(isDone2); // 'true'
console.log(typeof isDone2);
console.log(isDone2);

let someNumber = 199;
someNumber = String(someNumber);
console.log(someNumber);
console.log(typeof someNumber);

//Number Conversion

let four = "4";
four = Number(four);
console.log(four);
console.log(typeof four);

console.log("---------");
let superman = "superman";
superman = Number(superman);
console.log(typeof superman); //number
console.log(superman); //NaN

//boolean Conversion
let number0 = 0;
number0 = Boolean(number0);
console.log(number0);
console.log(typeof number0);

let number1 = 1;
number1 = Boolean(number1);
console.log(number1);
console.log(typeof number1);
console.log("-----------");
let number2 = 2;
number2 = Boolean(number2);
console.log(number2);
console.log(typeof number2);

//arithmetics
//a+=b  => a=a+b
//a-=b  => a=a-b
//a*=b => a=a*b
//a/=b => a=a/b
//i++ => i=i+1
//i-- => i=i-1

//Comparaison
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.log(false === Boolean("0")); //true
console.log(3 < 3); //false
console.log(3 <= 3); // true
console.log(true !== 0); //true
console.log(true != 0); //true
console.log(false != 0); //false
console.log(Number("hello world") == typeof 2); //false
console.log(typeof Number("hello world") === typeof 2);

console.log(document.getElementById("result1")); // HTML Element
console.log(document.getElementById("result1").innerHTML); //content Html element

document.getElementById("result1").style.textAlign = "center";
document.getElementById("result1").style.border = "1px solid #000";
document.getElementById("result1").style.padding = "10px";
document.getElementById("result1").style.display = "inline-block";

const bild = document.getElementById("bild");
console.log(bild); //html element
console.log(bild.id); // id html element
console.log(bild.src); //src Html element
bild.src = "https://unsplash.it/300";
// bild.id = "bild2"
// const bild2 = document.getElementById('bild2')
// console.log(bild2)

console.log(bild.classList);
console.log(bild.className);

//classList : add, remove, toggle
//add

bild.classList.add("block");
bild.classList.add("center");
//bild.classList.add("center","block")
console.log(bild.classList);

//remove
bild.classList.remove("border");
console.log(bild.classList);
// bild.className = ""
// console.log(bild.classList)
function showOrHide() {
  bild.classList.toggle("hide");
}

//random number
//Math.random()  0-1
console.log(Math.random()); //x>=0   x<1
console.log(Math.random() * 10); // x>=0 || x<10
console.log(Math.random() * 100); // x>=0 || x<100

//Math.floor(x)

console.log(Math.floor(2.5));
console.log(Math.floor(Math.random() * 10)); // 0 -1-2-...9

let a = ["apple", "banana", "kiwi"];
console.log("🚀 ~ file: main.js ~ line 205 ~ a", a);
console.log("🚀 ~ file: main.js ~ line 205 ~ a", a);
