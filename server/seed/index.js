const {
  sequelize,
  User,
  Hive,
  Feeding,
  Treatment,
  Inspection,
  Honeycollection,
  Bookkeeping
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const hives = require('./hives.json')
const feedings = require('./feedings.json')
const treatments = require('./treatments.json')
const inspections = require('./inspections.json')
const honeycollections = require('./honeycollections.json')
const bookkeepings = require('./bookkeepings.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      hives.map(hive => {
        Hive.create(hive)
      })
    )

    await Promise.all(
      feedings.map(feeding => {
        Feeding.create(feeding)
      })
    )

    await Promise.all(
      treatments.map(treatment => {
        Treatment.create(treatment)
      })
    )

    await Promise.all(
      inspections.map(inspection => {
        Inspection.create(inspection)
      })
    )

    await Promise.all(
      honeycollections.map(honeycollection => {
        Honeycollection.create(honeycollection)
      })
    )

    await Promise.all(
      bookkeepings.map(bookkeeping => {
        Bookkeeping.create(bookkeeping)
      })
    )
  })