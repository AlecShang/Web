import VueRouter from 'vue-router'
import searchPage from './js/vue/searchPage.vue'
import addressPage from './js/vue/addressPage.vue'
import settingPage from './js/vue/settingPage.vue'
import mainPage from './js/vue/mainPage.vue'

// const pageLeft = {
//     template: '<h1>this is left</h1>'
// }
const router = new VueRouter({
    // mode: 'history', // history模式,默认是hash模式,开启后出现cannot get错误
    routes: [
        {
            path: '/',
            redirect: '/mainPage',
        },
        {
            path: '/mainPage',
            component: mainPage,
        },
        {
            path: '/searchPage',
            component: searchPage,
        },
        {
            path: '/addressPage',
            component: addressPage,
        },
        {
            path: '/settingPage',
            component: settingPage,
        },
        // {
        //     path: '/APP',
        //     component: APP,
        // }

    ]
})

export default router