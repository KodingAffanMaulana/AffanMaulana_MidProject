const ModelComment = require('../models/Comment');

const getComment = async (req, res) => {
    try {
        const { videoID } = req.query;

        if (!videoID) {
            return res.status(400).json({ error: 'VideoID is required' });
        }

        const comments = await ModelComment.find({ videoID });

        if (comments.length === 0) {
            return res.status(404).json({ error: 'No comments found for the specified VideoID' });
        }

        res.status(200).json(comments);
    } catch (err) {
        console.error('Error fetching comments:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const createComment = async (req, res) => {
    try {
        const { username, comment, videoID } = req.body;

        if (!username || !comment || !videoID) {
            return res.status(400).json({ error: 'Username, Comment, and VideoID are required' });
        }

        const existingComment = await ModelComment.findOne({ videoID });

        if (existingComment) {
            return res.status(409).json({ error: 'Comment with the same username and videoID already exists' });
        }

        const newComment = new ModelComment({
            username,
            comment,
            videoID,
        });

        const saveComment = await newComment.save();

        res.status(201).json({
            message: 'Comment successfully created',
            Comment: saveComment,
        });
    } catch (err) {
        console.error('Error creating comment:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Optional
const deleteComment = async (req, res) => {
    try {
        const { videoID } = req.params;
        const deletedResult = await ModelComment.findOneAndDelete({ videoID });

        if (!deletedResult) {
            return res.status(404).json({
                message: `Comment with id ${videoID} not found`,
            });
        }

        res.status(200).json({
            message: `Comment with id ${videoID} deleted successfully`,
            ...deletedResult,
        });
        console.log("Delete comment");
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({
            message: "An error occurred while deleting the comment",
        });
    }
};

const getAllComments = async (req, res) => {
    try {
        // Menggantikan "Comment" dengan model database yang sesuai untuk mengambil data komentar dari database
        const commentsData = await ModelComment.find();

        if (commentsData.length === 0) {
            return res.status(404).json({ error: 'No comments found' });
        }

        res.status(200).json(commentsData);

    } catch (err) {
        console.error('Error fetching comments:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createComment, getComment, getAllComments, deleteComment };