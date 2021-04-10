const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
let data = []
if (fs.existsSync('./todos.json')) {
    data = require('./todos.json')
}


// const bodyParser = require('body-parser')


const app = express()

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())


app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.listen(5000, () => {
    console.log('http://localhost:5000');
})
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log(req.method)
    res.render('pages/index')
})

app.post('/new', (req, res) => {
    console.log(req.body);
    console.log(req.body.firstname);
    console.log(req.body.lastname);

    // res.send('data written')
    res.redirect('/')
})

app.get('/todo', (req, res) => {
    res.render('pages/todo', { todos: data })
})

app.post('/newTodo', (req, res) => {
    console.log(req.body.todo);
    if (!fs.existsSync('./todos.json')) {
        let todos = [
            {
                id: uuidv4(),
                todo: req.body.todo,
                isComplete: false
            }
        ]
        fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
            if (err) throw err
            fs.readFile('./todos.json', 'utf8', (err, newData) => {
                data = JSON.parse(newData)
                console.log(data);
                res.redirect('/todo')
            })
        })
    } else {
        let todos =
        {
            id: uuidv4(),
            todo: req.body.todo,
            isComplete: false
        }

        // fs.appendFile('./todos.json', JSON.stringify(todos), (err) => {
        //     if (err) throw err
        //     console.log('updated')
        // })
        let todosJson = JSON.parse(fs.readFileSync('./todos.json', 'utf8'))
        console.log(todosJson)
        todosJson.push(todos)
        fs.writeFile('./todos.json', JSON.stringify(todosJson), (err) => {
            if (err) throw err
            console.log('updated')
            fs.readFile('./todos.json', 'utf8', (err, newData) => {
                data = JSON.parse(newData)
                console.log(data);
                res.redirect('/todo')
            })

        })
    }

})

