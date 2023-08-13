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
        const { videoID, title, view, imageUrl } = req.body;

        // Pastikan data yang dibutuhkan tersedia
        if (!videoID || !imageUrl || !title || !view) {
            return res.status(400).json({ error: 'VideoID and URL are required' });
        }

        const Product = new ModelThumbnail({
            videoID, title, view, imageUrl
        });

        // Simpan data thumbnail video ke database
        const saveThumbnail = await Product.save();

        res.status(201).json({ message: 'Thumbnail added successfully', thumbnails: saveThumbnail });
    } catch (err) {
        console.error('Error adding thumbnail:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const searchList = async (req, res) => {
    try {
        const { title } = req.query;

        if (!title) {
            return res.status(400).json({ error: 'title is required' });
        }

        const thumbnail = await ModelThumbnail.find({ title });

        if (thumbnail.length === 0) {
            res.status(404).json({ error: 'No products found for the specified search term' });
        } else {
            res.status(200).json(thumbnail);
        }
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createThumbnail, getThumbnail, searchList };