import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import { sync } from 'vuex-router-sync'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'
import MultiFiltersPlugin from './plugins/MultiFilters'
import './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(MultiFiltersPlugin)

sync(store, router)

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MMM/YYYY')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
