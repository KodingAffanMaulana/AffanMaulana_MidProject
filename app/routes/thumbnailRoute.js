const express = require('express');
const thumbnailController = require('../controllers/thumbnailController');

const router = express.Router();

router.get('/', thumbnailController.getThumbnail);
router.get('/', thumbnailController.getThumbnaiById);
router.post('/', thumbnailController.createThumbnail);

module.exports = router;