# MID TERM GIGIH
### Name: Affan Maulana
### ID: GG3FSGP0241

Database Structure
Collection: Comments
This collection stores comments made by users on specific videos.

Fields:
username: (String) The username of the user who made the comment. (Required)
comment: (String) The actual comment text. (Required)
videoID: (String) The ID of the video the comment is related to. (Required)
timestamp: (Date) The timestamp when the comment was created. (Default: Date.now())
Collection: Products
This collection stores information about products related to videos.

Fields:
productID: (String) The unique ID of the product. (Required)
link: (String) The URL link to the product. (Required)
title: (String) The title or name of the product. (Required)
price: (Number) The price of the product. (Required)
videoID: (String) The ID of the video to which the product is related. (Required)
Collection: Thumbnails
This collection stores URLs of thumbnails for videos.

Fields:
videoID: (String) The ID of the video for which the thumbnail URL is stored. (Required)
imageUrl: (String) The URL of the thumbnail image. (Required)
In the Midplay_db database, there are three collections: Comments, Products, and Thumbnails. Each collection has its own set of fields to store specific information related to comments, products, and thumbnails respectively.
