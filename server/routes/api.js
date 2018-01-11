const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var fs = require('fs')
var path = require('path')
var rainDataPath = path.join(__dirname, '../../src/assets/json/rain_data.json');


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Read from JSON files
router.get('/rainData', (req, res) => {
    fs.readFile(rainDataPath, 'utf8', function (err, data) {
        if (err) sendError(err, res);
        
        var obj = JSON.parse(data);
        response.data = obj;
        res.json(response);
    });
});


// Connect to MongoDB process
// const connection = (closure) => {
//     return MongoClient.connect('mongodb://localhost:19000/mean', (err, db) => {
//         if (err) return console.log(err);
//         closure(db);
//     });
// };
// 
// Get database collections from MongoDB
// router.get('/users', (req, res) => {
//     connection((db) => {
//         db.collection('users')
//             .find()
//             .toArray()
//             .then((users) => {
//                 response.data = users;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });
// router.get('/posts', (req, res) => {
//     connection((db) => {
//         db.collection('userPosts')
//             .find()
//             .toArray()
//             .then((userPosts) => {
//                 response.data = userPosts;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });


module.exports = router;