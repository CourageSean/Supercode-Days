const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const date = require('date-and-time');
const readingTime = require('./functions');
console.log(readingTime('test'))

const { body, validationResult } = require('express-validator');
const app = express()
let data = require('./data.json')
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

app.post('/new',
    // firstName must be at least 3 chars long
    body('firstName').isLength({ min: 3 }).trim(),
    // lastName must be at least 3 chars long
    body('lastName').isLength({ min: 3 }),
    //Phone must be numbers
    body('phone').isNumeric().isLength({ min: 3, max: 12 }),
    // email must be Email
    body('email').isEmail(),
    // text must be at least 5 chars long
    body('text').isLength({ min: 5 }).trim(),
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
            //message errors
            // flash express
            //not save on the database / json
        }
        //success
        //Save on database
        //redirect
        console.log(req.body.firstName)
        res.redirect('/')
    })
app.get('/blogs', (req, res) => {
    res.render('pages/blogs', { data })
})
app.get('/blogs/:id', (req, res) => {
    console.log(req.params.id)
    let blog = data.find(elt => elt.id == req.params.id)
    console.log(blog)
    res.render('pages/singleBlog', { blog })
})

app.get('/addNew', (req, res) => {
    res.render('pages/newBlog')
})

app.post('/addNew/new', (req, res) => {
    console.log(req.body);
    const now = new Date();
    let newBlog =
    {
        id: uuidv4(),
        url: req.body.url_picture,
        title: req.body.title,
        body: req.body.text_blog,
        published_at: date.format(now, 'MMM DD YYYY'),
        duration: readingTime(req.body.text_blog),
        author: req.body.author,
        author_bild: req.body.author_picture

    }
    data.unshift(newBlog)
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) throw err
        fs.readFile('./data.json', 'utf-8', (err, blogs) => {
            data = JSON.parse(blogs)
            res.redirect('/blogs')
        })

    })

})

//todos 
//1: Forms validation
//2: add blog to json (file-System)
//2.1: formidable: upload image
//3: 6 random article 
