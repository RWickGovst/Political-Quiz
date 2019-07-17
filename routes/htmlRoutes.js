var db = require("../models");

module.exports = function (app) {
  app.post('/api/newUser', (req, res) => {
    //get id from the post
    //create cookie with that id
    //redirect to /user/:userId/quiz/1
  })

  // Load index page
  app.get('/user/:userId')
  //find first question with answer null
  //redirect to /get/user/:userId/quiz/:questionId

  app.get("/user/:userId/quiz/:questionId", function (req, res) {
    //is cookie userId = req.params.userId?
    //if yes
    //db.Questions.findOne({ where: {
    // id: req.params.questionId
    //}).then(data => {
    // res.rend('question', {
    //data
    //
    //})
    //})
    //if no
    //res.redirect('/')
    //}})
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // .put(`/user/${userId}/quiz/${req.params.questionId})
  //update the answer to question id in user table
  //if question 20
  // redirect to results
  //else redirect to next question
  // var nextQ = req.params.questionId ++;
  // res.redirect('/user/' + userId + '/quiz/' + nextQ)


  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
