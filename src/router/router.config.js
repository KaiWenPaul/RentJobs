/**
 * Created by Administrator on 2016/12/24.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import r from '../api/http.js'
import Home from '../components/Home.vue'  //首页
import Detail from '../components/Detail.vue' //详情
import My from '../components/My.vue'      //我的
import GoRent from '../components/GoRent.vue' //去创建房本
import Rent from '../components/Rent.vue'  //出租
import SeekingRent from '../components/SeekingRent.vue' //求租
import Search from '../components/Search.vue' //搜索

import Test1 from '../components/Test1.vue' //测试
Vue.use(VueRouter);
const routes = [
    { path: '*', redirect: '/home' },
    { path: '/home', component: Home,name:'home'},
    { path: '/detail/:id', component: Detail ,name:'detail'},
    { path: '/my', component: My,name:'my' },
    { path: '/gorent', component: GoRent ,name:'gorent'},
    { path: '/rent', component: Rent ,name:'rent'},
    { path: '/seekingrent', component: SeekingRent,name:'seekingrent' },
    { path: '/search', component: Search,name:'search' },
    { path: '/test1', component: Test1,seekingrent:'test1' },
]


const router = new VueRouter({
    // mode: 'history',
    routes
});
var a =window.document.cookie.match("catwechat_openid");
router.beforeEach((to, from, next) => {
    if (a) {
        next();
    } else {
        next(); 
        //  window.location.href = "http://zf.sudiny.ltd/zf/authorize?r="+ r.urlencode(to.name);
    }
})
// router.beforeEach((to, from, next) => { 
//     if (store.state.data.token) {
//         next();
//     } else {
//         next();
//         /*  .log("你还没有登录啦")
//          if (to.meta.requireAuth==false) {
//              next();
//          }else {
//              next({ path: '/login' })
//          }*/
//     }
// })
export default router;