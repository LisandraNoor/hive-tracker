const {Bookkeeping} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const bookkeepings = await Bookkeeping.findAll({
        limit:  100
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
  }
}