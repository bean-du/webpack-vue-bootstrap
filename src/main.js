import Vue from 'vue'
import App from './App.vue';
import Hello from './Hello.vue';
require('jquery');

new Vue({
    el: '#app',
    template : '<App/>',
    components : { App },
    // render: h => h(App)
})

