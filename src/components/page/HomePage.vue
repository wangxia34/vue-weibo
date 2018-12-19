<template>
    <div>
        <div class="header-div">
            <div class="header-first-div"><i class="icon iconfont icon-zhaoxiangji"></i></div>
            <div class="header-content-div">
                <span v-for="item in title"
                      @click="onClickSpan(item.index)"
                      :class="item.class">
                    {{item.name}}
                </span>
            </div>
            <div class="header-last-div"><i class="icon iconfont icon-tianjia1"></i></div>
        </div>
        <div class="choiceStrip-div" v-if="choiceHot">
            <span v-for="item in choiceStrip"
                  @click="clickChoiceStrip(item.index)"
                  :class="item.class">
                {{item.name}}
            </span>
        </div>
        <div class="content-div" id="content_div">
            <v-page-content
                    v-for="post in homeList"
                    :post="post"
                    @delItem="deleteItem"
            > </v-page-content>
        </div>
    </div>
</template>

<script>
    import vPageContent from '../common/PageContent.vue';
    export default {
        name: "homePage",
        components:{
            vPageContent
        },
        data() {
            return {
                AppKey: "wangxia347",
                AppSecret: "forever347dx.",
                title: [
                    {name: "关注", index: "follow", class: "span-action"},
                    {name: "热门", index: "hot", class: ""}
                ],
                choiceStrip: [
                    {name: "推荐", index: "recommend", class: "color-action"},
                    {name: "榜单", index: "list", class: ""},
                    {name: "娱乐", index: "entertainment", class: ""},
                    {name: "电竞", index: "electricContest", class: ""},
                    {name: "新闻", index: "journalism", class: ""},
                    {name: "其他", index: "other", class: ""}
                ],
                choiceHot: false,
                homeList: [],
                nowIndex: "follow",
            }
        },
        methods: {
            onClickSpan(index){
                this.choiceHot = (index === "hot");
                for (let i = 0; i < this.title.length; i++) {
                    this.title[i].class = this.title[i].index === index ? "span-action" : "";
                }
                this.nowIndex = index;
                this.getHomeList(index);
            },
            clickChoiceStrip(index){
                for (let i = 0; i < this.choiceStrip.length; i++) {
                    this.choiceStrip[i].class = this.choiceStrip[i].index === index ? "color-action" : "";
                }
                this.nowIndex = index;
                this.getHomeList(index);
            },
            getHomeList(index) {
                let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/home_list";
                this.$axios.post(url, {
                    index: index
                }).then((res) => {
                    this.homeList = res.data.data;
                })
            },
            scroll() {
                let isLoading = false,
                    url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/home_list";
                window.onscroll = () => {
                    // 距离底部200px时加载一次
                    let bottomOfWindow = document.documentElement.scrollHeight - document.documentElement.scrollTop - window.innerHeight <= 200;
                    if (bottomOfWindow && isLoading === false) {
                        isLoading = true;
                        this.$axios.post(url, {
                            index: this.nowIndex
                        }).then((res) => {
                            this.homeList = this.homeList.concat(res.data.data);
                            isLoading = false
                        })
                    }
                }
            },
            deleteItem(id) {
                let that = this;
                that.homeList.map(function (value, key) {
                    if (value.id === id) {
                        that.homeList.splice(key, 1);
                    }
                });
            }
        },
        mounted() {
            this.scroll()
        },
        created() {
            this.getHomeList(this.nowIndex)
        }
    }
</script>

<style scoped>
    .header-last-div {
        color: #df5f06;
    }
    .choiceStrip-div {
        width: 100%;
        height: 6vh;
        font-size: 0.9rem;
        line-height: 6vh;
    }
    .choiceStrip-div span {
        display: inline-block;
        margin: 0 1vh;
    }
    .color-action {
        color: #df5f06;
    }
    .content-div {
        width: 100%;
        height: auto;
        background-color: #dcdbdbba;
        padding-top: 0.01rem;
        margin-bottom: 8vh;
    }
</style>