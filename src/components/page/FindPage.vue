<template>
    <div>
        <div class="header-div">
            <form action="javascript:;" id="searchFrom" @onsubmit="searchList">
                <input type="search" class="header-input" placeholder="大家都在搜：今日新闻">
            </form>
        </div>
        <div class="content-div">
            <div class="FindPage-hot">
                <div class="FindPage-hot-title">
                    <span class="FindPage-title"><i class="icon iconfont icon-search"></i>微博热搜</span>
                    <span class="FindPage-title-span">每分钟更新一次</span>
                    <span class="FindPage-right-i"><i class="icon iconfont icon-xiangyou-copy"></i></span>
                </div>
                <div class="FindPage-hot-list">
                    <ul>
                        <li v-for="item in hotList"
                            class="FindPage-hotList-li">
                            <span>{{item.title}}</span>
                            <span class="FindPage-hotList-span" :class="item.state">{{hotState[item.state]}}</span>
                        </li>
                        <li class="FindPage-hotList-li"><span class="FindPage-hotList-res">更多热搜 <i class="icon iconfont icon-xiangyou-copy"></i></span></li>
                    </ul>
                </div>
                <div class="FindPage-hot-ad">
                    <el-carousel height="12vh" :interval="5000" >
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="FindPage-list">
                <div class="FindPage-list-nav">
                    <div v-for="item in listNav" :class="item.state?'action-listNav':''">
                        {{item.text}}
                    </div>
                </div>
                <div class="FindPage-list-content">
                    <v-page-content
                            v-for="post in lists"
                            :post="post"
                            @delItem="deleteItem"
                    > </v-page-content>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vPageContent from '../common/PageContent.vue';
    export default {
        name: "find-page",
        components: {
            vPageContent
        },
        data() {
            return {
                hotList: [],
                hotState: {
                    "r": "热",
                    "x": "新",
                    "j": "荐"
                },
                listNav: [
                    {text: "话题", index: "huati", state: true},
                    {text: "榜单", index: "bangdan", state: false},
                    {text: "成都", index: "chengdu", state: false},
                    {text: "超话", index: "chaohua", state: false}
                ],
                lists: []
            }
        },
        methods: {
            searchList() {

            },
            deleteItem(id) {
                let that = this;
                that.lists.map(function (value, key) {
                    if (value.id === id) {
                        that.lists.splice(key, 1);
                    }
                });
            }
        },
        mounted() {

        },
        created() {
            let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/hot_list";
            this.$axios.post(url).then((res) => {
                this.hotList = res.data.data;
            });

            let url2 = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/home_list";
            this.$axios.post(url2).then((res) => {
                this.lists = res.data.data;
            })
        }
    }
</script>

<style scoped>
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        text-align: center;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        text-align: center;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        text-align: center;
    }
    .header-div {
        width: 100%;
        text-align: center;
        line-height: 8vh;
        border-bottom: 1px solid #e0e0e0;
        background-color: white;
    }
    .content-div {
        background-color: #dcdbdbba;
    }
    .header-input {
        width: 90vw;
        display: inline-block;
        height: 5vh;
        border: none;
        border-radius: 1.5vw;
        background-color: #d8d8d8;
        font-size: 0.8rem;
        outline:none;
    }
    .FindPage-hot {
        width: 100%;
        background-color: white;
        padding-bottom: 1.5vh;
    }
    .FindPage-hot-title {
        width: 100%;
        height: 7vh;
        line-height: 7vh;
        border-bottom: 1px solid #e0e0e0;
    }
    .FindPage-title {
        margin-left: 2vw;
        font-size: 1.1rem;
    }
    .FindPage-title i {
        color: #df5f06;
        font-size: 1.3rem;
        margin: 0 1vw;
    }
    .FindPage-title-span {
        font-size: 0.8rem;
        color: #8f8f8f;
        margin-left: 1vw;
    }
    .FindPage-right-i {
        margin-right: 2vw;
        float: right;
        color: #8f8f8f;
    }
    .FindPage-right-i i {
        font-size: 0.9rem;
    }
    .FindPage-hot-list {
        width: 100%;
        padding-top: 2vh;
    }
    .FindPage-hotList-li {
        width: 50vw;
        display: inline-block;
        box-sizing: border-box;
        padding: 0 3vw 0 4vw;
        font-size: 1rem;
    }
    .FindPage-hotList-li span {
        display: inline-block;
    }
    .FindPage-hotList-li span:first-child {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        height: 4vh;
        line-height: 4vh;
        max-width: 80%;
    }
    .FindPage-hotList-span {
        position: relative;
        top: -1.7vh;
        left: 1vw;
        font-size: 0.7rem;
        width: 4vw;
        height: 4vw;
        color: white;
        line-height: 4vw;
        text-align: center;
        border-radius: 0.8vw;
    }
    .r {
        background-color: #df780e;
    }
    .x {
        background-color: #d31f1f;
    }
    .j {
        background-color: #409EFF;
    }
    .FindPage-hotList-res {
        color: #df780e;
    }
    .FindPage-hotList-res i {
        font-size: 1.1rem;
    }
    .FindPage-hot-ad {
        width: 95vw;
        margin: 0 auto;
    }
    .FindPage-list {
        width: 100%;
        margin-top: 2vh;
        background-color: white;
    }
    .FindPage-list-nav {
        width: 80vw;
        margin: 0 auto;
        display: flex;
        color: #8f8f8f;
        border-bottom: 1px solid #d8d8d8;
    }
    .FindPage-list-nav div {
        display: inline-block;
        flex: 1;
        height: 7vh;
        line-height: 7vh;
        text-align: center;
    }
    .action-listNav {
        color: black;
        border-bottom: 2px solid #df5f06;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 10vh;
        width: 80vw;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

</style>