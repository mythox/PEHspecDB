const {AlloyCat} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let alloycats = null
      const search = req.params.name
      if (search) {
        alloycats = await AlloyCat.findAll({
          where: {
            $or: [
              'AlloyCat'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        alloycats = await AlloyCat.findAll({
          limit: 20
        })
      }
      res.send(alloycats)
    } catch (err) {
      console.log(err)

      res.status(500).send({
        error: 'an error has occured trying to fetch the alloycats'
      })
    }
  }
}
