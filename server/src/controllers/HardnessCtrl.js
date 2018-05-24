const {Hardness} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let hardness = null
      const search = req.params.name
      if (search) {
        hardness = await Hardness.findAll({
          where: {
            $or: [
              'HardnessCode'
            ].map(key => ({
              [key]: {
                $eq: `${search}`
              }
            }))
          }
        })
      } else {
        hardness = await Hardness.findAll({
          limit: 20
        })
      }
      res.send(hardness)
    } catch (err) {
      console.log(err)

      res.status(500).send({
        error: 'an error has occured trying to fetch the Hardness'
      })
    }
  }
}
