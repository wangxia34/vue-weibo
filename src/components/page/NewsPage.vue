<template>
    <div>
        <div class="header-div">
            <div class="header-first-div"><i class="icon iconfont "></i></div>
            <div class="header-content-div">
                <span @click="setSelection('Notice')" :class="isNotice?'action-title':''">通知</span>
                <span @click="setSelection('News')" :class="isNews?'action-title':''">消息</span>
            </div>
            <div class="header-last-div"><i class="icon iconfont icon-xiaoxishezhi"></i></div>
        </div>
        <div class="content-div">
            <v-page-News
                    v-for="item in NoticeList"
                    :news="item">
            </v-page-News>
        </div>
    </div>
</template>

<script>
    import vPageNews from '../common/PageNews'
    export default {
        name: "news-page",
        components: {
            vPageNews
        },
        data() {
            return {
                isNotice: true,
                isNews: false,
                NoticeList: []
            }
        },
        methods: {
            setSelection(index){
                this.isNotice = false;
                this.isNews = false;
                this["is" + index] = true;
            }
        },
        created() {
            let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/news_list";
            this.$axios.post(url, {
                index: this.$store.state.user
            }).then((res) => {
                this.NoticeList = res.data.data;
            })
        }
    }
</script>

<style scoped>
    .header-last-div i {
        font-size: 1.5rem;
    }
    .action-title {
        border-bottom: 2px solid #df5f06;
    }
</style>