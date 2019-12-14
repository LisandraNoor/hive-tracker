const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const HiveController = require('./controllers/HiveController')
const BookkeepingController = require('./controllers/BookkeepingController')
const FeedingController = require('./controllers/FeedingController')
const InspectionController = require('./controllers/InspectionController')
const TreatmentController = require('./controllers/TreatmentController')
const HoneyCollectionController = require('./controllers/HoneyCollectionController')

const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  // user
  app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  ),
  app.post('/login',
    AuthenticationController.login
  ),
  // hives
  app.get('/hives',
    isAuthenticated,
    HiveController.index
  ),
  app.get('/hives/:hiveId',
    isAuthenticated,
    HiveController.show
  ),
  app.put('/hives/:hiveId',
    HiveController.put
  ),
  app.delete('/hives/:hiveId',
    HiveController.remove
  ),
  app.post('/hives',
    HiveController.post
  ),
  // bookkeeping
  app.get('/bookkeepings',
    isAuthenticated,
    BookkeepingController.index
  ),
  app.get('/bookkeepings/:bookkeepingId',
    isAuthenticated,
    BookkeepingController.show
  ),
  app.put('/bookkeepings/:bookkeepingId',
    BookkeepingController.put
  ),
  app.delete('/bookkeepings/:bookkeepingId',
    BookkeepingController.remove
  ),
  app.post('/bookkeepings',
    BookkeepingController.post
  ),
  // feeding
  app.get('/feedings',
    isAuthenticated,
    FeedingController.index
  ),
  app.get('/feedings/:feedingId',
    isAuthenticated,
    FeedingController.show
  ),
  app.put('/feedings/:feedingId',
    FeedingController.put
  ),
  app.delete('/feedings/:feedingId',
    FeedingController.remove
  ),
  app.post('/feedings',
    FeedingController.post
  ),
  // inspection
  app.get('/inspections',
    isAuthenticated,
    InspectionController.index
  ),
  app.get('/inspections/:inspectionId',
    isAuthenticated,
    InspectionController.show
  ),
  app.put('/inspections/:inspectionId',
    InspectionController.put
  ),
  app.delete('/inspections/:inspectionId',
    InspectionController.remove
  ),
  app.post('/inspections',
    InspectionController.post
  ),
  // treatment
  app.get('/treatments',
    isAuthenticated,
    TreatmentController.index
  ),
  app.get('/treatments/:treatmentId',
    isAuthenticated,
    TreatmentController.show
  ),
  app.put('/treatments/:treatmentId',
    TreatmentController.put
  ),
  app.delete('/treatments/:treatmentId',
    TreatmentController.remove
  ),
  app.post('/treatments',
    TreatmentController.post
  ),
  // honeycollection
  app.get('/honeycollections',
    isAuthenticated,
    HoneyCollectionController.index
  ),
  app.get('/honeycollections/:honeycollectionId',
    HoneyCollectionController.show
  ),
  app.put('/honeycollections/:honeycollectionId',
    HoneyCollectionController.put
  ),
  app.delete('/honeycollections/:honeycollectionId',
    HoneyCollectionController.remove
  ),
  app.post('/honeycollections',
    HoneyCollectionController.post
  )
}
