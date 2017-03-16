import Vue from 'vue'
import Router from 'vue-router'
import addManufactionView from '../views/addManufactionView.vue'
import manufactionTableView from '../views/manufactionTableView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: addManufactionView
    },
    {
      path: '/table',
      component: manufactionTableView
    }
  ]
})
