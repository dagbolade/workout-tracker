const path = require("path");

module.exports = function(app) {

  app.set("view engine", "ejs");
  
    app.get("/exercise", function(req, res) {
      res.render(path.join(__dirname, "../views/exercise.ejs"));
    });
  
    app.get("/stats", function(req, res) {
      res.render(path.join(__dirname, "../views/stats.ejs"));
    });

    app.get("/login",(req,res)=>{
      res.render("login");
  });
  app.get("/register",(req,res)=>{
      res.render("register");
  });
  
  };