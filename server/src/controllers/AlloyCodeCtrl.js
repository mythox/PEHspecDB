const {AlloyCode} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let alloyCodes = null
      const search = req.params.name
      if (search) {
        alloyCodes = await AlloyCode.findAll({
          where: {
            $or: [
              'AlloyCode'
            ].map(key => ({
              [key]: {
                $eq: `${search}`
              }
            }))
          }
        })
      } else {
        alloyCodes = await AlloyCode.findAll({
          limit: 20
        })
      }
      res.send(alloyCodes)
    } catch (err) {
      console.log(err)

      res.status(500).send({
        error: 'an error has occured trying to fetch the AlloyCodes'
      })
    }
  }
}
