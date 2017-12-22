import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang' // 国际化
import '@/icons' // icon
import '@/permission' // 权限
import './errorLog'// error log

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
  size: 'small'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
