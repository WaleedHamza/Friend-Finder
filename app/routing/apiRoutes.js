var path = require('path');
var friends = require('../data/friends');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log('inside the get function apiRouts.js', friends)
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log('inside the post function apiRouts.js', friends)
        return res.json(friends);

    });

}