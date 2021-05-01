const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    emails: String,
    photos: String
}, { timestamps: true })

const User = mongoose.model('users', userSchema)

module.exports = User