const express = require('express');
const passport = require('passport');
const router = express.Router()

router.get('/signin', (req, res) => {
    res.render('pages/signin')
})
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

// router.get('/google', (req, res) => {
//     res.send('google')
// })

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google'),
    function (req, res) {
        // Successful authentication, redirect home.
        //res.send(req.user)
        res.redirect('/profile/')

        //res.json(req.user)
    });

module.exports = router