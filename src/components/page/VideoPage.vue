<template>
    <div>
        <div class="header-div">
            <div class="header-content-div">
                <span v-for="item in choiceStrip"
                      @click="onClickTitle(item.index)"
                      :class="item.class">
                    {{item.name}}
                </span>
            </div>
        </div>
        <div class="follow-div">
            <div class="follow-head">
                <span>我正在追的专辑</span>
                <span class="follow-right">全部<i class="icon iconfont icon-xiangyou-copy"></i></span>
            </div>
            <div class="follow-user-div">
                <div class="follow-user-all">
                    <div v-for="item in followUser" class="follow-user">
                        <div @click="goUserPage(item)" class="follow-img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="follow-name">
                            <span>{{item.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-div">
            <v-page-video v-for="item in videoList"
                          :video="item" @delItem="deleteVideo">
            </v-page-video>
        </div>
    </div>
</template>

<script>
    import vPageVideo from '../common/PageVideo'
    export default {
        name: "video-page",
        components: {
            vPageVideo
        },
        data() {
            return {
                choiceStrip: [
                    {name: "推荐", index: "recommend", class: "color-action"},
                    {name: "榜单", index: "list", class: ""},
                    {name: "娱乐", index: "entertainment", class: ""},
                    {name: "电竞", index: "electricContest", class: ""},
                    {name: "新闻", index: "journalism", class: ""},
                    {name: "综艺", index: "variety", class: ""},
                    {name: "剧集", index: "episode", class: ""},
                    {name: "电影", index: "film", class: ""},
                    {name: "其他", index: "other", class: ""}
                ],
                followUser: [],
                videoList: []
            }
        },
        methods: {
            onClickTitle(index) {
                for (let i = 0; i < this.choiceStrip.length; i++) {
                    this.choiceStrip[i].class = this.choiceStrip[i].index === index ? "color-action" : "";
                }
                this.nowIndex = index;
                this.getVideoList();
            },
            goUserPage(content) {
                this.$router.push({name: 'userPage', params: {content: content}});
            },
            deleteVideo(id) {
                let that = this;
                that.videoList.map(function (value, key) {
                    if (value.id === id) {
                        that.videoList.splice(key, 1);
                    }
                });
            },
            getVideoList() {
                let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/video_list";
                this.$axios.post(url, {
                    index: this.nowIndex
                }).then((res) => {
                    this.videoList = res.data.data;
                })
            },
            scroll() {
                let isLoading = false,
                    url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/video_list";
                window.onscroll = () => {
                    // 距离底部200px时加载一次
                    let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200;
                    if (bottomOfWindow && isLoading === false) {
                        isLoading = true;
                        this.$axios.post(url, {
                            index: "user"
                        }).then((res) => {
                            this.videoList = this.videoList.concat(res.data.data);
                            isLoading = false
                        })
                    }
                }
            }
        },
        mounted() {
            this.scroll()
        },
        created() {
            let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/video_touxiang";
            this.$axios.post(url, {
                index: "user"
            }).then(res => {
                this.followUser = res.data.data;
            });

            this.getVideoList("user");
        }
    }
</script>

<style scoped>
    .header-div {
        white-space: nowrap;
        overflow-x: auto;
    }
    .header-div::-webkit-scrollbar {
        display: none;
    }
    .header-content-div {
        font-size: 1rem;
        padding: 0 2vw;
    }
    .color-action {
        height: 80%;
        border-bottom: 2px solid #df5f06;
    }
    .follow-div {
        height: 16vh;
        margin: 1vh 0;
        width: 100%;
    }
    .follow-head {
        height: 4vh;
        line-height: 4vh;
        font-size: 0.7rem;
    }
    .follow-head span {
        padding: 0 2vw 0 3vw;
    }
    .follow-head i {
        font-size: 0.9rem;
    }
    .follow-right {
        color: #8f8f8f;
        float: right;
    }
    .follow-user-div {
        white-space: nowrap;
        overflow-x: scroll;
        width: 100%;
    }
    .follow-user-div::-webkit-scrollbar {
        display: none;
    }
    .follow-user-all {
        padding: 1vh 1rem;
        margin: 0;
    }
    .follow-user {
        display: inline-block;
        margin: 0 0.5rem;
    }
    .follow-img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 7.4vh;
        width: 7.4vh;
        border-radius: 50%;
        border: 1.5px solid #f59552;
    }
    .follow-img img {
        width: 7vh;
        height: 7vh;
        border-radius: 50%;
    }
    .follow-name {
        width: 100%;
        text-align: center;
        font-size: 0.8rem;
        height: 3vh;
        line-height: 3vh;
    }
    .follow-name span {
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>