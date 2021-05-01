const express = require('express');
const passport = require('passport')
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
require('./config/googleStrategy')
const authRoutes = require('./routes/authRoutes')
const profileRoutes = require('./routes/profileRoutes')
const app = express()
mongoose.connect(process.env.DBURI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        console.log('database connected')
        app.listen(3000, () => {
            console.log('listening at: http://localhost:3000')
        })
    })
    .catch(err => console.log(err))


app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['test']
}))

app.use(express.static('public'))
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs')


app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.get('/', (req, res) => {
    res.render('pages/index')
})
// app.get('/profile', (req, res) => {
//     console.log(req)
//     res.render('pages/profile')
// })
