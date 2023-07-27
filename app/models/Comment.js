const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    videoID: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
