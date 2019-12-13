const {Treatment} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {userId, hiveId} = req.query

      const treatments = await Treatment.findAll({
        where: {
          UserId: userId,
          HiveId: hiveId
        }
      })
      res.send(treatments)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to getting all treatments'
      })
    }
  },
  async post (req, res) {
    try {
      const treatment = await Treatment.create(req.body)
      res.send(treatment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to create a treatment'
      })
    }
  },
  async show (req, res) {
    try {
      const treatment = await Treatment.findByPk(req.params.treatmentId)
      res.send(treatment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get treatment'
      })
    }
  },
  async put (req, res) {
    try {
      const treatment = await Treatment.update(req.body, {
        where: {
          id: req.params.treatmentId
        }
      })
      res.send(treatment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to update a treatment'
      })
    }
  }
}