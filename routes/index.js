const express = require("express");
const router = express.Router();


const todos = ["Wash the Car", "Buy Bread"];

const completed =["Make Dinner"];

router.get("/", function (req, res) {
  res.render('list', {todos: todos , completed: completed});
});

router.post("/list", function (req, res) {
  todos.push(req.body.task);
  // console.log(todos);
  res.redirect('/');
});


router.post("/completed", function (req, res) {

    completed.push(todos.splice(todos.indexOf(req.body.button),1));
    res.redirect('/');
});


module.exports = router;
