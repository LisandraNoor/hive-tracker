const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const HiveController = require('./controllers/HiveController')
const BookkeepingController = require('./controllers/BookkeepingController')
const FeedingController = require('./controllers/FeedingController')
const InspectionController = require('./controllers/InspectionController')
const TreatmentController = require('./controllers/TreatmentController')


module.exports = (app) => {
  app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  ),
  app.post('/login',
    AuthenticationController.login
  ),
  app.get('/hives',
    HiveController.index
  ),
  app.post('/hives',
    HiveController.post
  ),
  app.get('/bookkeepings',
    BookkeepingController.index
  ),
  app.post('/bookkeepings',
    BookkeepingController.post
  ),
  app.get('/feedings',
    FeedingController.index
  ),
  app.post('/feedings',
    FeedingController.post
  ),
  app.get('/inspections',
    InspectionController.index
  ),
  app.post('/inspections',
    InspectionController.post
  ),
  app.get('/treatments',
    TreatmentController.index
  ),
  app.post('/treatments',
    TreatmentController.post
  )
}
