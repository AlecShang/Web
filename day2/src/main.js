import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from '../node_modules/vue/dist/vue.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './js/App.vue'
import router from './js/router.js'

var vm1 = new Vue({

    el: '#app1',
    data: {
        a: 1
    },
    methods: {},
    components: {},
    // function (createElements) { // 可以使用箭头函数c=>c(app)
    //     return createElements(login)
    // }
    render: c => c(App),
    router: router,

})