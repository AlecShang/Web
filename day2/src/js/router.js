import VueRouter from 'vue-router'
import register from './vue/register.vue'
import login from './vue/login.vue'
import pageLeft from './vue/pageLeft.vue'
import pageRight from './vue/pageRight.vue'

// const pageLeft = {
//     template: '<h1>this is left</h1>'
// }
const router = new VueRouter({
    mode: 'history', // history模式,默认是hash模式
    routes: [{
            path: '/login',
            component: login,
        },
        {
            path: '/register',
            component: register,
        },
        {
            path: '/pageLeft',
            component: pageLeft,
        },
        {
            path: '/pageRight',
            component: pageRight,
        }
    ]
})

export default router