const container = document.getElementById("container");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const custom = document.getElementById("custom");
const customInput = document.getElementById("custom-input");
const roundContainer = document.getElementById("round-container");
const round = document.getElementById("round");
const roundTotal = document.getElementById("round-total");
const numberUser = document.getElementById("number-user");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
const errorMessage = document.getElementById("error-message");
let roundInput
let random = generateRandom()
let counter = 1
console.log("random", random)
function generateRandom() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(generateRandom());

function getRounds() {
    if (four.checked) {
        console.log("4")
        customInput.style.display = "none"
        roundInput = 4
    } else if (five.checked) {
        console.log("5")
        customInput.style.display = "none"
        roundInput = 5
    } else if (six.checked) {
        console.log('6')
        customInput.style.display = "none"
        roundInput = 6
    } else {
        console.log("custom")
        customInput.style.display = "block"
        roundInput = customInput.value

    }
    console.log(roundInput);
}
getRounds()

function compare(random, user) {
    if (user < random) {
        return `you need to guess higher than ${user}, try again <br>`
    } else if (random < user) {
        return `you need to guess lower than ${user}, try again <br>`
    } else {
        return `You got me in ..., I am ${random},<br> <a href="#" onclick="restart()">Play again</a>`
    }
}
console.log(compare(23, 30))
console.log(compare(23, 10))
console.log(compare(30, 30))

function play() {
    console.log(numberUser.value.length)
    if (numberUser.value.length > 0) {
        errorMessage.classList.remove('animation')
        errorMessage.classList.add('hide')
        container.style.display = "none"
        roundContainer.style.display = "block"
        roundTotal.innerHTML = roundInput
        round.innerHTML = counter
        result.innerHTML += compare(random, numberUser.value)
        if (counter == roundInput && random != numberUser.value) {
            console.log("you lost")
            btn.disabled = true
            result.innerHTML = 'you lost <br><a href="#" onclick="restart()">Play again</a>'
        }
        counter++;
    } else {

        errorMessage.classList.remove('hide')
        errorMessage.classList.add('animation')
    }
}

function restart() {
    location.reload();
}

