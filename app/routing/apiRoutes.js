var path = require('path');
var friends = require('../data/friends');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        // console.log('inside the get function apiRouts.js', friends)
        return res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        console.log('inside the post function apiRouts.js', req.body);


        //no idea whats is going on here
        var newFriend = req.body;
        var newFriendScore =req.body.scores;

        console.log(newFriend);
        console.log(newFriendScore);
        var diffrence;
        var match ={
            name: null,
            photo: null
        }

        var lowestDif= 1000000000;

    for (i = 0 ; i < friends.length; i++){
        diffrence = 0;
        for (j = 0 ; j < friends[i].scores.length; j++){
            diffrence += Math.abs(friends[i].scores[j] - newFriendScore[j]);
        }
        //end of no idea of whats going on here

        if (diffrence < lowestDif) {
            match.name = friends[i].name;
            match.photo = friends[i].photo;
            lowestDif = diffrence;
        }
    }
        return res.json(match);
    });
}