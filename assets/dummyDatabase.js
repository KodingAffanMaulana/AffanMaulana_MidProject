// 1. use database MidProject
// 2. paste code in mongosh

db.comments.insertMany([
    {
        "username": "affan",
        "comment": "Congratulation",
        "videoID": "321"
    },
    {
        "username": "user123",
        "comment": "Great video!",
        "videoID": "123"
    },
    {
        "username": "jane_doe",
        "comment": "Nice content!",
        "videoID": "456"
    },
    {
        "username": "john_doe",
        "comment": "Awesome video!",
        "videoID": "789"
    },
    {
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "101"
    }
])

db.products.insertMany(
    [
        {
            "productID": "prod001",
            "link": "https://example.com/product1",
            "title": "Product 1",
            "price": 100,
            "videoID": "321"
        },
        {
            "productID": "prod002",
            "link": "https://example.com/product2",
            "title": "Product 2",
            "price": 200,
            "videoID": "123"
        },
        {
            "productID": "prod003",
            "link": "https://example.com/product3",
            "title": "Product 3",
            "price": 150,
            "videoID": "456"
        },
        {
            "productID": "prod004",
            "link": "https://example.com/product4",
            "title": "Product 4",
            "price": 180,
            "videoID": "789"
        },
        {
            "productID": "prod005",
            "link": "https://example.com/product5",
            "title": "Product 5",
            "price": 90,
            "videoID": "101"
        }
    ])

db.thumbnails.insertMany([
    {
        "username": "affan",
        "comment": "Congratulation",
        "videoID": "321"
    },
    {
        "username": "user123",
        "comment": "Great video!",
        "videoID": "123"
    },
    {
        "username": "jane_doe",
        "comment": "Nice content!",
        "videoID": "456"
    },
    {
        "username": "john_doe",
        "comment": "Awesome video!",
        "videoID": "789"
    },
    {
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "101"
    }
])