const joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      username: joi.string().alphanum().min(3).max(30).required(),
      password: joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
    }

    const {error, value} = joi.validate(req.body, schema)
    if(error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'You must provide a valid username address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must be min of 8 and max of 32 characters length'
          })
          break
        default:
        res.status(400).send({
          error: 'Invalid registration information'
        })
      }
    } else {
      next()
    }
  }
}
