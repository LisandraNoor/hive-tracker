const {Hive} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      // const {feedingId} = req.query
      // const {treatmentId} = req.query
      // const {inspectionId} = req.query
      const where = {
        UserId: userId
      }
      /* if (feedingId) {
        where.FeedingId = feedingId
      }
      /* if (treatmentId) {
        where.TreatmentId = treatmentId
      }
      if (inspectionId) {
        where.InspectionId = inspectionId
      } */
      const hives = await Hive.findAll({
        where: where
        /*include: [
          {
            model: Feeding
            // model: Treatment,
            // model: Inspection
          }
        ]*/
      })
        /*.map(hive => hive.toJSON())
        .map(hive => _.extend(
          {},
          // hive.Feeding,
          hive
        ))*/
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
      const userId = req.body.userId
      
      const hive = await Hive.create({
        name: req.body.hive.name,
        type: req.body.hive.type,
        UserId: userId
      })
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
  },
  async remove (req, res) {
    try {
      const userId = req.user.id
      const {hiveId} = req.params
      const hive = await Hive.findOne({
        where: {
          id: hiveId,
          UserId: userId
        }
      })
      await hive.destroy()
      res.send(hive)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}