const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const secret = require('./config')

var User = require('../models/user')

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
