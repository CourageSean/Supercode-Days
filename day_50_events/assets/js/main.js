console.log("Good morning");
//Document object models: DOM
//

// Dom finding
const myDiv = document.getElementById("my-div");

//give back an array-like
//class name
const center = document.getElementsByClassName("center");
console.log(center);
//tag name
const div = document.getElementsByTagName("div");
console.log("div", div);
//name
const text = document.getElementsByName("text");
console.log(text);

//querySelector
//
const div1 = document.querySelector("div");
console.log(div1);
const div1Class = document.querySelector("section .hi");
console.log(div1Class);

//querySelectorAll
const divSection = document.querySelectorAll("section div");
console.log(divSection);

function change() {
  myDiv.style.background = "tomato";
  for (let i = 0; i < center.length; i++) {
    center[i].style.background = "tomato";
  }
  for (let i = 0; i < text.length; i++) {
    text[i].style.color = "tomato";
  }
}

//addEventListener(events,callback,options)
//events: click dbclick, mouseover, scroll....
myDiv.addEventListener("click", change);
myDiv.addEventListener("click", function () {
  console.log("hello world!!");
});
myDiv.addEventListener("click", () => {
  console.log("hello world 2!!");
});

//
// function generateRandom() {
//     return Math.floor(Math.random() * 255)
// }
// function debounce(func, wait = 1000, immediate = true) {
//     var timeout;
//     return function () {
//         var context = this, args = arguments;
//         var later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };

// function changebackground() {
//     document.body.style.background = `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`
// }
// document.body.addEventListener('mousemove', debounce(changebackground))
//     console.log('x', e.clientX)
//     console.log('y', e.clientY)
//     //document.body.style.background = `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`
//     document.body.style.background = `#${e.clientX}${e.clientY}`
//     // if (e.clientX)
// })
document.body.addEventListener("keydown", (e) => {
  console.log(e);
  switch (e.key.toLowerCase()) {
    case "g":
      document.body.style.background = "gold";
      break;
    case "t":
      document.body.style.background = "tomato";
      break;
    case "b":
      document.body.style.background = "lightblue";
      break;
    case "p":
      document.body.style.background = "lightpink";
      break;
  }
});

div1.addEventListener("pointerover", () => {
  div1.style.background = "lightblue";
});

document.addEventListener("scroll", (e) => {
  console.log(e);
  console.log(this);
});

console.log(center);
