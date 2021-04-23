const mongoose = require('mongoose');

//const { Schema } = mongoose;
const Schema = mongoose.Schema;

const galleryItemSchema = new Schema({
    url: String,
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 10
    }
}, { timestamps: true })

//pluralize => GalleryDbs
const GalleryItem = mongoose.model('GalleryDb', galleryItemSchema)

module.exports = GalleryItem