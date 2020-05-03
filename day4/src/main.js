// 入口文件
// import vue component 导入vue组件
// import VueRouter Component 导入Vue路由组件
// Mounting VueRouter 注册到Vue
// import App.vue 导入App.vue组件
// import router.js 导入router.js路由js文件
// import element-ui 导入element-ui
// import CSS file 导入CSS文件
// Mounting ElementUI with parameters 注册到ElementUI并附带参数
import Vue from '../node_modules/vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router.js'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
/* element-ui 引入区域 begin */
// The following is import all 以下是全部引入
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI, {
//     size: 'small',
//     zIndex: 3000
// })

// The following is on-demand import 以下是按需引入
// import element-ui as required 按需引入element-ui
// Internationaliztion query i18n 前端国际化搜i18n
// import {
//     Button,
//     Select
// } from "element-ui";
// Vue.use(Button) or Vue.component(Button.name,Button)
// Vue.use(Select) or Vue.component(Select.name,Select)

/* element-ui 引入区域 end */

/* vant 引入区域 begin */

// The following is import all 以下是全部引入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
// The following is on-demand import 以下是按需引入
import 'vant/lib/index.css'
import {
    Button,
    Tabbar,
    TabbarItem,
    Cell,
    CellGroup,
    Col,
    Row,
    Swipe,
    SwipeItem,
    Image as VanImage,
    Grid,
    GridItem,
    Icon,
} from "vant";
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);




/* vant 引入区域 end */


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