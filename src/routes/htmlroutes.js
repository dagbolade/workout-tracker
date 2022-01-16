const path = require("path");

module.exports = function(app) {

  app.set("view engine", "ejs");
  
    app.get("/exercise", function(req, res) {
      res.render(path.join(__dirname, "../views/exercise.ejs"));
    });
  
    app.get("/stats", function(req, res) {
      res.render(path.join(__dirname, "../views/stats.ejs"));
    });
  
  };