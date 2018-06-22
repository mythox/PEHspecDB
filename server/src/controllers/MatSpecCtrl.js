const {Material, WkMaterial, AlloyCat, AlloyCode, Hardness, Dimension, Length} = require('../models')
const {Op} = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let materials = null
      const search = req.params.name
      if (search) {
        materials = await Material.findAll({
          where: {
            [Op.or]: [{
              MaterialNum: {
                [Op.like]: `%${search}%`
              }}, {
              AreaCode: {
                [Op.like]: `%${search}%`
              }}
            ]
          },
          include: [{
            model: AlloyCat,
            attributes: ['AlloyCatDesc']
          },{
            model: AlloyCode,
            attributes: ['AlloyStandardName']
          },{
            model: Hardness,
            attributes: ['Hardness']
          },{
            model: Dimension,
            attributes: ['Thickness', 'Width']
          },{
            model: Length,
            attributes: ['Length', 'LengthOrPlating']
          }]
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
            [Op.or]: [{
              MaterialNum: {
                [Op.like]: `%${search}%`
              }}, {
              AreaCode: {
                [Op.like]: `%${search}%`
              }}
            ]
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
