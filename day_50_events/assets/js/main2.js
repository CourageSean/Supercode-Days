console.log("works")

const sliderImages = document.querySelectorAll('img')
// console.log('height', sliderImages[0].height)

document.addEventListener('scroll', (e) => {
    console.log('I scroll')

    // console.log(window.scrollY)
    // console.log(window.innerHeight)


    // console.log(pointerDown)
    // console.log('height', sliderImages[0].height)

    for (let i = 0; i < sliderImages.length; i++) {
        let showIn = window.scrollY + window.innerHeight - sliderImages[i].height / 2
        console.log('showIn', showIn)
        console.log('offsetTop', sliderImages[i].offsetTop)
        if (showIn > sliderImages[i].offsetTop) {
            sliderImages[i].classList.add('active')
        } else {
            sliderImages[i].classList.remove('active')
        }
    }
})