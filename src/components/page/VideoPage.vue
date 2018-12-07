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
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "video-page",
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
            }
        },
        methods: {
            onClickTitle(index) {
                for (let i = 0; i < this.choiceStrip.length; i++) {
                    this.choiceStrip[i].class = this.choiceStrip[i].index === index ? "color-action" : "";
                }
                this.nowIndex = index;
            }
        }
    }
</script>

<style scoped>
    .header-content-div {
        width: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        font-size: 1rem;
    }
    .color-action {
        height: 80%;
        border-bottom: 2px solid #df5f06;
    }
    .follow-div {
        height: 16vh;
    }
    .follow-head {
        height: 4vh;
        line-height: 4vh;
        font-size: 0.7rem;
    }
    .follow-head span {
        padding: 0 2vw;
    }
    .follow-head i {
        font-size: 0.9rem;
    }
    .follow-right {
        color: #8f8f8f;
        float: right;
    }
</style>