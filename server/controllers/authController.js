const mongoose = require('mongoose')
const passport =  require('passport')
let User = require('../models/user')

let userController = {};

userController.home = (req, res) => {
  res.json('homepage')
}

userController.register = (req, res) => {
  User.register(new User({ username : req.body.username }), req.body.password, (err, user) => {

    if (err) {
        console.log(err.message);
        return res.send(err);
    } else {
        res.send({
            success: true,
            user: user
        });
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
  // passport.authenticate('local')(req, res, () => {
  //   res.redirect('/')
  // });
  User.authenticate()(req.body.username, req.body.password, (err, user, options) => {
    if (err) {
      return next(err)
    }
    if(!user) {
      res.send({
        message: options.message,
        success: false
      })
    }else {
      req.login(user,  (err) => {
        res.send({
          success: true,
          user: user
        })
      })
    }
  })


}

module.exports = userController;
