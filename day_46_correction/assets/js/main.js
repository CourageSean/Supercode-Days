const text = document.getElementById("text");
const word = document.getElementById("word");
const davor = document.getElementById("davor");
const danach = document.getElementById("danach")
const before = document.getElementById("before")
const after = document.getElementById("after")

let trennen = () => {
    let index = text.value.indexOf(word.value)
    if (davor.checked) {
        before.innerHTML = text.value.slice(0, index)
        after.innerHTML = text.value.slice(index)
    } else {
        before.innerHTML = text.value.slice(0, index + word.value.length)
        after.innerHTML = text.value.slice(index + word.value.length)
    }
}