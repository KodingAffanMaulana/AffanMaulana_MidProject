// 1. use database MidProject
// 2. paste code in mongosh

db.thumbnails.insertMany([
    {
        "videoID": "1",
        "title": "Speaker Flashsale",
        "view": 100,
        "youtubeUrl": "https://www.youtube.com/embed/BZ5gCb02H4A",
        "imageUrl": "https://iili.io/HD1dYhu.jpg"
    },
    {
        "videoID": "2",
        "title": "Watch IP68, Lets GOO",
        "view": 160,
        "youtubeUrl": "https://www.youtube.com/embed/BZ5gCb02H4A",
        "imageUrl": "https://iili.io/HD1d7Ie.jpg"
    },
    {
        "videoID": "3",
        "title": "Jual Hydro Flask",
        "view": 200,
        "youtubeUrl": "https://www.youtube.com/embed/gp8JOmHEfos",
        "imageUrl": "https://iili.io/HD1daLb.jpg"
    },
    {
        "videoID": "4",
        "title": "Toko Kursi Kurnia",
        "view": 190,
        "youtubeUrl": "https://www.youtube.com/embed/rTFXTY4kvjU",
        "imageUrl": "https://iili.io/HD1dWp1.jpg"
    },
    {
        "videoID": "5",
        "title": "Alat Kecantikan",
        "view": 800,
        "youtubeUrl": "https://www.youtube.com/embed/hLXIik8dmdg",
        "imageUrl": "https://iili.io/HD1dlBj.jpg"
    }, {
        "videoID": "6",
        "title": "Alas Kaki Murah",
        "view": 400,
        "youtubeUrl": "https://www.youtube.com/embed/A0p_sc4PGPE",
        "imageUrl": "https://iili.io/HD1d0Ex.jpg"
    },
    {
        "videoID": "7",
        "title": "Kacamata, Beli 1 Gratis 2",
        "view": 700,
        "youtubeUrl": "https://www.youtube.com/embed/DbOulmdGIh8",
        "imageUrl": "https://iili.io/HD1d1rQ.jpg"
    },
    {
        "videoID": "8",
        "title": "Kamera Classic",
        "view": 600,
        "youtubeUrl": "https://www.youtube.com/embed/zh1NNWmwQak",
        "imageUrl": "https://iili.io/HD1dMYB.jpg"
    },
    {
        "videoID": "9",
        "title": "Cuci Gudang Headset",
        "view": 900,
        "youtubeUrl": "https://www.youtube.com/embed/V25wX9ZgmKM",
        "imageUrl": "https://iili.io/HD1dVkP.jpg"
    },
    {
        "videoID": "10",
        "view": 300,
        "youtubeUrl": "https://www.youtube.com/embed/IjN3FWoXHjQ",
        "title": "Jam Tangan Mahal",
        "imageUrl": "https://iili.io/HD1dG2V.jpg"
    }
]);

