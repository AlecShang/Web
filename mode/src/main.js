import Vue from '../node_modules/vue/dist/vue.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './js/App.vue'
import router from './router.js'

var vm1 = new Vue({

    el: '#app',
    data: {

    },
    methods: {},
    components: {},
    // function (createElements) { // 可以使用箭头函数c=>c(app)
    //     return createElements(login)
    // }
    render: c => c(App),
    router: router,

})