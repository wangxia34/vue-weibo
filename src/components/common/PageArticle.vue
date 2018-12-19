<template>
    <div class="article-content">
        <div class="article-text">
            <div class="article-title">
                <span>{{article.title}}</span>
            </div>
            <div class="article-img-all">
                <div class="article-img"><img :src="article.content.img1" alt=""></div>
                <div class="article-img"><img :src="article.content.img2" alt=""></div>
                <div class="article-img"><img :src="article.content.img3" alt=""></div>
            </div>
        </div>
        <div class="article-foot">
            <span>{{article.user.name}}</span>
            <span class="article-foot-num">{{article.pinglun}} 评论</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-article",
        props: ['article'],
    }
</script>

<style scoped>
    .article-content {
        width: 100%;
        background-color: white;
    }
    .article-text {
        width: 100%;
    }
    .article-title {
        font-size: 1rem;
        height: 5vh;
        line-height: 5vh;
        padding: 0 2vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .article-img-all {
        display: flex;
        padding: 0 2vw;
    }
    .article-img {
        display: inline-block;
        flex: 1;
        padding: 0.2rem 0.2rem 0.2rem 0;
    }
    .article-img {
        width: 100%;
        height: 100%;
    }
    .article-img img {
        width: 100%;
        height: 100%;
    }
    .article-foot {
        padding: 0 2vw;
        border-bottom: 1px solid #dcdbdbba;
        font-size: 0.6rem;
        color: #8f8f8f;
        height: 5vh;
        line-height: 5vh;
    }
    .article-foot-num {
        margin: 0 2vw;
    }
</style>