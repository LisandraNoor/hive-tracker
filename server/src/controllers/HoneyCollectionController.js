const {HoneyCollection} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id

      const honeycollection = await HoneyCollection.findAll({
        where: {
          UserId: userId
        }
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
      const userId = req.body.userId
      const honeycollection = await HoneyCollection.create({
        date: req.body.honeycollection.date,
        amount: req.body.honeycollection.amount,
        UserId: userId
      })
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
  },
  async remove (req, res) {
    try {
      const userId = req.user.id
      const {honeycollectionId} = req.params
      const honeycollection = await Hive.findOne({
        where: {
          id: honeycollectionId,
          UserId: userId
        }
      })
      await honeycollection.destroy()
      res.send(honeycollection)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}