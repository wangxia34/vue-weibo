<template>
    <div class="comment-content">
        <div class="comment-img">
            <img :src="comment.user.img" alt="">
        </div>
        <div class="comment-text-div">
            <div class="comment-user">
                <div class="comment-name"><span>{{comment.user.name}}</span></div>
            </div>
            <div class="comment-text">
                <p>{{comment.text}}</p>
                <div class="comment-foot">
                    <div>{{comment.time}}</div>
                    <div class="comment-hudong">
                        <div>
                            <span><i class="icon iconfont icon-web-icon-"></i></span>
                            <span class="post-foot-num">{{comment.zhuanfa}}</span>
                        </div>
                        <div>
                            <span><i class="icon iconfont icon-pinglun"></i></span>
                            <span class="post-foot-num">{{comment.pinglun}}</span>
                        </div>
                        <div>
                            <span><i class="icon iconfont icon-zan"></i></span>
                            <span class="post-foot-num">{{comment.dianzan}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-comment",
        props: ['comment'],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .comment-content {
        width: 100%;
        background-color: white;
        display: flex;
    }
    .comment-content>div {
        display: inline-block;
    }
    .comment-img {
        flex: 1;
        text-align: center;
        padding: 0.7vh 0 0 0;
        width: 9vh;
    }
    .comment-img img {
        width: 7vh;
        height: 7vh;
        border-radius: 3.5vh;
    }
    .comment-text-div {
        flex: 4;
    }
    .comment-user {
        height: 4vh;
        line-height: 4vh;
        color: #df5f06;
        font-size: 0.9rem;
    }
    .comment-text {
        padding-right: 2vh;
        border-bottom: 1px solid #dcdbdbba;
    }
    .comment-text p {
        padding: 0;
        margin: 0;
        font-size: 0.8rem;
        line-height: 1.4rem;
    }
    .comment-foot {
        font-size: 0.6rem;
        color: #8f8f8f;
        height: 5vh;
        line-height: 5vh;
    }
    .comment-foot>div {
        display: inline-block;
    }
    .comment-hudong {
        float: right;
    }
    .comment-hudong>div {
        display: inline-block;
        padding: 0 2vw;
    }
    .comment-hudong i {
        font-size: 1rem;
    }
</style>