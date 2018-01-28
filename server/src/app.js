const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose') // object relation mapper. Communicate directly to mongodb server
mongoose.Promise = require('bluebird')

const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')

const app = express()

const conf = require('../config/config')
// connect to mongodb server
const promise = mongoose.connect(conf.database, {
  promiseLibrary: require('bluebird')
})

promise.then(function () {
  console.log(`connection successful: ${conf.port}`)
}).catch(function (err) {
  console.log(err)
})

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: conf.secretKey,
  store: new MongoStore({url: conf.database, autoReconnect: true})
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('../routes/user')(app)

app.listen(process.env.PORT || 8081)
