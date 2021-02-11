// let time = 2

// switch (time) {
//     case 9:
//     case 1:
//     case 2:
//         console.log(`It's 9`);
//         break;
//     case 10:
//         console.log(`It's 10`);
//         break;
//     case 11:
//         console.log(`It's 11`);
//         break;
//     default:
//         console.log(`who cares`)
// }


let browser = 'Edge'
let version = 10
// switch (browser) {
//     case "Edge":
//         console.log('you ve got the edge');
//         break;
//     case "Safari":
//         console.log('Okey we support');
//         break;
//     case "Chrome":
//         console.log('Okey we support');
//         break;
//     case "Mozilla":
//         console.log('Okey we support');
//         break;
//     default:
//         console.log('We hope it works');
// }
// switch (browser) {
//     case "Edge":
//         console.log('you ve got the edge');
//         break;
//     case "Safari":
//     case "Chrome":
//     case "Mozilla":
//         console.log('Okey we support');
//         break;
//     default:
//         console.log('We hope it works');
// }
switch (browser + version) {
    case "Edge5":
    case "Chrome5":
    case "Safari5":
        console.log('no');
        break;
    case "Edge10":
    case "Chrome10":
    case "Safari10":
        console.log('yes');
        break;
}

let choiceUser1 = "rock"
let choiceUser2 = "scissors"
function play(choiceUser1) {
    let random = Math.floor(Math.random() * 3)
    let choiceUser2
    switch (random) {
        case 0:
            choiceUser2 = "rock"
            break;
        case 1:
            choiceUser2 = "paper"
            break;
        case 2:
            choiceUser2 = "scissors"
            break;
    }
    console.log(choiceUser2)
    switch (choiceUser1 + choiceUser2) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log(`draw`);
            break;
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            console.log("user 1 win");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("user 1 lose");
            break;
    }
}
play("rock")
console.log(Math.floor(Math.random() * 3))

/*Ternary operators*/
/* ES6*/
5 == 5 && false ? console.log("it's equal") : console.log("it's not equal")

let time = 12

switch (time) {
    case 9:
    case 1:
    case 2:
        console.log(`It's 9,1,2`);
        break;
    case 10:
        console.log(`It's 10`);
        break;
    case 11:
        console.log(`It's 11`);
        break;
    default:
        console.log(`who cares`)
}
// time == 9 || time == 1 || time == 2 ? console.log(`It's 9,1,2`) : time == 10 ? console.log(`It's 10`) : time == 11 ? console.log(`It's 11`) : console.log(`who cares`)
function changeBg() {
    let check = document.getElementById("check")
    // if (check.checked) {
    //     document.body.style.background = "gold"
    // } else {
    //     document.body.style.background = "tomato"
    // }
    check.checked ? document.body.style.background = "gold" : document.body.style.background = "tomato"
}
changeBg()
false ? console.log("Yes") : null
let isHidden = true
function toggleP() {

    const headline = document.getElementById("headline")
    const para = document.getElementById("para")
    console.log('isHidden1', isHidden)
    isHidden = !isHidden
    console.log('isHidden2', isHidden)
    isHidden ? para.style.opacity = "0" : para.style.opacity = "1"
    isHidden ? headline.innerHTML = "I DO NO MORE NEED THIS -" : headline.innerHTML = "need Some Information +"

}