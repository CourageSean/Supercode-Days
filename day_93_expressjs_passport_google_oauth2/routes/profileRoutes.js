const express = require('express');
const router = express.Router()

const checkAuth = (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        next()
    } else {
        res.redirect('/auth/signin')
    }

}

router.get('/', checkAuth, (req, res) => {

    res.render('pages/profile')

})


module.exports = router


