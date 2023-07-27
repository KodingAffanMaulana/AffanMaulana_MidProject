const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.post('/', commentController.createComment);
router.get('/', commentController.getComment);


router.get('/', commentController.getAllComments);
router.delete('/:videoID', commentController.deleteComment);

module.exports = router;