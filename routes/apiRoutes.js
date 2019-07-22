var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/quiz", function(req, res) {
    db.Questions.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/results", function(req, res) {
    db.political_quiz_db.create(req.body).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

};
