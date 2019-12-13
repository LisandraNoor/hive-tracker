const {HoneyCollection} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const honeycollection = await HoneyCollection.findAll({
        limit:  100
      })
      res.send(honeycollection)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get all honeycollection data'
      })
    }
  },
  async post (req, res) {
    try {
      const honeycollection = await HoneyCollection.create(req.body)
      res.send(honeycollection)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to create a honeycollection input'
      })
    }
  },
  async show (req, res) {
    try {
      const honeycollection = await HoneyCollection.findByPk(req.params.honeycollectionId)
      res.send(honeycollection)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get honeycollection'
      })
    }
  },
  async put (req, res) {
    try {
      const honeycollection = await HoneyCollection.update(req.body, {
        where: {
          id: req.params.honeycollectionId
        }
      })
      res.send(honeycollection)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to update a honeycollection'
      })
    }
  }
}