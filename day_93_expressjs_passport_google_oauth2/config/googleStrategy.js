const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/user')
require('dotenv').config()

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        // console.log(profile)
        User.find({ googleId: profile.id }).then(user => {
            // console.log(user)
            if (user.length > 0) {
                console.log('user already exist')
                done(null, user);
            } else {
                new User({
                    googleId: profile.id,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    emails: profile.emails[0].value,
                    photos: profile.photos[0].value
                }).save()
                    .then(() => {
                        console.log('user created')
                        done(null, user);
                    })
            }
        })


    }
));