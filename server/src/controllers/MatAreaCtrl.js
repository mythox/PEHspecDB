const {MatArea, Area} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let matArea = null
      const search = req.params.name
      if (search) {
        matArea = await MatArea.findAll({
          where: {
            $or: [
              'MaterialNum'
            ].map(key => ({
              [key]: {
                $eq: `${search}`
              }
            }))
          },
          include: [{
            model: Area,
            attributes: ['AreaDesc', 'PrintSeq']
          }]
        })
      } else {
        matArea = await MatArea.findAll({
          limit: 20
        })
      }
      res.send(matArea)
    } catch (err) {
      console.log(err)

      res.status(500).send({
        error: 'an error has occured trying to fetch the MatArea'
      })
    }
  }
}
