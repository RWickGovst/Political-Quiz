var db = require("../models");

module.exports = function (app) {
  app.post('/api/newUser', (req, res) => {
    //do a post to database db.user_results.(create?)
    //get id from the post
    // res.json({ id: result.insertId });
    //var id = res.id
    //redirect to `/user/${id}/quiz/1`
    // '/users/' + id + '/quiz/1'

  })

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
