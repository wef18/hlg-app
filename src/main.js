import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'mint-ui/lib/style.css'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// 导入 MUI 的样式表
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


import { Header, Swipe, SwipeItem, Search } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Search.name, Search)


/**
 * 全局过滤器
 */
Vue.filter('date', (val) => {     
  //把bigint转换为yyyy-mm-dd
  var date = new Date(val)
  var yy = date.getFullYear()
  var mm = date.getMonth() + 1
  mm = mm > 9 ? mm : '0'+mm
  var dd = date.getDate()
  dd = dd > 9 ? dd : '0'+dd
  return yy+'-'+mm+'-'+dd
})
Vue.filter('datetime', (val) => {
  //把bigint转换为yyyy-mm-dd hh:mm:ss
  var date = new Date(val)
  var yy = date.getFullYear()
  var mm = date.getMonth() + 1
  mm = mm > 9 ? mm : '0'+mm
  var dd = date.getDate()
  dd = dd > 9 ? dd : '0'+dd
  var hh = date.getHours()
  hh = hh > 9 ? hh : '0'+hh
  var mi = date.getMinutes()
  mi = mi > 9 ? mi : '0'+mi
  var ss = date.getSeconds()
  ss = ss > 9 ? ss : '0'+ss
  return yy+'-'+mm+'-'+dd+' '+hh+':'+mi+':'+ss
})
Vue.filter('currency', (val) => {
  //把int转换为￥xx.yy
  return  '￥' + val.toFixed(2)
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
