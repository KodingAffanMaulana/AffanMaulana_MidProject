const mongoose = require('mongoose');

const thumbnailSchema = new mongoose.Schema({
    videoID: {
        required: true,
        type: String,
    },
    title: {
        required: true,
        type: String,
    },
    view: {
        type: Number,
        required: true,
    },
    youtubeUrl: {
        type: String,
        required: true,
    },
    imageUrl: {
        required: true,
        type: String
    }
});

const Thumbnail = mongoose.model('Thumbnail', thumbnailSchema);

module.exports = Thumbnail;