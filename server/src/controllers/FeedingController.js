const {Feeding} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const feedings = await Feeding.findAll({
        limit:  100
      })
      res.send(feedings)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to getting all feedings'
      })
    }
  },
  async post (req, res) {
    try {
      const feeding = await Feeding.create(req.body)
      res.send(feeding)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to create a feeding'
      })
    }
  },
  async show (req, res) {
    try {
      const feeding = await Feeding.findByPk(req.params.feedingId)
      res.send(feeding)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get feeding'
      })
    }
  },
  async put (req, res) {
    try {
      const feeding = await Feeding.update(req.body, {
        where: {
          id: req.params.feedingId
        }
      })
      res.send(feeding)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to update a feeding'
      })
    }
  }
}