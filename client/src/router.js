import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register'
import Login from './views/Login'
import BookKeepings from './views/BookKeepings'
import Search from './views/Search'
import Hives from './views/Hives'
import Treatments from './views/Treatments'
import Feedings from './views/Feedings'
import Inspections from './views/Inspections'
import HoneyCollections from './views/HoneyCollections'
// view
import Inspection from './views/view/Inspection'
import HiveDetails from './views/view/HiveDetails'
// create
import AddHoneyCollection from './views/create/AddHoneyCollection'
import AddInspection from './views/create/AddInspection'
import AddTreatment from './views/create/AddTreatment'
import AddFeeding from './views/create/AddFeeding'
import AddBookkeeping from './views/create/AddBookkeeping'
import AddHive from './views/create/AddHive'
// edit
import EditHoneyCollection from './views/edit/EditHoneyCollection'
import EditInspection from './views/edit/EditInspection'
import EditTreatment from './views/edit/EditTreatment'
import EditFeeding from './views/edit/EditFeeding'
import EditBookkeeping from './views/edit/EditBookkeeping'
import EditHive from './views/edit/EditHive'

import TestingFilter from './views/TestingFilter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/testingFilter',
      name: 'testingFilter',
      component: TestingFilter
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    /* {
      path: '/login',
      name: 'login',
      component: Login
    }, */
    // hive
    {
      path: '/hives',
      name: 'hives',
      component: Hives
    },
    {
      path: '/hives/:hiveId',
      name: 'hivedetails',
      component: HiveDetails
    },
    {
      path: '/addhive',
      name: 'addhive',
      component: AddHive
    },
    {
      path: '/hives/:hiveId/edit',
      name: 'edithive',
      component: EditHive
    },
    // treatment
    {
      path: '/treatments',
      name: 'treatments',
      component: Treatments
    },
    {
      path: '/hives/:hiveId/addtreatment',
      name: 'addtreatment',
      component: AddTreatment
    },
    {
      path: '/hives/:hiveId/treatments/:treatmentId/edit',
      name: 'edittreatment',
      component: EditTreatment
    },
    // bookkeeping
    {
      path: '/bookkeepings',
      name: 'bookkeepings',
      component: BookKeepings
    },
    {
      path: '/bookkeepings/addbookkeeping',
      name: 'addbookkeeping',
      component: AddBookkeeping
    },
    {
      path: '/bookkeepings/:bookkeepingId/edit',
      name: 'editbookkeeping',
      component: EditBookkeeping
    },
    // inspection
    {
      path: '/inspections',
      name: 'inspections',
      component: Inspections
    },
    {
      path: '/hives/:hiveId/inspections/:inspectionId',
      name: 'inspection',
      component: Inspection
    },
    {
      path: '/hives/:hiveId/addinspection',
      name: 'addinspection',
      component: AddInspection
    },
    {
      path: '/hives/:hiveId/inspections/:inspectionId/edit',
      name: 'editinspection',
      component: EditInspection
    },
    // feeding
    {
      path: '/feedings',
      name: 'feedings',
      component: Feedings
    },
    {
      path: '/hives/:hiveId/addfeeding',
      name: 'addfeeding',
      component: AddFeeding
    },
    {
      path: '/hives/:hiveId/feedings/:feedingId/edit',
      name: 'editfeeding',
      component: EditFeeding
    },
    // honeycollection
    {
      path: '/honeycollections',
      name: 'honeycollections',
      component: HoneyCollections
    },
    {
      path: '/honeycollections/addhoneycollection',
      name: 'addhoneycollection',
      component: AddHoneyCollection
    },
    {
      path: '/honeycollections/:honeycollectionId/edit',
      name: 'edithoneycollection',
      component: EditHoneyCollection
    }
  ]
})
