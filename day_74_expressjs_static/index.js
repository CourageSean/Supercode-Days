//import express
const express = require('express');
const path = require('path');
const data = require('./data.json');

//Create server
const app = express()

//listen to server
app.listen(3000, () => {
    console.log('listening at localhost:3000');
})
//serving static Files
app.use(express.static('public'))
//routing
//request: get, post, put, delete
// app.request
//get request :  app.get('/',(req,res)=>{...})

// //Home
// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!')
// })

// //about
// app.get('/about', (req, res) => {
//     res.status(200).send('<h1>this is about</h1>')
// })

//Works only on Anass Computer: depracated 
// app.get('/', (req, res) => {
//     res.sendFile('/Users/anass/Documents/bootcamp-vz-fs-20-03/day_74_expressjs_static/views/index.html')
// })

///Users/anass/Documents/bootcamp-vz-fs-20-03/day_74_expressjs_static/views/index.html = __dirname+ pathfile
//Solution 1
// app.get('/', (req, res) => {
//     res.sendFile('./views/index.html', { root: __dirname })
// })
//Solution 2
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
// console.log(__dirname);
// console.log(path.join(__dirname, '/views/index.html'))
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})
app.get('/courses', (req, res) => {
    res.sendFile('./views/courses.html', { root: __dirname })
})
app.get('/students/api', (req, res) => {
    res.send(data)
})

app.get('/students/api/:id', (req, res) => {
    // console.log(req);
    console.log(req.params.id);
    let student = data.find(student => student.id == req.params.id)
    console.log(student)
    if (student === undefined) {
        res.status(500).send('student not Find')
    } else {
        // res.send(student)
        res.send(`
            <h1>${student.first_name}</h1>
            <h1>${student.last_name}</h1>
            <h1>${student.email}</h1>
            <h1>${student.gender}</h1>
        `)
    }

})

//404 !!!!!! At the end 
app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname })
})
/// Do not write Here