// JS Timing Events

console.log(window);
// setTimeout(function,millisekunden, arg1, arg2...)

//Schreibweise1:
// setTimeout(function myFunction() {
//   console.log("start in 3 sec");
//   alert("Hello World");
// }, 3000);

//Mit Argumenten
// setTimeout(
//   function myFunction(greet, name) {
//     alert(`${greet} ${name}`);
//   },
//   3000,
//   "Hello",
//   "World"
// );

//Schreibweise2:

// function myFunction() {
//   alert("Hello World");
// }

//Arrow function

// let myFunction = () => {
//   alert("Hello World");
// };

// function myFunction(greet, name) {
//   alert(`${greet} ${name}`);
// }

// let clearMessage = setTimeout(myFunction, 3000, "Hello", "World");

//*******************

//let timerId = setTimeout(...)
//clearTimeout(timerId)

// document.querySelector("button").addEventListener("click", () => {
//   clearTimeout(clearMessage);
// });

// const div = document.querySelector("div");
// let leftPos = 0;

// function animateDiv() {
//   leftPos += 10;
//   div.style.left = `${leftPos}px`;
//   if (leftPos < 300) {
//     setTimeout(animateDiv, 1000);
//   }
// }
// animateDiv();

//***********

//setInterval(function,millisekunden)

// function myTimer() {
//   let d = new Date();
//   console.log(d.toLocaleTimeString());
// }
// let timerId = setInterval(myTimer, 1000);

// document.querySelector("button").addEventListener("click", () => {
//   console.log("clear interval");
//   clearInterval(timerId);
// });

const stopTrain = document.getElementById("stopTrain");
const moveTrain = document.getElementById("moveTrain");
const train = document.querySelector("img");

let leftPos = 0;
let clearTrain;

moveTrain.addEventListener("click", () => {
  let animateTrain = () => {
    leftPos += 10;
    console.log("move train");
    train.style.left = `${leftPos}px`;
    console.log(leftPos);
  };
  clearTrain = setInterval(animateTrain, 100);
});

stopTrain.addEventListener("click", () => {
  console.log("stop train");
  clearInterval(clearTrain);
});
