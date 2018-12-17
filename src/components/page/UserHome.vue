<template>
    <div class="userHome-content">
        <div class="userHome-item">
            <div class="userHome-item-head">
                <div class="userHome-item-title">
                    <span>{{user}}的影响力</span>
                </div>
                <span class="userHome-item-right">查看 <i class="icon iconfont icon-xiangyou-copy"></i></span>
            </div>
            <div class="userHome-item-content">
                <div class="userHome-yxl">
                    <div>
                        <div class="userHome-yxl-num">{{yesterdaySendNum}}</div>
                        <div class="userHome-yxl-text">昨日发博数</div>
                    </div>
                    <div>
                        <div class="userHome-yxl-num">{{yesterdayReadNum}}+</div>
                        <div class="userHome-yxl-text">昨日阅读数</div>
                    </div>
                    <div>
                        <div class="userHome-yxl-num">{{yesterdayInterNum}}+</div>
                        <div class="userHome-yxl-text">昨日互动数</div>
                    </div>
                </div>
            </div>
            <div class="userHome-item-foot">
                <span>更多基本资料</span>
            </div>
        </div>
        <div class="userHome-item">
            <div class="userHome-item-head">
                <div class="userHome-item-title">
                    <span>他的热门内容</span>
                </div>
                <span class="userHome-item-right">更多 <i class="icon iconfont icon-xiangyou-copy"></i></span>
            </div>
            <div class="userHome-item-content">
                <div class="userHome-web">
                    <v-page-content
                            v-for="post in infoList"
                            :post="post"
                            @delItem="deleteItem"
                    > </v-page-content>
                </div>
            </div>
            <div class="userHome-item-foot">
                <span>更多内容</span>
            </div>
        </div>
    </div>
</template>

<script>
    import vPageContent from '../common/PageContent.vue';
    export default {
        name: "user-home",
        props: ["user"],
        components: {
            vPageContent
        },
        data() {
            return {
                userInfo: {},
                userName: "",
                yesterdaySendNum: "",
                yesterdayReadNum: "",
                yesterdayInterNum: "",
                infoList: []
            }
        },
        methods: {
            deleteItem(id) {
                let that = this;
                that.infoList.map(function (value, key) {
                    if (value.id === id) {
                        that.infoList.splice(key, 1);
                    }
                });
            },
            getUserName() {
                this.userName = this.user ? this.user : "";
            }
        },
        created() {
            this.getUserName();
            let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/user_info?name=" + this.userName;
            this.$axios.post(url, {
                name: this.userName
            }).then((res) => {
                this.userInfo = res.data.data;
                this.yesterdaySendNum = this.userInfo.yesterday.sendNum;
                this.yesterdayReadNum = this.$web.getStrNum(this.userInfo.yesterday.readNum);
                this.yesterdayInterNum = this.$web.getStrNum(this.userInfo.yesterday.interactionNum);
            });

            let url2 = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/user_weibo?name=" + this.userName;
            this.$axios.post(url2, {
                name: this.userName
            }).then((res) => {
                this.infoList = res.data.data;
            });
        }
    }
</script>

<style scoped>
    .userHome-content {
        width: 100%;
        background-color: #dcdbdbba;
        padding-top: 0.3rem;
    }
    .userHome-item {
        width: 100%;
        margin-bottom: 0.6rem;
        background-color: white;
    }
    .userHome-item-head {
        height: 6vh;
        width: 100%;
        font-size: 0.9rem;
        line-height: 6vh;
        border-bottom: 1px solid #e8e8e8;
    }
    .userHome-item-head>span, .userHome-item-head>div {
        display: inline-block;
    }
    .userHome-item-title span {
        padding-left: 3vw;
        border-left: 2px solid #df5f06;
    }
    .userHome-item-right {
        float: right;
        font-size: 0.8rem;
        color: #8f8f8f;
    }
    .userHome-item-right i {
        font-size: 0.8rem;
        color: #df5f06;
    }
    .userHome-item-content {
        width: 100%;
    }
    .userHome-item-foot {
        height: 6vh;
        line-height: 6vh;
        text-align: center;
        color: #8f8f8f;
        font-size: 0.9rem;
        border-top: 1px solid #e2dfdf;
    }
    .userHome-yxl {
        width: 100%;
        display: flex;
        padding: 1.5vh 0;
    }
    .userHome-yxl>div {
        display: inline-block;
        flex: 1;
        text-align: center;
    }
    .userHome-yxl-num {
        height: 5vh;
        line-height: 5vh;
        font-size: 1.1rem;
    }
    .userHome-yxl-text {
        height: 3vh;
        line-height: 3vh;
        font-size: 0.8rem;
        color: #8e8e8e;
    }
    .userHome-web {
        background-color: #dcdbdbba;
    }
</style>