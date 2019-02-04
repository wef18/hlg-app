import Vue from 'vue'
import Router from 'vue-router'
import Indexs from './views/Index.vue'
import Classify from './views/Classify.vue'
import Shopping from './views/Shopping.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Indexs },
    { path: '/classify', component: Classify },
    { path: '/shopping', component: Shopping },
    { path: '/home', component: Home },
    { path: '*', component: NotFound }
  ]
})
