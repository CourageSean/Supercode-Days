
//CodeFlow Übung lev2_7: Nummern
let counter = 0
const button = document.querySelector('button')
const umwickeln = document.querySelector('.umwickeln')

button.addEventListener('click', () => {
    let div = document.createElement('div')
    counter % 10 == 0 ? div.classList.add('rechteck', 'weiss') : div.classList.add('rechteck')
    div.innerText = counter
    umwickeln.appendChild(div)
    counter++
})

//CodeFlow Übung lev2_8: Einkaufsliste
