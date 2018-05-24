const {Material, WkMaterial} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let materials = null
      const search = req.params.name
      if (search) {
        materials = await Material.findAll({
          where: {
            $or: [
              'MaterialNum', 'AreaCode'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        materials = await Material.findAll({
          limit: 5000
        })
      }
      res.send(materials)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the materials'
      })
    }
  },

  async wkindex (req, res) {
    try {
      let wkmaterials = null
      const search = req.params.name
      if (search) {
        wkmaterials = await WkMaterial.findAll({
          where: {
            $or: [
              'MaterialNum', 'AreaCode'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        wkmaterials = await WkMaterial.findAll({
          limit: 5000
        })
      }
      res.send(wkmaterials)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the materials'
      })
    }
  }
}
