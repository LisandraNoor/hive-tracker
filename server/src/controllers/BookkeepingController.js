const {Bookkeeping} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query

      const bookkeepings = await Bookkeeping.findAll({
        where: {
          UserId: userId
        }
      })
      res.send(bookkeepings)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get all bookkeeping data'
      })
    }
  },
  async post (req, res) {
    try {
      const bookkeeping = await Bookkeeping.create(req.body)
      res.send(bookkeeping)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to create a bookkeeping input'
      })
    }
  },
  async show (req, res) {
    try {
      const bookkeeping = await Bookkeeping.findByPk(req.params.bookkeepingId)
      res.send(bookkeeping)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get bookkeeping'
      })
    }
  },
  async put (req, res) {
    try {
      const bookkeeping = await Bookkeeping.update(req.body, {
        where: {
          id: req.params.bookkeepingId
        }
      })
      res.send(bookkeeping)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to update a bookkeeping'
      })
    }
  }
}