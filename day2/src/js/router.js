import VueRouter from 'vue-router'
import register from './vue/register.vue'
import login from './vue/login.vue'


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
    ]
})

export default router