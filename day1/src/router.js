import VueRouter from 'vue-router'
import register from './js/main/register.vue'
import exit from './js/main/exit.vue'

var router = new VueRouter({
    routers: [{
        path: '/register',
        component: register,
        children: [{
            path: '/register',
            component: register,
        }]
    }, {
        path: '/exit',
        component: exit,
    }]
})


export default router