<template>
    <div>
        <div class="header-div">
            <div class="header-first-div"><i class="icon iconfont icon-ren"></i></div>
            <div class="header-content-div">
                <span>我</span>
            </div>
            <div class="header-last-div"><i @click="signOut" class="icon iconfont icon-shezhi1-copy"></i></div>
        </div>
        <div class="content-div">
            <div class="my-info-div">
                <div class="my-info">
                    <div class="my-info-img">
                        <img :src="user.img" alt="">
                    </div>
                    <div class="my-info-user">
                        <div class="my-info-name"><span>{{user.name}}</span></div>
                        <div class="my-info-time">
                            <p>简介：{{user.profiles}}</p>
                        </div>
                    </div>
                    <div class="my-info-icon">
                        <i v-if="user.isVip" class="icon iconfont icon-huiyuanhuangguanguanjun"></i>
                        <i v-else class="icon iconfont icon-huiyuanhuangguanguanjun-xianxing"></i>
                        <span>会员</span>
                    </div>
                </div>
                <div class="my-info-web">
                    <div class="my-info-web-item">
                        <span>{{user.webNum}}</span><span>微博</span>
                    </div>
                    <div class="my-info-web-item">
                        <span>{{user.followNum}}</span><span>关注</span>
                    </div>
                    <div class="my-info-web-item">
                        <span>{{$web.getStrNum(user.fansNum)}}</span><span>粉丝</span>
                    </div>
                </div>
            </div>
            <div class="my-application">
                <div v-for="item in applicationList" class="my-application-item">
                    <div><i class="icon iconfont" :class="item.icon" :style="setColor(item.color)"></i></div>
                    <div><span>{{item.text}}</span></div>
                </div>
            </div>
            <div class="my-footprint">
                <span class="my-title">经常访问</span>
                <div class="my-footprint-content">
                    <div>我最近经常访问的主页</div>
                    <div class="my-footprint-user-all">
                        <div v-for="item in applicationUser" class="my-footprint-user">
                            <div @click="goUserPage(item)" class="my-footprint-img">
                                <img :src="item.img" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-chaohua">
                <span class="my-title">超话社区</span>
                <div class="my-footprint-content">
                    <div>你关注的超话社区</div>
                    <div class="my-footprint-user-all">
                        <div v-for="item in applicationUser" class="my-footprint-user">
                            <div @click="goUserPage(item)" class="my-footprint-img">
                                <img :src="item.img" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-page",
        data() {
            return {
                user: {},
                applicationList: [
                    {text: "我的相册", icon: "icon-tupian", "color": "#5ACD70", index: ""},
                    {text: "我的故事", icon: "icon-gushi", "color": "#F7BD47", index: ""},
                    {text: "我的赞", icon: "icon-zan", "color": "#FF5E75", index: ""},
                    {text: "粉丝服务", icon: "icon-fensi", "color": "#2F93EB", index: ""},
                    {text: "微博钱包", icon: "icon-qianbao", "color": "#FF5E75", index: ""},
                    {text: "微博运动", icon: "icon-yundong", "color": "#FF5E75", index: ""},
                    {text: "粉丝头条", icon: "icon-toutiao", "color": "#F7BD47", index: ""},
                    {text: "客服中心", icon: "icon-kefu", "color": "#5ACD70", index: ""},
                ],
                applicationUser: []
            }
        },
        methods: {
            setColor(color) {
                return `color: ${color}`;
            },
            goUserPage(content) {
                this.$router.push({name: 'userPage', params: {content: content}});
            },
            signOut() {
                localStorage.clear();
                this.$store.commit('setUser', "");
                this.$router.push('/login');
            }
        },
        created() {
            let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/user_info?name=" + this.$store.state.user;
            this.$axios.post(url, {
                name: this.$store.state.user
            }).then((res) => {
                this.user = res.data.data;
            });

            let url2 = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/video_touxiang";
            this.$axios.post(url2, {
                index: this.$store.state.user
            }).then(res => {
                this.applicationUser = res.data.data.splice(5);
            });
        }
    }
</script>

<style scoped>
    .content-div {
        width: 100%;
        height: auto;
        background-color: #dcdbdbba;
        padding-top: 0.01rem;
        margin-bottom: 8vh;
    }
    .my-info-div {
        width: 100%;
        background-color: white;
        margin-top: 0.3rem;
    }
    .my-info {
        width: 100%;
        /*height: 9vh;*/
        display: flex;
        position: relative;
    }
    .my-info>div {
        display: inline-block;
    }
    .my-info-img {
        height: 100%;
        flex: 1;
        text-align: center;
        padding: 0.7vh 0 0 0;
    }
    .my-info-img img {
        width: 9vh;
        height: 9vh;
        border-radius: 50%;
    }
    .my-info-user {
        height: 100%;
        flex: 4;
    }
    .my-info-name {
        font-size: 0.9rem;
        margin-top: 1vh;
        height: 5vh;
        line-height: 5vh;
    }
    .my-info-time {
        font-size: 0.6rem;
        height: 4vh;
        color: #8f8f8f;
        width: 61vw;
    }
    .my-info-time p {
        width: 61vw;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .my-info-icon {
        position: absolute;
        right: 1rem;
        top: 1.6rem;
        color: #aaa;
    }
    .my-info-icon span {
        font-size: 0.8rem;
    }
    .icon-huiyuanhuangguanguanjun {
        color: #df5f06;
    }
    .my-info-web {
        width: 100%;
        height: 8vh;
        display: flex;
    }
    .my-info-web-item {
        display: inline-block;
        flex: 1;
        text-align: center;
        font-size: 0.8rem;
        padding: 1vh 0;
    }
    .my-info-web-item span {
        display: block;
    }
    .my-info-web-item span:last-child {
        color: #8f8f8f;
    }
    .my-application {
        width: 100%;
        margin-top: 0.5rem;
        background-color: white;
    }
    .my-application-item {
        display: inline-block;
        width: 25vw;
        text-align: center;
        padding: 2vh 0;
    }
    .my-application-item i {
        font-size: 2rem;
    }
    .my-application-item span {
        font-size: 0.8rem;
        display: inline-block;
        margin-top: 1vh;
    }
    .my-footprint {
        width: 100%;
        margin-top: 0.5rem;
        background-color: white;
    }
    .my-title {
        font-size: 0.7rem;
        color: #8f8f8f;
        margin: 1.5vh 0 0 2vw;
        display: inline-block;
    }
    .my-footprint-content {
        width: 100%;
    }
    .my-footprint-content div:first-child {
        font-size: 0.8rem;
        margin-left: 2vw;
        line-height: 6vh;
    }
    .my-footprint-user-all {
        display: flex;
        width: 100%;
        overflow: hidden;
    }
    .my-footprint-user {
        flex: 1;
        display: inline-block;
    }
    .my-footprint-img {
        width: 100%;
    }
    .my-footprint-img img {
        width: 17vw;
        border-radius: 50%;
    }
    .my-chaohua {
        width: 100%;
        margin-top: 0.5rem;
        background-color: white;
    }
</style>