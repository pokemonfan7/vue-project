import Vue from 'vue'
import App from './App.vue'
import router from '../core/router/router'
import store from '../core/store/store'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import '../core/style/index.less'
import 'element-ui/lib/theme-chalk/index.css'

import '../shared/directives/directives'
import '../shared/filters/filters'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueLazyload)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
