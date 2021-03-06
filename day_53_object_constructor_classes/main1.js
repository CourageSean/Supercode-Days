const userInput = document.getElementById('user-input')
const enter = document.getElementById('enter')
const ul = document.querySelector('ul')

function addList() {
    let li = document.createElement('li')
    li.textContent = userInput.value
    ul.appendChild(li)
}
enter.addEventListener('click', addList)
document.body.addEventListener('keydown', (e) => {
    //console.log(e);
    if (e.code == "Enter") {
        addList()
    }
})