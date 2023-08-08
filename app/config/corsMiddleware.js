// corsMiddleware.js

const cors = require('cors');

// List of allowed domains (update this list with your desired domains)
const allowedDomains = [
    'https://example.com',
    'https://subdomain.example.com',
    'http://localhost:3000', // Example local development domain
];

// Custom CORS options to check if the origin is allowed
const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests without origin (e.g., from mobile apps)
        if (!origin) return callback(null, true);

        // Check if the origin is in the allowed list
        if (allowedDomains.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            // If the origin is not allowed, reject the request
            callback(new Error('Not allowed by CORS'));
        }
    },
};

module.exports = cors(corsOptions);
