const passport = require('passport')
const passportConf = require('../config/passport')
const auth = require("../controllers/authController")
const authPolicy = require("../policies/authControllerPolicy")

module.exports = (app) => {

  app.get('/', auth.home)

  app.post('/register', authPolicy.register, auth.register)
  app.post('/login', auth.login)
}
