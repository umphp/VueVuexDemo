import Vue from 'vue'
import App from './App.vue'

import Loading from './components/loading.vue'
import store from './store/'

Vue.use(Loading)

new Vue({
    store,
    el: '#app',
    render: h => h(App)
})