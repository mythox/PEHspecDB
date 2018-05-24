const {Length} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let length = null
      const search = req.params.name
      if (search) {
        length = await Length.findAll({
          where: {
            $or: [
              'LengthCode'
            ].map(key => ({
              [key]: {
                $eq: `${search}`
              }
            }))
          }
        })
      } else {
        length = await Length.findAll({
          limit: 20
        })
      }
      res.send(length)
    } catch (err) {
      console.log(err)

      res.status(500).send({
        error: 'an error has occured trying to fetch the Length'
      })
    }
  }
}
