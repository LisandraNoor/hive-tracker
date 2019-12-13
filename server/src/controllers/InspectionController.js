const {Inspection} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const inspections = await Inspection.findAll({
        limit:  100
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
      const inspection = await Inspection.create(req.body)
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
  }
}