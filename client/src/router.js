import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './components/Register'
import Login from './components/Login'
import BookKeeping from './components/BookKeeping'
import Search from './components/Search'
import Hives from './components/Hives'
import HiveDetails from './components/HiveDetails'
import Treatments from './components/Treatments'
import Feedings from './components/Feedings'
import Inspections from './components/Inspections'
import Inspection from './components/Inspection'

import AddHoneyCollection from './components/details/AddHoneyCollection'
import AddInspection from './components/details/AddInspection'
import AddTreatment from './components/details/AddTreatment'
import AddFeeding from './components/details/AddFeeding'
import AddBookkeeping from './components/details/AddBookkeeping'
import AddHive from './components/details/AddHive'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    {
      path: '/bookkeeping',
      name: 'bookkeeping',
      component: BookKeeping
    },
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
      path: '/inspection/:inspectionId',
      name: 'inspection',
      component: Inspection
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hivedetails/addinspection',
      name: 'addinspection',
      component: AddInspection
    },
    {
      path: '/hivedetails/addtreatment',
      name: 'addtreatment',
      component: AddTreatment
    },
    {
      path: '/addhoneycollection',
      name: 'addhoneycollection',
      component: AddHoneyCollection
    },
    {
      path: '/hivedetails/addfeeding',
      name: 'addfeeding',
      component: AddFeeding
    },
    {
      path: '/bookkeeping/addbookkeeping',
      name: 'addbookkeeping',
      component: AddBookkeeping
    },
    {
      path: '/feedings',
      name: 'feedings',
      component: Feedings
    },
    {
      path: '/treatments',
      name: 'treatments',
      component: Treatments
    },
    {
      path: '/inspections',
      name: 'inspections',
      component: Inspections
    },
    {
      path: '/addhive',
      name: 'addhive',
      component: AddHive
    }
  ]
})
