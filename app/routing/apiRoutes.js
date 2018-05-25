var path = require('path');
var friends = require('../data/friends');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var userDataScore = req.body.scores;
        var difference;
        var lowestDif = 10000;
        var match = {
            name: null,
            photo: null
        };

        for (var i = 0; i < friends.length; i++) {
            if (userData.name !== friends[i].name) {
                difference = 0;
                for (var j = 0; j < friends[i].scores.length; j++) {
                    difference += Math.abs(
                        parseInt(userDataScore[j]) - parseInt(friends[i].scores[j])
                    );
                }
                if (difference < lowestDif) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    lowestDif = difference;
                }
            }
        }
        return res.json(match);
    });
}