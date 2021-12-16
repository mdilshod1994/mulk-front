// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import './assets/css/style.css'
import './assets/css/pages.css'
import './assets/css/mobile-navbar.css'
import 'leaflet/dist/leaflet.css';
import './assets/css/developerPage.css'
import './assets/css/layouts.css'


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
