const mongoose = require('mongoose');

const thumbnailSchema = new mongoose.Schema({
    videoID: {
        required: true,
        type: String,
    },
    imageUrl: {
        required: true,
        type: String
    }
});

const Thumbnail = mongoose.model('Thumbnail', thumbnailSchema);

module.exports = Thumbnail;