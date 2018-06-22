const {MsProp} = require('../models')
const {Op} = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let msProp = null
      const search = req.params.name
      if (search) {
        msProp = await MsProp.findAll({
          where: {
            MsType: {
              [Op.or]: [search]
            }
          }
        })
      } else {
        msProp = await MsProp.findAll({
          limit: 50
        })
      }
      res.send(msProp)
    } catch (err) {
      console.log(err)

      res.status(500).send({
        error: 'an error has occured trying to fetch the msProp'
      })
    }
  }
}
