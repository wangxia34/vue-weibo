<template>
    <div class="video-content">
        <div class="video-head">
            <div @click="goUserPage" class="video-head-img">
                <img :src="video.user.img" alt="">
            </div>
            <div @click="goUserPage" class="video-head-user">
                <div class="video-head-name"><span>{{video.user.name}}</span></div>
                <div class="video-head-time">
                    共<span>{{video.user.videoNum}}</span>个视频· <span>{{fansNum}}</span>人在追
                </div>
            </div>
            <div class="video-head-icon">
                <i @click.stop="closeItem" class="icon iconfont icon-guanbi"></i>
            </div>
        </div>
        <div @click="goTextPage('text')" class="video-content">
            <div class="video-content-img">
                <img :src="video.tupian" alt="">
                <div class="video-img-show"
                     @click.stop="showImg">
                </div>
            </div>
            <div class="video-content-text">
                <span>{{video.album}}</span> 专辑
            </div>
        </div>
        <div class="video-foot">
            <div @click="goTextPage('isZhuanfa')">
                <span><i class="icon iconfont icon-web-icon-"></i></span>
                <span class="video-foot-num">{{video.zhuanfa}}</span>
            </div>
            <div @click="goTextPage('isPinglun')">
                <span><i class="icon iconfont icon-pinglun"></i></span>
                <span class="video-foot-num">{{video.pinglun}}</span>
            </div>
            <div @click="setZan" :class="{'trueZan': video.isZan}">
                <span><i class="icon iconfont icon-zan"></i></span>
                <span class="video-foot-num">{{video.dianzan}}</span>
            </div>
        </div>
        <div v-show="isImagesShow" class="video-images-div">
            <div class="video-images-i"><i @click="closeImages" class="icon iconfont icon-xiangzuo"></i></div>
            <div class="video-images">
                <img :src="video.tupian" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-video",
        props: ['video'],
        data() {
            return {
                videoItem: this.video,
                fansNum: "",
                isImagesShow: false
            }
        },
        methods: {
            goUserPage() {
                this.$router.push({name: 'userPage', params: {content: this.videoItem.user}});
            },
            closeItem() {
                this.$emit('delItem', this.video.id);
            },
            goTextPage(index) {
                this.$router.push({name: 'textPage', params: {content: this.videoItem, index: index}});
            },
            showImg() {
                this.isImagesShow = true;
                this.$web.scrollStop();
            },
            closeImages() {
                this.isImagesShow = false;
                this.$web.scrollMove();
            },
            setZan() {
                this.video.dianzan = this.video.isZan ? this.video.dianzan - 1 : this.video.dianzan + 1;
                this.video.isZan = !this.video.isZan;
            },
        },
        created() {
            this.fansNum = this.$web.getStrNum(this.videoItem.user.fansNum);
        }
    }
</script>

<style scoped>
    .video-content {
        width: 100%;
        margin-top: 0.3rem;
        background-color: white;
    }
    .video-head {
        width: 100%;
        height: 9vh;
        display: flex;
        position: relative;
    }
    .video-head>div {
        display: inline-block;
    }
    .video-head-img {
        height: 100%;
        flex: 1;
        text-align: center;
        padding: 0.7vh 0 0 0;
    }
    .video-head-img img {
        width: 7vh;
        height: 7vh;
        border-radius: 3.5vh;
    }
    .video-head-user {
        height: 100%;
        flex: 4;
    }
    .video-head-name {
        color: #df5f06;
        font-size: 0.9rem;
        height: 5vh;
        line-height: 5vh;
    }
    .video-head-time {
        font-size: 0.6rem;
        height: 4vh;
        color: #8f8f8f;
    }
    .video-head-icon {
        position: absolute;
        right: 1rem;
        top: 0.3rem;
        color: #aaa;
    }
    .video-content {
        width: 100%;
    }
    .video-content-img {
        margin-left: 3vh;
        position: relative;
        display: inline-block;
        max-height: 40vh;
    }
    .video-content-img img {
        max-width: 90vw;
        max-height: 40vh;
    }
    .video-img-show {
        position: absolute;
        font-size: 0.7rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        /*background-color: #aaaaaa85;*/
    }
    .video-img-show span {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
    }
    .video-content-text {
        padding: 0 6vw;
        color: #8f8f8f;
        font-size: 0.8rem;
    }
    .video-content-text span {
        color: #000000;
    }
    .video-images-div {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #032531;
        z-index: 11;
    }
    .video-images-i {
        height: 6vh;
        background-color: #3639407a;
    }
    .video-images-i i {
        color: #b8b8b8;
        height: 6vh;
        line-height: 6vh;
        margin-left: 1vh;
    }
    .video-images {
        height: 94vh;
        text-align: center;
        line-height: 94vh;
    }
    .video-images img {
        max-width: 100%;
    }
    .video-foot {
        height: 8vh;
        line-height: 8vh;
    }
    .video-foot>div {
        display: inline-block;
        width: 33vw;
        text-align: center;
    }
    .video-foot>div i {
        font-size: 1.2rem;
    }
    .video-foot-num {
        font-size: 0.8rem;
    }
    .trueZan {
        color: #df5f06;
    }
</style>