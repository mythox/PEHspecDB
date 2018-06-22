const {MatProp, MsProp, MsType, Procurespecitem, Procurespecdoc} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let matProp = null
      const search = req.params.name
      if (search) {
        matProp = await MatProp.findAll({
          where: {
            MaterialNum: {
              $eq: [search]
            }
          },
          attributes: ['RefNum', 'OptionNum'],
          include: [{
            model: MsProp,
            as: 'Prop',
            attributes: ['MSPropDesc'],
          },{
            model: MsType,
            as: 'Type',
            attributes: ['MSTitle'],
          },{
            model: Procurespecitem,
            as: 'SpecItem',
            attributes: ['MsrUnit', 'MinVal', 'MaxVal', 'Remark', 'Exception']
          },{
            model: Procurespecdoc,
            as: 'SpecDoc',
            attributes: ['DocContent']
          }]
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