db.products.insertMany(
    [
        {
            "productID": "1-1",
            "link": "https://iili.io/HD1CAzB.md.jpg",
            "title": "Product 1",
            "discount": 50,
            "price": 10000,
            "videoID": "1"
        }
        ,
        {
            "productID": "1-2",
            "link": "https://iili.io/HD1Cz5x.jpg",
            "title": "Product 2",
            "discount": 30,
            "price": 20000,
            "videoID": "1"
        },
        {
            "productID": "1-3",
            "link": "https://iili.io/HD1C5s1.jpg",
            "title": "Product 3",
            "discount": 40,
            "price": 30000,
            "videoID": "1"
        },

        {
            "productID": "2-1",
            "link": "https://iili.io/HD1InAG.jpg",
            "title": "Product 1",
            "discount": 20,
            "price": 39999,
            "videoID": "2"
        },
        {
            "productID": "2-2",
            "link": "https://iili.io/HD1IRK7.md.jpg",
            "title": "Product 2",
            "discount": 40,
            "price": 59999,
            "videoID": "2"
        },

        {
            "productID": "2-3",
            "link": "https://iili.io/HD1IoNf.jpg",
            "title": "Product 3",
            "discount": 30,
            "price": 30000,
            "videoID": "2"
        },

        {
            "productID": "3-1",
            "link": "https://iili.io/HD1ILbf.md.jpg",
            "title": "Product 1",
            "discount": 30,
            "price": 35999,
            "videoID": "3"
        },
        {
            "productID": "3-2",
            "link": "https://iili.io/HD1IZx4.md.jpg",
            "title": "Product 2",
            "discount": 40,
            "price": 25000,
            "videoID": "3"
        },

        {
            "productID": "4-1",
            "link": "https://iili.io/HD1Te29.md.jpg",
            "title": "Product 1",
            "discount": 50,
            "price": 100000,
            "videoID": "4"
        },

        {
            "productID": "4-2",
            "link": "https://iili.io/HD1Tw1S.jpg",
            "title": "Product 2",
            "discount": 40,
            "price": 200000,
            "videoID": "4"
        },

        {
            "productID": "5-1",
            "link": "https://iili.io/HD1ANRe.jpg",
            "title": "Product 1",
            "discount": 50,
            "price": 100000,
            "videoID": "5"
        },

        {
            "productID": "5-2",
            "link": "https://iili.io/HD1AwJ9.jpg",
            "title": "Product 2",
            "discount": 40,
            "price": 200000,
            "videoID": "5"
        },

        {
            "productID": "5-3",
            "link": "https://iili.io/HD1AeDb.md.jpg",
            "title": "Product 3",
            "discount": 45,
            "price": 400000,
            "videoID": "5"
        },
        {
            "productID": "6-1",
            "link": "https://iili.io/HD1AygI.md.jpg",
            "title": "Product 1",
            "discount": 10,
            "price": 600000,
            "videoID": "6"
        },
        {
            "productID": "6-2",
            "link": "https://iili.io/HD1RHJt.md.jpg",
            "title": "Product 2",
            "discount": 15,
            "price": 900000,
            "videoID": "6"
        },
        {
            "productID": "6-3",
            "link": "https://iili.io/HD1RJ5X.md.jpg",
            "title": "Product 3",
            "discount": 25,
            "price": 999999,
            "videoID": "6"
        },

        {
            "productID": "7-1",
            "link": "https://iili.io/HD1Rmhb.md.jpg",
            "title": "Product 1",
            "discount": 30,
            "price": 300999,
            "videoID": "7"
        },


        {
            "productID": "7-2",
            "link": "https://iili.io/HD1RbTu.md.jpg",
            "title": "Product 2",
            "discount": 20,
            "price": 790999,
            "videoID": "7"
        },

        {
            "productID": "8-1",
            "link": "https://iili.io/HD15uaI.jpg",
            "title": "Product 1",
            "discount": 30,
            "price": 9000999,
            "videoID": "8"
        },
        {
            "productID": "8-2",
            "link": "https://iili.io/HD15z4p.jpg",
            "title": "Product 2",
            "discount": 10,
            "price": 8000999,
            "videoID": "8"
        },

        {
            "productID": "8-3",
            "link": "https://iili.io/HD15Avt.md.jpg",
            "title": "Product 3",
            "discount": 23,
            "price": 6300999,
            "videoID": "8"
        },

        {
            "productID": "9-1",
            "link": "https://iili.io/HD1aOns.md.jpg",
            "title": "Product 1",
            "discount": 20,
            "price": 1000999,
            "videoID": "9"
        },
        {
            "productID": "9-2",
            "link": "https://iili.io/HD1awtn.md.jpg",
            "title": "Product 2",
            "discount": 15,
            "price": 900999,
            "videoID": "9"
        },

        {
            "productID": "9-3",
            "link": "https://iili.io/HD1dVkP.md.jpg",
            "title": "Product 3",
            "discount": 35,
            "price": 2300999,
            "videoID": "9"
        },


        {
            "productID": "10-1",
            "link": "https://iili.io/HD1l02R.jpg",
            "title": "Product 1",
            "discount": 30,
            "price": 4999999,
            "videoID": "10"
        },
        {
            "productID": "10-2",
            "link": "https://iili.io/HD1l17p.jpg",
            "title": "Product 2",
            "discount": 30,
            "price": 5999999,
            "videoID": "10"
        },
    ])

db.comments.insertMany([
    {
        "username": "affan",
        "comment": "Congratulation",
        "videoID": "1"
    },
    {
        "username": "user123",
        "comment": "Great video!",
        "videoID": "2"
    },
    {
        "username": "jane_doe",
        "comment": "Nice content!",
        "videoID": "3"
    },
    {
        "username": "john_doe",
        "comment": "Awesome video!",
        "videoID": "3"
    },
    {
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "4"
    },
    {
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "5"
    },
    {
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "6"
    },
    {
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "7"
    },
    {
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "8"
    },
    {
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "9"
    },
    {
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "10"
    },
])