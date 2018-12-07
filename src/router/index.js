import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/common/Home.vue'
import Login from '../components/common/Login.vue'
import HomePage from '../components/page/HomePage.vue'
import VideoPage from '../components/page/VideoPage.vue'
import FindPage from '../components/page/FindPage.vue'
import NewsPage from '../components/page/NewsPage.vue'
import MyPage from '../components/page/MyPage.vue'
import TextPage from '../components/page/TextPage.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/homePage'
        },
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/homePage',
                    component: HomePage
                },
                {
                    path: '/videoPage',
                    component: VideoPage,
                },
                {
                    path: '/findPage',
                    component: FindPage,
                },
                {
                    path: '/newsPage',
                    component: NewsPage,
                },
                {
                    path: '/myPage',
                    component: MyPage,
                }
            ]
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/textPage',
            component: TextPage,
            name: "textPage"
        }
    ]
})