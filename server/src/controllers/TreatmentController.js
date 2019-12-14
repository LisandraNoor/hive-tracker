const {Treatment, Hive} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {hiveId} = req.query
      const where = {
        UserId: userId
      }
      if (hiveId) {
        where.HiveId = hiveId
      }

      const treatments = await Treatment.findAll({
        where: where,
        includes: [
          {
            model: Hive
          }
        ]
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
      const treatment = await Treatment.create({
        date: req.body.treatment.date,
        type: req.body.treatment.type,
        amount: req.body.treatment.amount,
        UserId: req.body.userId,
        HiveId: req.body.hiveId
      })
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
  },
  async remove (req, res) {
    try {
      const userId = req.user.id
      const {treatmentId} = req.params
      const treatment = await Treatment.findOne({
        where: {
          id: treatmentId,
          UserId: userId
        }
      })
      await treatment.destroy()
      res.send(treatment)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the treatment'
      })
    }
  }
}