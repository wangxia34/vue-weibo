<template>
    <div class="post-content">
        <div class="post-head">
            <div @click="goUserPage" class="post-head-img">
                <img :src="post.user.img" alt="">
            </div>
            <div @click="goUserPage" class="post-head-user">
                <div class="post-head-name"><span>{{post.user.name}}</span></div>
                <div class="post-head-time">
                    <span>{{post.time}}</span> 来自<span class="post-tel">{{post.user.tel}}</span>
                </div>
            </div>
            <div class="post-head-icon">
                <i @click.stop="showAction" class="icon iconfont icon-xiangxia"></i>
            </div>
        </div>
        <div @click="goTextPage('text')" class="post-content">
            <div class="post-content-text">
                <p>{{post.text}}</p>
            </div>
            <div class="post-content-img">
                <img :src="post.tupian" @load="isTupianTi" alt="">
                <div class="post-img-show"
                     @click.stop="showImg">
                    <span v-if="isTupianShow">点击查看大图</span>
                </div>
            </div>
        </div>
        <div v-if="!post.isText" class="post-foot">
            <div @click="goTextPage('isZhuanfa')">
                <span><i class="icon iconfont icon-web-icon-"></i></span>
                <span class="post-foot-num">{{post.zhuanfa}}</span>
            </div>
            <div @click="goTextPage('isPinglun')">
                <span><i class="icon iconfont icon-pinglun"></i></span>
                <span class="post-foot-num">{{post.pinglun}}</span>
            </div>
            <div @click="setZan" :class="{'trueZan': post.isZan}">
                <span><i class="icon iconfont icon-zan"></i></span>
                <span class="post-foot-num">{{post.dianzan}}</span>
            </div>
        </div>
        <div v-show="isImagesShow" class="post-images-div">
            <div class="post-images-i"><i @click="closeImages" class="icon iconfont icon-xiangzuo"></i></div>
            <div class="post-images">
                <img :src="post.tupian" alt="">
            </div>
        </div>
        <div v-show="isAction" @click="closeAction" class="post-action-div">
            <div class="post-action-ul">
                <ul>
                    <li><span>收藏</span></li>
                    <li><span>帮上头条</span></li>
                    <li @click.stop="delItem"><span>移出分组</span></li>
                    <li @click.stop="delItem"><span>取消关注</span></li>
                    <li @click.stop="delItem"><span>投诉</span></li>
                    <li @click.stop="delItem"><span>屏蔽</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-content",
        props: ['post'],
        data() {
            return {
                isTupianShow: false,
                isImagesShow: false,
                isAction: false,
                content: this.post
            }
        },
        methods: {
            isTupianTi(event) {
                let imgs = new Image();
                imgs.src = event.path[0].src;
                this.isTupianShow = imgs.width > event.path[0].width || imgs.height > event.path[0].height;
            },
            showImg() {
                this.isImagesShow = true;
                this.$web.scrollStop();
            },
            closeImages() {
                this.isImagesShow = false;
                this.$web.scrollMove();
            },
            goTextPage(index) {
                this.$router.push({name: 'textPage', params: {content: this.content, index: index}});
            },
            showAction() {
                this.isAction = true;
                this.$web.scrollStop();
            },
            closeAction() {
                this.isAction = false;
                this.$web.scrollMove();
            },
            delItem() {
                this.$emit('delItem', this.post.id);
                this.closeAction();
            },
            setZan() {
                this.post.dianzan = this.post.isZan ? this.post.dianzan - 1 : this.post.dianzan + 1;
                this.post.isZan = !this.post.isZan;
            },
            goUserPage() {
                this.$router.push({name: 'userPage', params: {content: this.content.user}});
            }
        }
    }
</script>

<style scoped>
    .post-content {
        width: 100%;
        margin-top: 0.3rem;
        background-color: white;
    }
    .post-head {
        width: 100%;
        height: 9vh;
        display: flex;
        position: relative;
    }
    .post-head>div {
         display: inline-block;
     }
    .post-head-img {
        height: 100%;
        flex: 1;
        text-align: center;
        padding: 0.7vh 0 0 0;
    }
    .post-head-img img {
        width: 7vh;
        height: 7vh;
        border-radius: 3.5vh;
    }
    .post-head-user {
        height: 100%;
        flex: 4;
    }
    .post-head-name {
        color: #df5f06;
        font-size: 0.9rem;
        height: 5vh;
        line-height: 5vh;
    }
    .post-head-time {
        font-size: 0.6rem;
        height: 4vh;
    }
    .post-head-icon {
        position: absolute;
        right: 1rem;
        top: 0.3rem;
        color: #aaa;
    }
    .post-tel {
        color: #4b97e6;
    }
    .post-content {
        width: 100%;
    }
    .post-content-img {
        margin-left: 3vh;
        position: relative;
        display: inline-block;
        max-height: 40vh;
    }
    .post-content-img img {
        max-width: 70vw;
        max-height: 40vh;
    }
    .post-img-show {
        position: absolute;
        font-size: 0.7rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        /*background-color: #aaaaaa85;*/
    }
    .post-img-show span {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
    }
    .post-content-text {
        padding: 0 1vh;
        font-size: 0.9rem;
    }
    .post-images-div {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #032531;
        z-index: 11;
    }
    .post-images-i {
        height: 6vh;
        background-color: #3639407a;
    }
    .post-images-i i {
        color: #b8b8b8;
        height: 6vh;
        line-height: 6vh;
        margin-left: 1vh;
    }
    .post-images {
        height: 94vh;
        text-align: center;
        line-height: 94vh;
    }
    .post-images img {
        max-width: 100%;
    }
    .post-foot {
        height: 8vh;
        line-height: 8vh;
    }
    .post-foot>div {
        display: inline-block;
        width: 33vw;
        text-align: center;
    }
    .post-foot>div i {
        font-size: 1.2rem;
    }
    .post-foot-num {
        font-size: 0.8rem;
    }
    .trueZan {
        color: #df5f06;
    }
    .post-action-div {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #58585880;
        z-index: 11;

    }
    .post-action-ul {
        width: 60vw;
        height: 30vh;
        background-color: white;
        position: absolute;
        top: 50vh;
        left: 50vw;
        margin-top: -15vh;
        margin-left: -30vw;
        border-radius: 1rem;
    }
    .post-action-ul ul {
        width: 100%;
        height: 100%;
    }
    .post-action-ul ul li {
        height: 5vh;
        box-sizing: border-box;
        border-bottom: 1px solid #e8e8e8;
        line-height: 5vh;
        padding-left: 1.2rem;
    }
    .post-action-ul ul li:last-child {
        border-bottom: none;
    }

</style>