import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import GUI from 'gs-ui'

import 'gs-ui/lib/theme/themes.css'

Vue.config.productionTip = false
Vue.use(GUI)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
