var path = require("path");
var home = "/../public/home.html";
var survey = "/../public/survey.html";

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, home));
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, home));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, survey));
    });
}
