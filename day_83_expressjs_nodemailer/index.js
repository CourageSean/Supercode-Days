const express = require('express');
const nodemailer = require('nodemailer')
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

app.post('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'YourEmail',
            pass: 'YourPassword'
        }
    });
    let info = transporter.sendMail({
        from: '"Super VZ-FS-20-03 👻" <YourEmail>', // sender address
        to: "ReceiverEmail", // list of receivers
        subject: "SUPER BOY ✔", // Subject line
        text: "DU BIST SUPER?", // plain text body
        html: "<b>DU BIST SUPER</b>", // html body

    }, (err, info) => {
        if (err) throw err

    });
    res.send('email send')
})