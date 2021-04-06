const express = require('express');
const carsData = require('./data/cars.json')
const app = express()
//Define the view engine
app.set('view engine', 'ejs')
//Define the static Folder
app.use(express.static('public'))

app.listen(5000, () => {
    console.log('listening at:', 'http://localhost:5000')
})
// app.get('/', (req, res) => {
//     // res.send('hello world')
//     res.sendFile('/views/index.html', { root: __dirname })
// })
// app.get('/about', (req, res) => {
//     res.send('<h1 style="color:tomato">This is About</h1>')
// })
app.get('/', (req, res) => {
    res.render('pages/index',
        {
            firstName: 'Superman',
            isHero: false,
            items: ['item1', 'item2', 'item3'],
            title: 'Homepage'
        })
})
app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'Aboutpage' })
})
app.get('/cars', (req, res) => {
    res.render('pages/cars', { title: 'Carspage', carsData })
})
app.get('/cars/:id', (req, res) => {
    console.log(req.params.id);
    let car = carsData.find(elt => elt.id == req.params.id)
    console.log(car)
    res.render('pages/carDetails', { title: 'CarDetails', car })
})

