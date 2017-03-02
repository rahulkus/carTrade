// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('vue-swipe/dist/vue-swipe.css')
require('./assets/app.css')

Vue.config.productionTip = false

const { Swipe, SwipeItem } = require('vue-swipe')

var navComponent = Vue.component('nav-component', require('./components/nav.vue'))
var footerComponent = Vue.component('footer-component', require('./components/footer.vue'))
var swipe = Vue.component('swipe', Swipe)
var swipeItem = Vue.component('swipe-item', SwipeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App, navComponent, footerComponent, swipe, swipeItem}
})
