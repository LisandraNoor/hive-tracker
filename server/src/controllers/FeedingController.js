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
  }
}