var path = require("path");
var htmlHome = "/../public/home.html";
var htmlSurvey = "/../public/survey.html";

module.exports = function(app) {
  
  app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, htmlHome ));
  })

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, htmlSurvey));
  })
}
