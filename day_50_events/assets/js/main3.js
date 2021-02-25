const div = document.querySelectorAll('div')
console.log(div)



for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', (e) => {
        console.log(e)
        e.target.style.background = "tomato"
    })
}