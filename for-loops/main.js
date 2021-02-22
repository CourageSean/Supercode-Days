let para = document.getElementById("p");
let number = document.getElementById("number");
let txt = document.getElementById("txt");
let words = [
  "hallo",
  "Auto",
  "Waschmaschine",
  "Schrank",
  "Katze",
  "Beispiel",
  "Eltern",
  "Fenster",
  "Geburtstag",
  "Himmel",
  "schwimmen",
  "Zeitung",
];

// function check() {
//   for (f = 0; f < words.length; f++) {
//     if (words[f].length === Number(number.value)) {
//       console.log(words[f]);
//       para.innerHTML += `<br> ${words[f]}`;
//     }
//   }
// }

// function append() {
//   words.push(txt.value);
// }

// console.log(words);

let num3 = document.getElementById("num3");
let loop = document.getElementById("loop");

loop.innerHTML = "Lp";

let la;

function loops() {
  let loopo = ["L", "p"];
  for (i = 0; i < num3.value; i++) {
    if (num3.value === 0) {
      console.log("error");
    } else if (num3.value % 2 === 0) {
      loopo.splice(1, 0, "o");
    } else if (num3.value % 2 !== 0) {
      loopo.splice(1, 0, "o0");
      loopo.splice(loopo.length - 2, 0, "o");
      i = 2 * i + 1;
    }
  }
  console.log(loopo);
}

let arrTxt = [];
let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;
let texto;

function cut() {
  for (i = 0; i <= text.length; i++) {
    texto = text.slice(100 * i, 100 * (i + 1));
    arrTxt.push(texto);
    console.log(arrTxt[i]);
  }
}

numArray = [5, 22, 15, 100, 55];

function modulo() {
  for (i = 0; i < numArray.length; i++) {
    for (j = 2; j <= 100; j++) {
      if (numArray[i] % j === 0) {
        console.log(
          numArray[i] +
            " is divisible by " +
            j +
            " the answer is " +
            numArray[i] / j
        );
      }
    }
  }
}
