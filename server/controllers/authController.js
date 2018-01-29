const mongoose = require('mongoose')
const passport =  require('passport')
var User = require('../models/user')

var userController = {};

userController.home = (req, res) => {
  res.json('homepage')
}

userController.register = (req, res) => {
  // res.json(`${req.body.email} Registered succesfully`)
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
}

// userController.doRegister = function(req, res) {
//   User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
//     if (err) {
//       return res.render('register', { user : user });
//     }
//
//     passport.authenticate('local')(req, res, function () {
//       res.redirect('/');
//     });
//   });
// };

module.exports = userController;
