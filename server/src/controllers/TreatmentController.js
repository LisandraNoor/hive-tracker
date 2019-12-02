const {Treatment} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const treatments = await Treatment.findAll({
        limit:  100
      })
      res.send(treatments)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to getting all songs'
      })
    }
  },
  async post (req, res) {
    try {
      const treatment = await Treatment.create(req.body)
      res.send(treatment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to create a song'
      })
    }
  }
}