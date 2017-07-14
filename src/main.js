import Vue from 'vue'
import App from './App.vue';
require('jquery');
import Vuex from 'vuex';
import store from '../vuex/store.js'
Vue.use(Vuex);

new Vue({
    el: '#app',
    store,
    template : '<App/>',
    components : { App },
    // render: h => h(App)
})

