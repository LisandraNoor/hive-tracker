const {Hive} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
      
      const hives = await Hive.findAll({
        where: {
          UserId: userId
        }
      })
      res.send(hives)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get all hives'
      })
    }
  },
  async show (req, res) {
    try {
      const hive = await Hive.findByPk(req.params.hiveId)
      res.send(hive)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get hive'
      })
    }
  },
  async post (req, res) {
    try {
      const hive = await Hive.create(req.body)
      res.send(hive)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to create a hive'
      })
    }
  },
  async put (req, res) {
    try {
      const hive = await Hive.update(req.body, {
        where: {
          id: req.params.hiveId
        }
      })
      res.send(hive)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to update a hive'
      })
    }
  }
}