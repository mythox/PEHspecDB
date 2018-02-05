const config = require('../config/config')
const db = require('../models/db')

module.exports = {
  frontpage (req, res) {
    res.send({
      Contact: "Steven Tse",
      Number: "2942 0532"
    })
  },
  async listAllSpec (req, res) {
    let sql = 'SELECT * FROM materials'
    let query = await db.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send(result)
    })
  },
  async listOneSpec (req, res) {
    let sql = `SELECT * FROM materials WHERE materialnum = '${req.params.name}'`
    let query = await db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send(result)
    })
  }
}
