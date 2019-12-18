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
    isAuthenticated,
    HiveController.put
  ),
  app.delete('/hives/:hiveId',
    isAuthenticated,
    HiveController.remove
  ),
  app.post('/hives',
    isAuthenticated,
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
    isAuthenticated,
    BookkeepingController.put
  ),
  app.delete('/bookkeepings/:bookkeepingId',
    isAuthenticated,
    BookkeepingController.remove
  ),
  app.post('/bookkeepings',
    isAuthenticated,
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
    isAuthenticated,
    FeedingController.put
  ),
  app.delete('/feedings/:feedingId',
    isAuthenticated,
    FeedingController.remove
  ),
  app.post('/feedings',
    isAuthenticated,
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
    isAuthenticated,
    InspectionController.put
  ),
  app.delete('/inspections/:inspectionId',
    isAuthenticated,
    InspectionController.remove
  ),
  app.post('/inspections',
   isAuthenticated,
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
    isAuthenticated,
    TreatmentController.put
  ),
  app.delete('/treatments/:treatmentId',
    isAuthenticated,
    TreatmentController.remove
  ),
  app.post('/treatments',
    isAuthenticated,
    TreatmentController.post
  ),
  // honeycollection
  app.get('/honeycollections',
    isAuthenticated,
    HoneyCollectionController.index
  ),
  app.get('/honeycollections/:honeycollectionId',
    isAuthenticated,
    HoneyCollectionController.show
  ),
  app.put('/honeycollections/:honeycollectionId',
    isAuthenticated,
    HoneyCollectionController.put
  ),
  app.delete('/honeycollections/:honeycollectionId',
    isAuthenticated,
    HoneyCollectionController.remove
  ),
  app.post('/honeycollections',
    isAuthenticated,
    HoneyCollectionController.post
  )
}
