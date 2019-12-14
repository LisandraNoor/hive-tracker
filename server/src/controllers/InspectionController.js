const {Inspection, Hive} = require('../models')

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

      const inspections = await Inspection.findAll({
        where: where,
        includes: [
          {
            model: Hive
          }
        ]
      })
      res.send(inspections)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to getting all inspections'
      })
    }
  },
  async post (req, res) {
    try {
      const inspection = await Inspection.create({
        date: req.body.inspection.date,
        attitude: req.body.inspection.attitude,
        strength: req.body.inspection.strength,
        feedAmount: req.body.inspection.feedAmount,
        frameCoverage: req.body.inspection.frameCoverage,
        queen: req.body.inspection.queen,
        queenColor: req.body.inspection.queenColor,
        stringFrame: req.body.inspection.stringFrame,
        bottomFrame: req.body.inspection.bottomFrame,
        fullFrame: req.body.inspection.fullFrame,
        removedFramed: req.body.inspection.removedFramed,
        degrees: req.body.inspection.degrees,
        weather: req.body.inspection.weather,
        eggs: req.body.inspection.eggs,
        eggAmount: req.body.inspection.eggAmount,
        disease: req.body.inspection.disease,
        diseaseType: req.body.inspection.diseaseType,
        furros: req.body.inspection.furros,
        furrosAmount: req.body.inspection.furrosAmount,
        haue: req.body.inspection.haue,
        haueAmount: req.body.inspection.haueAmount,
        UserId: req.body.userId,
        HiveId: req.body.hiveId
      })
      res.send(inspection)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to create a inspection'
      })
    }
  },
  async show (req, res) {
    try {
      const inspection = await Inspection.findByPk(req.params.inspectionId)
      res.send(inspection)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get inspection'
      })
    }
  },
  async put (req, res) {
    try {
      const inspection = await Inspection.update(req.body, {
        where: {
          id: req.params.inspectionId
        }
      })
      res.send(inspection)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to update a inspection'
      })
    }
  },
  async remove (req, res) {
    try {
      const userId = req.user.id
      const {inspectionId} = req.params
      const inspection = await Inspection.findOne({
        where: {
          id: inspectionId,
          UserId: userId
        }
      })
      await inspection.destroy()
      res.send(inspection)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the inspection'
      })
    }
  }
}