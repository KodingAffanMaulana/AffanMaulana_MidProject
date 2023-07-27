const ModelThumbnail = require('../models/Thumbnail');

const getThumbnail = async (req, res) => {
    try {
        const thumbnailData = await ModelThumbnail.find();

        if (thumbnailData.length === 0) {
            return res.status(404).json({ error: 'No thumbnails found' });
        }

        res.status(200).json(thumbnailData);

    } catch (err) {
        console.error('Error fetching thumbnails:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// API endpoint untuk menambahkan thumbnail video baru
const createThumbnail = async (req, res) => {
    try {
        const { videoID, imageUrl } = req.body;

        // Pastikan data yang dibutuhkan tersedia
        if (!videoID || !imageUrl) {
            return res.status(400).json({ error: 'VideoID and URL are required' });
        }

        const Product = new ModelThumbnail({
            videoID, imageUrl
        });

        // Simpan data thumbnail video ke database
        const saveThumbnail = await Product.save();

        res.status(201).json({ message: 'Thumbnail added successfully', thumbnails: saveThumbnail });
    } catch (err) {
        console.error('Error adding thumbnail:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createThumbnail, getThumbnail };