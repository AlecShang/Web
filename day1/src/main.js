import $ from 'jquery'
// import './css/index.css'
// import './css/index.less'
// 因为从modules里引用的,可以直接使用包的名称,省略node_modules
import 'bootstrap/dist/css/bootstrap.css'
import Vue from '../node_modules/vue/dist/vue.js'
// import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import login from './login.vue'
import router from './router.js'

var vm = new Vue({
    el: '#app',
    data: {
        msg: 'this is login data'
    },
    methods: {},
    render: function (createElements) { // 可以使用箭头函数c=>c(app)
        return createElements(login)
    },
    router
})


// Vue.component('myCom1', {
//     template: '<h1>组件4</h1>'
// })
// var vm2 = new Vue({
//     el: '#app2',
//     data: {
//         btnLogin: '登录',
//         btnRegister: '注册',
//         list: [1, 2, 3, 4, 5],
//         flag: false,
//         com1: 'login',
//         msg: '这是从父组件中传过来的'
//     },
//     methods: {
//         show() {
//             console.log(this.$refs.refShow.innerText)
//         }
//     },
//     components: {
//         login: {
//             template: "<h1> this is {{parentmsg}}</h1>",
//             props: ['parentmsg'],
//             data() {
//                 return {
//                     msg: 'login'
//                 }
//             },
//         },
//         register: {
//             template: "<h1> this is {{msg}}</h1>",
//             data() {
//                 return {
//                     msg: 'register'
//                 }
//             },
//         },
//     }
// })