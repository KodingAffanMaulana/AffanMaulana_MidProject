const express = require('express');
const thumbnailController = require('../controllers/thumbnailController');

const router = express.Router();

router.get('/', thumbnailController.getThumbnail);
router.post('/', thumbnailController.createThumbnail);
router.get('/video', thumbnailController.searchList);

module.exports = router;