<template>
    <div class="news-content">
        <div class="news-img">
            <img :src="news.user.img" alt="">
        </div>
        <div class="news-text-div">
            <div class="news-text-all">
                <div class="news-user">
                    <div class="news-name">你特别关注的<span>{{news.user.name}}</span>发微博了</div>
                    <div class="news-text">
                        <p>{{news.text}}</p>
                    </div>
                </div>
                <div class="news-thumbnail">
                    <div class="news-thumbnail-text">
                        <p>{{news.text}}</p>
                    </div>
                </div>
            </div>
            <div class="news-foot">
                <div><i class="icon iconfont icon-fensi"></i>{{news.time}}</div>
                <div class="news-hudong">
                    <span><i class="icon iconfont icon-more"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-news",
        props: ['news'],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .news-content {
        width: 100%;
        background-color: white;
        display: flex;
        padding-top: 0.3rem;
    }
    .news-content>div {
        display: inline-block;
    }
    .news-img {
        flex: 1;
        text-align: center;
        padding: 0.7vh 0 0 0;
        width: 9vh;
    }
    .news-img img {
        width: 7vh;
        height: 7vh;
        border-radius: 3.5vh;
    }
    .news-text-div {
        flex: 4;
    }
    .news-text-all {
        display: flex;
    }
    .news-user {
        flex: 4;
    }
    .news-thumbnail {
        flex: 1;
    }
    .news-thumbnail-text {
        width: 14vw;
        height: 14vw;
        margin: 2vh auto;
    }
    .news-thumbnail-text p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        padding: 0;
        margin: 0;
        color: #676666;
        font-size: 0.7rem;
    }
    .news-name {
        height: 4vh;
        line-height: 4vh;
        font-size: 0.9rem;
    }
    .news-name span {
        color: #2d8cf0;
    }
    .news-text {
        padding-right: 2vh;
    }
    .news-text p {
        padding: 0;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 0.8rem;
        color: #777474;
        line-height: 1.4rem;
    }
    .news-foot {
        font-size: 0.6rem;
        color: #8f8f8f;
        height: 5vh;
        line-height: 5vh;
        padding-right: 2vh;
        border-bottom: 1px solid #dcdbdbba;
    }
    .news-foot>div {
        display: inline-block;
    }
    .news-foot div:first-child i{
        font-size: 0.9rem;
    }
    .news-hudong {
        float: right;
    }
    .news-hudong>div {
        display: inline-block;
        padding: 0 2vw;
    }
    .news-hudong i {
        font-size: 1rem;
    }
</style>