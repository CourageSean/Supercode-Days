const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config()
console.log(process.env)
console.log(process.env.API_KEY)

const PORT = process.env.PORT || 5000



const app = express()
app.set('view engine', 'ejs')

app.listen(PORT, () => {
    console.log(`listening at: https://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)
        .then(result => result.json())
        .then(data => {
            // console.log(data)
            // res.json : Good for testing
            // res.json(data)
            console.log(data.articles[0]);
            res.render('pages/index', { data: data.articles[0], cool: process.env.SECRET })
        })
    // res.render('pages/index', { data: data })

})