<template>
    <div class="user-page">
        <div class="user-head">
            <div class="user-head-bg">
                <img :src="user.bgimg" alt="">
            </div>
            <div class="user-head-content">
                <div class="user-head-action">
                    <div class="header-first-div"><i @click="backPage" class="icon iconfont icon-zhiding"></i></div>
                    <div class="header-last-div"><i class="icon iconfont icon-more"></i></div>
                    <div class="header-last-div"><i class="icon iconfont icon-search"></i></div>
                </div>
                <div class="user-info">
                    <div class="head-user">
                        <div class="user-img">
                            <img :src="user.img" alt="">
                            <div v-if="user.isVip" class="user-v">
                                <i class="icon iconfont icon-v"></i>
                            </div>
                        </div>
                        <div class="user-name">
                            <span>{{user.name}}</span>
                            <i v-if="user.sex==='famale'" class="icon iconfont icon-nv2"></i>
                            <i v-if="user.sex==='male'" class="icon iconfont icon-nan"></i>
                        </div>
                    </div>
                    <div class="user-interaction">
                        <div>
                            关注 <span>{{user.followNum}}</span>
                            <span class="dividing-line"></span>
                            粉丝 <span>{{fansNum}}</span>
                        </div>
                    </div>
                    <div class="user-authenticate">
                        微博认证：<span>{{user.authenticate}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="user-nav">
            <ul>
                <li v-for="item in navList"
                             class="user-nav-li"
                             :class="item.state?'action-nav-user':''"
                             @click="navClick(item.index)">
                    <div class="navigation-title">{{item.text}}</div>
                </li>
            </ul>
        </div>
        <div class="user-content">
            <transition name="move" mode="out-in">
                <keep-alive>
                    <v-user-home v-if="isIndex('Home')" :user="userName"> </v-user-home>
                    <v-user-blog v-else-if="isIndex('Blog')" :user="userName"> </v-user-blog>
                    <v-user-article v-else-if="isIndex('Article')" :user="userName"> </v-user-article>
                    <!--<v-user-album v-else-if="isIndex('Album')" :user="user.name"> </v-user-album>-->
                    <v-user-video v-else-if="isIndex('Video')" :user="userName"> </v-user-video>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
    // import { mapGetters} from 'vuex'
    import vUserHome from './UserHome'
    import vUserBlog from './UserBlog'
    import vUserArticle from './UserArticle'
    import vUserAlbum from './UserAlbum'
    import vUserVideo from './UserVideo'
    export default {
        name: "user-page",
        components: {
            vUserHome, vUserBlog, vUserArticle, vUserAlbum, vUserVideo
        },
        data() {
            return {
                user: {},
                fansNum: "",
                navList: [
                    {text: "主页", index: "Home", state: true},
                    {text: "微博", index: "Blog", state: false},
                    {text: "视频", index: "Video", state: false},
                    {text: "文章", index: "Article", state: false},
                    // {text: "相册", index: "Album", state: false},
                ],
                storeUser: null,
                userName: ""
            }
        },
        mounted() {
            // this.storeUser = this.$store.getters.getUser;
            // this.storeUser = this.getUser;

            // console.log(this.storeUser);
        },
        methods: {
            // ...mapGetters['getUser']
            backPage() {
                this.$router.back(-1);
            },
            navClick(index) {
                for (let i = 0; i < this.navList.length; i++) {
                    this.navList[i].state = this.navList[i].index === index;
                }
            },
            isIndex(index) {
                for (let i = 0; i < this.navList.length; i++) {
                    if (this.navList[i].index === index) {
                        return this.navList[i].state;
                    }
                }
            }
        },
        created() {
            let user = this.$route.params.content,
                userName = user ? user.name : "";
            this.userName = userName;

            let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/user?name=" + userName;
            this.$axios.post(url, {
                name: userName
            }).then((res) => {
                this.user = res.data.data;
                this.fansNum = this.$web.getStrNum(this.user.fansNum);
            });

            // this.$store.commit('setUser', 'kkkkkkkk')

            // this.storeUser = this.$store.state.user;
            // this.storeUser = this.getUer();
            //
            // console.log(this.storeUser);
        }
    }
</script>

<style scoped>
    .user-head {
        width: 100%;
        height: 35vh;
        overflow: hidden;
        position: relative;
    }
    .user-head-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-color: black;
    }
    .user-head-bg img {
        width: 100%;
        z-index: 0;
    }
    .user-head-content {
        position: relative;
        z-index: 2;
    }
    .user-head-action {
        position: absolute;
        height: 8vh;
        line-height: 8vh;
        width: 100%;
        z-index: 3;
    }
    .user-head-action div {
        display: inline-block;
        height: 100%;
        min-width: 14%;
        line-height: 8vh;
        text-align: center;
    }
    .user-head-action div .iconfont {
        font-size: 1.8rem;
        color: white;
    }
    .user-info {
        position: relative;
        top: 8vh;
        width: 100%;
        height: 100%;
    }
    .head-user {
        margin: 0 0.5rem;
        color: white;
    }
    .user-img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10.5vh;
        width: 10.5vh;
        border-radius: 50%;
        border: 3px solid rgba(255, 255, 255, 0.45);
        margin: 0 auto;
        position: relative;
    }
    .user-img img {
        width: 10vh;
        height: 10vh;
        border-radius: 50%;
    }
    .user-v {
        position: absolute;
        bottom: 0;
        right: 0;
        color: red;
        background-color: yellow;
        border-radius: 50%;
        height: 1.1rem;
        width: 1.1rem;
        text-align: center;
        line-height: 1.1rem;
    }
    .user-v i.iconfont {
        font-size: 1rem;
    }
    .user-name {
        width: 100%;
        font-size: 1.0rem;
        height: 3vh;
        padding: 1.5vh 0 0 42vw;
    }
    .user-name span {
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .user-name i {
        font-size: 0.9rem;
        padding: 0 2vw;
    }
    .user-name i.icon-icon-woman {
        color: #e27de2;
    }
    .user-name i.icon-nan {
        color: #86cbe2;
    }
    .user-interaction {
        color: white;
        font-size: 0.8rem;
        text-align: center;
    }
    .user-interaction div {
        display: inline-block;
        height: 2vh;
        padding: 1vh 0 0 0;
    }
    .dividing-line {
        display: inline-block;
        height: 100%;
        border-left: 2px solid rgba(255, 255, 255, 0.38);
        margin: 0 4vw;
    }
    .user-authenticate {
        color: white;
        font-size: 0.8rem;
        text-align: center;
        height: 2vh;
        padding: 1vh 0 0 0;
    }
    .user-nav {
        height: 6vh;
        width: 100%;
    }
    .user-nav ul {
        width: 70vw;
        display: flex;
        margin: 0 auto;
        color: #8f8f8f;
    }
    .user-nav ul li {
        flex: 1;
        display: inline-block;
        text-align: center;
        height: 6vh;
        line-height: 6vh;
        box-sizing: border-box;
    }
    .action-nav-user {
        color: black;
        border-bottom: 2px solid #df5f06;
    }
    .user-content {
        background-color: rgba(220, 219, 219, 0.44);
        padding-top: 0.01rem;
    }
</style>