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
    let sql = 'SELECT * FROM materials ORDER BY materialnum'
    let query = await db.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
  },
  async listOneSpec (req, res) {
    let sql = `SELECT * FROM materials WHERE materialnum = '${req.params.name}' ORDER BY materialnum`
    let query = await db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
  },
  async listAllNewSpec (req, res) {
    let sql = 'SELECT * FROM wkmaterials ORDER BY materialnum'
    let query = await db.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
  },
  async listOneNewSpec (req, res) {
    let sql = `SELECT * FROM wkmaterials WHERE materialnum = '${req.params.name}' ORDER BY materialnum`
    let query = await db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
  }
}
