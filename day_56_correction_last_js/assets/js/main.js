console.log("test test")
const myDate = document.getElementById('my-date')
const result = document.getElementById('result')
function showDate() {
    // console.log(myDate.value)
    // console.log(new Date())
    // console.log(new Date(myDate.value))
    // console.log(new Date().getTime())
    // console.log(new Date(myDate.value).getTime())
    let birthday = new Date(myDate.value)
    function counter() {
        let now = new Date()
        let difference = birthday.getTime() - now.getTime() //ms
        //1s =>1000ms
        //1min => 60s
        //1h => 60 min
        //1d =>24h
        // console.log(difference / (1000 * 60 * 60 * 24))
        difference = difference / (1000 * 60 * 60 * 24) //days
        let day = Math.floor(difference)
        //console.log(day)
        difference = (difference - day) * 24
        let hours = Math.floor(difference)
        //console.log(hours)
        difference = (difference - hours) * 60
        let minutes = Math.floor(difference)
        //console.log(minutes)
        difference = (difference - minutes) * 60
        let seconds = Math.floor(difference)
        //console.log(seconds)
        console.log({ day, hours, minutes, seconds })
        result.innerHTML = `${day}:${hours}:${minutes}:${seconds}`
    }
    setInterval(counter, 1000)
}