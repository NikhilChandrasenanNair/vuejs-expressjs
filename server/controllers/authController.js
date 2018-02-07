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

userController.login = (req, res) => {

  User.authenticate()(req.body.username, req.body.password, (err, user, options) => {
    if (err) {
      console.log('err---',err);
      return next(err)
    }
    if(!user) {
      console.log('!user', options.message);
      res.send({
        status: 403,
        message: options.message,
        success: false
      })
    }else {
      req.login(user,  (err) => {
        console.log('user -- ',user);
        res.send({
          success: true,
          user: user
        })
      })
    }
  })


}

module.exports = userController;
