const ModelProduct = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const productData = await ModelProduct.find();

        if (productData.length === 0) {
            return res.status(404).json({ error: 'No Products found' });
        }

        res.status(200).json(productData);

    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getProduct = async (req, res) => {
    try {
        const { videoID } = req.query;

        if (!videoID) {
            return res.status(400).json({ error: 'VideoID is required' });
        }

        const products = await ModelProduct.find({ videoID });

        if (products.length === 0) {
            res.status(404).json({ error: 'No products found for the specified VideoID or search term' });
        } else {
            res.status(200).json(products);
        }
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//bonus search
const searchProduct = async (req, res) => {
    try {
        const { title } = req.query;

        if (!title) {
            return res.status(400).json({ error: 'title is required' });
        }

        const products = await ModelProduct.find({ title });

        if (products.length === 0) {
            res.status(404).json({ error: 'No products found for the specified search term' });
        } else {
            res.status(200).json(products);
        }
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createProduct = async (req, res) => {
    try {
        const { productID, link, title, price, discount, videoID } = req.body;

        if (!productID || !link || !title || !price || !videoID || !discount) {
            return res.status(400).json({ error: 'ProductID, Link, Title, Price, and VideoID are required' });
        }

        const Product = new ModelProduct({
            productID, link, title, price, discount, videoID
        });

        const saveProduct = await Product.save();
        res.status(201).json({ message: 'Product added successfully', product: saveProduct });
    } catch (err) {
        console.error('Error adding product:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createProduct, getProduct, searchProduct, getAllProducts };