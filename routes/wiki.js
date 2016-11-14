"use strict";
const express = require('express');
const router = express.Router();
const models = require('../models/')
const Page = models.Page; 
const User = models.User; 



router.get('/',(req, res, next) => {
  res.redirect('/');
});

router.get("/add", (req, res, next) => {
  res.render("addpage");
});


router.post('/',(req, res, next) => {
  console.log(req.body);

  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
  .catch( err => {
    let message = err.errors[0]['message'];
    if(err.status === undefined) {
      err.status = 404;
    }
    res.render('error', { message: message, error: err })
  });
});










module.exports = router;