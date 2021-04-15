const express = require('express');
const app = express()
// console.log(data);
app.listen(5000, () => {
    console.log('listening at http:localhost:5000');
})
app.use(express.static('public'))
app.set('view engine', 'ejs')
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())
app.get('/', (req, res) => {
    res.render('pages/index')
})

//part 1
app.get('/blogs/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.query)
    res.send('query')
})

//part 2
app.get('/search', (req, res) => {
    res.render('pages/search')
})

app.get('/searchBlog', (req, res) => {
    console.log(req.query)
    res.send(`the user search about ${req.query.blog_name}`)
})