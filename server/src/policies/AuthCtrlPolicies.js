const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ).required(),
      group: Joi.any(),
      fullname: Joi.any(),
      areacode: Joi.string().alphanum().min(3).max(3).required()
    }
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email': res.status(400).send({
          error: 'you must provide valid email address'
        })
        break;
        case 'password': res.status(400).send({
          error: 'failed to meet password rule'
        })
        break;
        default: res.status(400).send({
          error: error.details[0].message
        })
      }
    } else {
      next()
    }
  }
}
