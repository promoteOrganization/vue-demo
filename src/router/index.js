import Vue from 'vue'
import Router from 'vue-router'
import addManufactionView from '../views/addManufactionView.vue'
import manufactionTableView from '../views/manufactionTableView.vue'
import loginView from '../views/loginView.vue'

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
    },
    {
      path: '/login',
      component: loginView
    }
  ]
})
