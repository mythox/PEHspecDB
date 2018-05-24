const {MatProp} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let matProp = null
      const search = req.params.name
      if (search) {
        matProp = await MatProp.findAll({
          where: {
            $or: [
              'MaterialNum'
            ].map(key => ({
              [key]: {
                $eq: `${search}`
              }
            }))
          }
        })
      } else {
        matProp = await MatProp.findAll({
          limit: 20
        })
      }
      res.send(matProp)
    } catch (err) {
      console.log(err)

      res.status(500).send({
        error: 'an error has occured trying to fetch the MatProp'
      })
    }
  }
}
