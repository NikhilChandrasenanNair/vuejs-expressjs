const passport = require('passport')
const passportConf = require('../config/passport')
const auth = require("../controllers/AuthController.js")

module.exports = (app) => {
  // app.get('/', (req, res) => {
	//   res.json('home page from routes folder')
	// })
  //
	// app.post('/register', (req, res) => {
	//   res.send({
	//     message: `${req.body.email} Registered succesfully`
	//   })
	// })
  app.get('/', auth.home)

  app.post('/register', auth.register)
}
