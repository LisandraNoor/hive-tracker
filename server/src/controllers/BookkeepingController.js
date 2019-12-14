const {Bookkeeping} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id

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
      const userId = req.body.userId
      const bookkeeping = await Bookkeeping.create({
        date: req.body.bookkeeping.date,
        name: req.body.bookkeeping.name,
        type: req.body.bookkeeping.type,
        amount: req.body.bookkeeping.amount,
        UserId: userId
      })
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
  },
  async remove (req, res) {
    try {
      const userId = req.user.id
      const {bookkeepingId} = req.params
      const bookkeeping = await Bookkeeping.findOne({
        where: {
          id: bookkeepingId,
          UserId: userId
        }
      })
      await bookkeeping.destroy()
      res.send(bookkeeping)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      })
    }
  }
}