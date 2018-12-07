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
                  @click="clickChoiceStrip(item.name)"
                  :class="item.class">
                {{item.name}}
            </span>
        </div>
        <div class="content-div">
            <div v-for="item in homeList"
                 class=""
            >
                <div>
                    <div>
                        <img :src="item.user.img" alt="">
                    </div>
                    <div>
                        <div><span>{{item.user.name}}</span></div>
                        <div>
                            <span>{{item.time}}</span> 来自<span>{{item.user.tel}}</span>
                        </div>
                        <div><i class="icon iconfont icon-xiangxia"></i></div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "pageHead",
        data() {
            return {
                AppKey: "wangxia347",
                AppSecret: "forever347dx.",
                title: [
                    {name: "关注", index: "follow", class: "span-action"},
                    {name: "热门", index: "hot", class: ""}
                ],
                choiceStrip: [
                    {name: "推荐", class: "color-action"},
                    {name: "榜单", class: ""},
                    {name: "娱乐", class: ""},
                    {name: "电竞", class: ""},
                    {name: "新闻", class: ""},
                    {name: "其他", class: ""}
                ],
                choiceHot: false,
                homeList: []
            }
        },
        methods: {
            onClickSpan(index){
                this.choiceHot = (index === "hot");
                for (let i = 0; i < this.title.length; i++) {
                    this.title[i].class = this.title[i].index === index ? "span-action" : "";
                }
                let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/home_list";
                this.$axios.post(url, {
                    page: 1
                }).then((res) => {
                    this.homeList = res.data.data
                })
            },
            clickChoiceStrip(index){
                for (let i = 0; i < this.choiceStrip.length; i++) {
                    this.choiceStrip[i].class = this.choiceStrip[i].name === index ? "color-action" : "";
                }
            }
        },
        mounted(){


        }
    }
</script>

<style scoped>
    .header-div {
        width: 100%;
        height: 8vh;
    }
    .header-div div {
        display: inline-block;
        height: 100%;
        min-width: 14%;
        line-height: 8vh;
        text-align: center;
    }
    .header-div div .iconfont {
        font-size: 1.8rem;
    }
    .header-first-div {
        float: left;
    }
    .header-last-div {
        float: right;
        color: #df5f06;
    }
    .header-content-div {
        width: 72%;
        font-size: 1.2rem;
    }
    .header-content-div span {
        display: inline-block;
        height: 100%;
        margin: 0 1vh;
    }
    .span-action {
        border-bottom: 2px solid #df5f06;
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
    }
</style>