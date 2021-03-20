import Vue from 'vue'
import App from './App.vue'
import Like from './components/Like.vue'

Vue.config.productionTip = false
Vue.component('Like',Like)

new Vue({
  render: h => h(App),
}).$mount('#app')
