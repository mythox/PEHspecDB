const {Dimension} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let dimensions = null
      const search = req.params.name
      if (search) {
        dimensions = await Dimension.findAll({
          where: {
            $or: [
              'DimensionNum'
            ].map(key => ({
              [key]: {
                $eq: `${search}`
              }
            }))
          }
        })
      } else {
        dimensions = await Dimension.findAll({
          limit: 20
        })
      }
      res.send(dimensions)
    } catch (err) {
      console.log(err)

      res.status(500).send({
        error: 'an error has occured trying to fetch the Dimension'
      })
    }
  }
}
