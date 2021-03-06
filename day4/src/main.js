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
    Search,
    SwipeCell,
    Card,
    Empty,
    CountDown,
    Toast,
    PullRefresh,
    TreeSelect,
    Sidebar,
    SidebarItem,
    SubmitBar,
    RadioGroup,
    Radio,
    Checkbox,
    CheckboxGroup,
    NavBar,
    Field,
    Popup,
    Overlay,
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
Vue.use(Search);
Vue.use(SwipeCell);
Vue.use(Card);
Vue.use(Empty);
Vue.use(CountDown);
Vue.use(Toast);
Vue.use(PullRefresh);
Vue.use(TreeSelect);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(SubmitBar);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Overlay);
/* vant 引入区域 end */


var vm1 = new Vue({
    el: '#app',
    data: {

    },
    methods: {
        logTxt: function () {
            console.log('this is Vue')
        }
    },
    components: {},
    // function (createElements) { // 可以使用箭头函数c=>c(app)
    //     return createElements(login)
    // }
    render: c => c(App),
    router: router,

})