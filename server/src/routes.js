const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const HiveController = require('./controllers/HiveController')
const BookkeepingController = require('./controllers/BookkeepingController')
const FeedingController = require('./controllers/FeedingController')
const InspectionController = require('./controllers/InspectionController')
const TreatmentController = require('./controllers/TreatmentController')
const HoneyCollectionController = require('./controllers/HoneyCollectionController')


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
    HiveController.index
  ),
  app.get('/hives/:hiveId',
    HiveController.show
  ),
  app.put('/hives/:hiveId',
    HiveController.put
  ),
  app.post('/hives',
    HiveController.post
  ),
  // bookkeeping
  app.get('/bookkeepings',
    BookkeepingController.index
  ),
  app.get('/bookkeepings/:bookkeepingId',
    BookkeepingController.show
  ),
  app.put('/bookkeepings/:bookkeepingId',
    BookkeepingController.put
  ),
  app.post('/bookkeepings',
    BookkeepingController.post
  ),
  // feeding
  app.get('/feedings',
    FeedingController.index
  ),
  app.get('/feedings/:feedingId',
    FeedingController.show
  ),
  app.put('/feedings/:feedingId',
    FeedingController.put
  ),
  app.post('/feedings',
    FeedingController.post
  ),
  // inspection
  app.get('/inspections',
    InspectionController.index
  ),
  app.get('/inspections/:inspectionId',
    InspectionController.show
  ),
  app.put('/inspections/:inspectionId',
    InspectionController.put
  ),
  app.post('/inspections',
    InspectionController.post
  ),
  // treatment
  app.get('/treatments',
    TreatmentController.index
  ),
  app.get('/treatments/:treatmentId',
    TreatmentController.show
  ),
  app.put('/treatments/:treatmentId',
    TreatmentController.put
  ),
  app.post('/treatments',
    TreatmentController.post
  ),
  // honeycollection
  app.get('/honeycollections',
    HoneyCollectionController.index
  ),
  app.get('/honeycollections/:honeycollectionId',
    HoneyCollectionController.show
  ),
  app.put('/honeycollections/:honeycollectionId',
    HoneyCollectionController.put
  ),
  app.post('/honeycollections',
    HoneyCollectionController.post
  )
}
