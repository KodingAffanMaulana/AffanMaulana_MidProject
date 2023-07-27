# MID TERM GIGIH

### Name: Affan Maulana
### ID: GG3FSGP0241


## 1. Database Structure

### 1) Comments
### Design Collection:
```
{
  username: string
  comment: string
  videoID: string
  timestamp: datetime(iso 8601)
}
```
### Schema:
```
{
  username: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  videoID: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
}
```


### 2) Products
### Design Collection:
```
{
  productID: string
  link: string
  title: string
  price: datetime(iso 8601)
  videoID: string
}
```
### Schema:
```
{
  productID: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  videoID: {
    type: String,
    required: true
  }
}
```

### 3) Thumbnails
### Design Collection:
```
{
  videoID: string
  imageUrl: string
}
```
### Schema:
```
{
  videoID: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String
  }
}
```

### 2. API Structure

```
MidProject/
├── node_modules/
├── app/
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   │   ├── commentController.js
│   │   ├── productController.js
│   │   └── thumbnailController.js
│   ├── models/
│   │   ├── Comment.js
│   │   ├── Product.js
│   │   └── Thumbnail.js
│   └── routes/
│       ├── commentRoute.js
│       ├── productRoute.js
│       └── thumbnailRoute.js
├── app.js
└── package.json

```

### 3. API Request and Response

``` Base URL: http://localhost:3000 ```

### Comments
```
*** GET /comments?videoID=id_video ***
---
Get comments or filter comments by videoID
- URL Params  
videoID (required) - The ID of the video for which comments are to be retrieved. Replace id_video in the URL with the actual video ID.
- Data Params  
None
- Headers
Content-Type: application/json
- Usage:
```
```
curl -X GET http://localhost:3000/comments?videoID=your_video_id
```
- Response:
  - Success: (200)
    ```
{
    "comments": [
        {
            "_id": "commentId1",
            "username": "user1",
            "comment": "Great video!",
            "videoID": "your_video_id",
            "timestamp": "2023-07-27T12:34:56.789Z"
        }
    ]
}
    ```
  - Errors: (404)
    ```
    {
      "error": "Video not found"
    }
    ```
```

GET /comments : Get all comments or filter .
POST /comments : Create a new comment.
```
### Product
```
GET /products?videoID=id_video : Get products or filter products by videoID.
POST /products: Create a new product.
```
### thumbnails
```
GET /thumbnails: Get all thumbnails.
POST /thumbnails: Add a new thumbnail.
```

## 4. How to run”!
