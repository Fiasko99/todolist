import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$dataUrl = 'http://localhost:3000/todos'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
