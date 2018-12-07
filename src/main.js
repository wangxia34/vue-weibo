import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' });

Vue.prototype.$axios = axios;
Vue.prototype.$ = $;

// Vue.config.productionTip = false;

// function GetQueryString(name) {
//     let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//     let r = location.search.substr(1).match(reg);
//     if (r != null) return decodeURI(r[2]);
//     return null;
// }
//
// Vue.prototype.$getQueryString = GetQueryString;
//
// //使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     const role = GetQueryString("code");
//     if(!role && to.path !== '/login'){
//         next('/login');
//     }else{
//         next();
//     }
// });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
