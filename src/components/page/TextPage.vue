<template>
    <div>
        <div class="header-div">
            <div class="header-first-div"><i @click="backPage" class="icon iconfont icon-zhiding"></i></div>
            <div class="header-content-div">
                <span>微博正文</span>
            </div>
            <div class="header-last-div"><i class="icon iconfont icon-more"></i></div>
        </div>
        <div class="textPage-content">
            <v-page-content :post="textContent"> </v-page-content>
            <div class="textPage-comment">
                <div class="textPage-comment-head">
                    <div class="textPage-comment-item"
                         :class="commentP.isZhuanfa.class">
                        <span @click='changeCommentItem(commentP.isZhuanfa.index)'>转发{{textContent.zhuanfa}}</span>
                    </div>
                    <div class="textPage-comment-item"
                         :class="commentP.isPinglun.class">
                        <span @click='changeCommentItem(commentP.isPinglun.index)'>评论{{textContent.pinglun}}</span>
                    </div>
                    <div class="textPage-comment-item textPage-comment-zan"
                         :class="commentP.isZan.class">
                        <span @click='changeCommentItem(commentP.isZan.index)'>赞{{textContent.dianzan}}</span>
                    </div>
                </div>
                <div>
                    <v-page-comment
                            v-for="item in commentList"
                            :comment="item">
                    </v-page-comment>
                </div>
            </div>
        </div>
        <div class="textPage-foot">
            <div>
                <span><i class="icon iconfont icon-web-icon-"></i></span>
                <span class="textPage-foot-num">转发</span>
            </div>
            <div>
                <span><i class="icon iconfont icon-pinglun"></i></span>
                <span class="textPage-foot-num">评论</span>
            </div>
            <div>
                <span><i class="icon iconfont icon-zan"></i></span>
                <span class="textPage-foot-num">赞</span>
            </div>
        </div>
    </div>
</template>

<script>
    import vPageContent from '../common/PageContent.vue';
    import vPageComment from '../common/PageComment.vue';
    export default {
        name: "text-page",
        components:{
            vPageContent, vPageComment
        },
        data(){
            return {
                textContent: {},
                commentP: {
                    isZhuanfa: {class: "", index: "isZhuanfa"},
                    isPinglun: {class: "comment-action", index: "isPinglun"},
                    isZan: {class: "", index: "isZan"}
                },
                commentList: []
            }
        },
        methods: {
            backPage(){
                this.$router.back(-1);
            },
            changeCommentItem(index){
                for (let k in this.commentP) {
                    this.commentP[k].class = k === index ? "comment-action" : ""
                }
            },
            getCommentList(index) {
                let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/comment_list";
                this.$axios.post(url, {
                    index: index
                }).then((res) => {
                    this.commentList = res.data.data;
                })
            },
            scroll() {
                let isLoading = false,
                    url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/comment_list";
                window.onscroll = () => {
                    // 距离底部200px时加载一次
                    let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200;
                    if (bottomOfWindow && isLoading === false) {
                        isLoading = true;
                        this.$axios.post(url, {
                            index: this.textContent.index
                        }).then((res) => {
                            this.commentList = this.commentList.concat(res.data.data);
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
            this.textContent = this.$route.params.content;
            this.textContent.isText = true;
            this.getCommentList(this.textContent.index);
        }
    }
</script>

<style scoped>
    .header-div {
        position: fixed;
        top: 0;
        background-color: white;
        z-index: 11;
    }
    .textPage-content {
        width: 100%;
        height: auto;
        background-color: rgba(204, 203, 203, 0.41);
        padding-top: 0.01rem;
        margin: 8vh 0;
    }
    .textPage-comment {
        background-color: white;
        margin-top: 0.4rem;
    }
    .textPage-comment-head {
        height: 6vh;
        line-height: 6vh;
        margin-bottom: 2vh;
    }
    .textPage-comment-item {
        display: inline-block;
        padding: 0 3vw 0 2vw;
        font-size: 0.8rem;
        color: #8f8f8f;
    }
    .textPage-comment-zan {
        float: right;
    }
    .comment-action {
        color: #000000;
    }
    .textPage-foot {
        height: 8vh;
        line-height: 8vh;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #dcdbdbba;
        background-color: white;
    }
    .textPage-foot>div {
        display: inline-block;
        width: 33vw;
        text-align: center;
    }
    .textPage-foot>div i {
        font-size: 1.2rem;
    }
    .textPage-foot-num {
        font-size: 0.8rem;
    }

</style>