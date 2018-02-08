const passport = require('passport')
const passportConf = require('../config/passport')
const auth = require("../controllers/authController")
const authPolicy = require("../policies/authControllerPolicy")
const songsController = require("../controllers/songsController")

module.exports = (app) => {

  app.get('/', auth.home)

  app.post('/register', authPolicy.register, auth.register)
  app.post('/login', auth.login)

  app.get('/getSongs', songsController.getSongs)
  app.post('/saveSongs', songsController.saveSongs)
}
