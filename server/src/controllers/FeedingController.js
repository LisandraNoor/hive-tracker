const {Feeding, Hive} = require('../models')

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
      const feedings = await Feeding.findAll({
        where: where,
        include: [
          {
            model: Hive
          }
        ]
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
      const feeding = await Feeding.create({
        date: req.body.feeding.date,
        type: req.body.feeding.type,
        amount: req.body.feeding.amount,
        UserId: req.body.userId,
        HiveId: req.body.hiveId
      })
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
  },
  async remove (req, res) {
    try {
      const userId = req.user.id
      const {feedingId} = req.params
      const feeding = await Feeding.findOne({
        where: {
          id: feedingId,
          UserId: userId
        }
      })
      await feeding.destroy()
      res.send(feeding)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the feeding'
      })
    }
  }
}