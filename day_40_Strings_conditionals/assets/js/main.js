//double quote
let txt1 = "hello";
//single quote
let txt2 = "hi";
//Backstick oder accent
let txt3 = `hello wolrd`;
let txt4 = `
heLLo
World
I am Cool
.
`;
console.log(txt4);

//Template literals
let hero = "superman";
let age = 30;
let city = "NYC";

let description =
  "I am " + hero + " and " + age + " years old, I am from " + city;
console.log(description);
let description2 = `I am ${hero} and ${age} years old, I am from ${city}`;
console.log(description2);

//function greeting

//greeting('superman',30,'Nyc')
//I am superman and 30 years old, I am from NYC
function greeting(hero, age, city) {
  console.log(`I am ${hero} and ${age} years old, I am from ${city}`);
}
greeting("superman", 30, "Nyc");
greeting("Bathman", 40, "Gotham city");

let sentence = "As sly as a fox, as strong as an ox";
//String Methods
//indexOf
console.log(sentence.indexOf("A", 2)); //-1
//length
console.log(sentence.length); //35
//slice(start,opt:end)
console.log(sentence.slice(3, 6));
//substring(start,end)
console.log(sentence.slice(3, 6));
//search
console.log(sentence.search("A"));
//replace
console.log(sentence.replace("A", "B"));
//substr(start,length)
console.log(sentence.substr(9, 10));
console.log(sentence.substring(9, 11));

// //toUpperCase()
// //toLowerCase()
console.log(sentence.toUpperCase());

//concate
console.log(sentence.concat(sentence));

//lastIndexOf, trim....
//split
console.log(sentence.split(""));

//Number Methods
//toFixed
let num1 = 2.454656566;
console.log(num1.toFixed(2));
console.log((10 / 3).toFixed(1));

//toExponential()
let num2 = 10000000;
console.log(num2.toExponential());

let num3 = 123456.2;
console.log(num3.toPrecision(1)); //// 100000
console.log(num3.toPrecision(2)); //// 120000

//Math
console.log(Math.random());
console.log(Math.floor(3.4));
//ceil
console.log(Math.ceil(3.4));
//
console.log(Math.pow(2, 2));

//Conditionals
// if else
//Ternary opeartor
//Switch (morgen)
let hungry = false;
//Conditionals
if (hungry == true) {
  console.log("eat");
} else {
  console.log("not eat");
}
let time = 8;

if (time == 9) {
  console.log("it's 9");
} else if (time == 10) {
  console.log("it's 10");
} else if (time == 11) {
  console.log("it's 11");
}
// } else {
//     console.log("who cares")
// }
if (time < 12) {
  console.log("Morning");
}

//Morgen, Tag,Abends, Nachts
function guten(time) {
  if (time < 10) {
    console.log("Morgen");
  } else if (time < 16) {
    console.log("Tag");
  } else if (time < 20) {
    console.log("Abend");
  } else {
    console.log("Nacht");
  }
}
guten(8);
guten(11);
guten(18);
guten(22);

if (true || false) {
  console.log("true");
} else {
  console.log("false");
}
function checkAge() {
  let age = document.getElementById("age").value;
  let resultCheck = document.getElementById("result-check");
  console.log(age);
  if (age >= 18) {
    resultCheck.innerHTML = "volljährig";
  } else {
    resultCheck.innerHTML = "minderjärig";
  }
}

const airQuality = document.getElementById("air-quality");
const quality = document.getElementById("quality");
const concern = document.getElementById("concern");
const effect = document.getElementById("effect");

function checkAirQuality() {
  airQuality.innerHTML = quality.value;
  if (quality.value <= 50) {
    document.body.style.background = "green";
    concern.innerHTML = "Good";
    effect.innerHTML = "Little or no risk";
  } else if (quality.value > 50 && quality.value <= 100) {
    document.body.style.background = "gold";
    concern.innerHTML = "Moderate ";
    effect.innerHTML = "Acceptable quality";
  } else if (quality.value > 100 && quality.value <= 150) {
    document.body.style.background = "orange";
    concern.innerHTML = "Unhealthy for sensitive groups ";
    effect.innerHTML = "Generable publics not likely affected";
  }
}
