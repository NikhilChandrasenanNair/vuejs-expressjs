const mongoose = require('mongoose')
const passport =  require('passport')
var User = require('../models/user')

var userController = {};

userController.home = (req, res) => {
  res.json('homepage')
}

userController.register = (req, res) => {
  User.register(new User({ username : req.body.username }), req.body.password, (err, user) => {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, () => {
      res.redirect('/')
    });
  });
}

// userController.post('/login', passport.authenticate('local'), function(req, res) {
//       res.redirect('/');
//   });

userController.login = (req, res) => {
  passport.authenticate('local')(req, res, () => {
    res.redirect('/')
  });
}

module.exports = userController;
