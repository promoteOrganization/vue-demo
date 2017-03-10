import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '../views/IndexView.vue'
import OtherView from '../views/OtherView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexView
    },
    {
      path: '/other',
      component: OtherView
    }
  ]
})
