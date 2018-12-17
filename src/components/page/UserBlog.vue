<template>
    <div class="userBlog-content">
        <div class="userBlog-head">
            <div class="userBlog-head-first">全部微博(9999)</div>
            <div class="userBlog-head-right">
                <i class="icon iconfont icon-fenlei"></i>筛选
            </div>
        </div>
        <div class="userBlog-zhiding">

        </div>
        <div class="userBlog-Blog">
            <v-page-content
                    v-for="post in weiboList"
                    :post="post"
                    @delItem="deleteItem"
            > </v-page-content>
        </div>
    </div>
</template>

<script>
    import vPageContent from '../common/PageContent.vue';
    export default {
        name: "user-blog",
        props: ['user'],
        components: {
            vPageContent
        },
        data() {
            return {
                weiboList: [],
                userName: this.user,
            }
        },
        methods: {
            deleteItem(id) {
                let that = this;
                that.weiboList.map(function (value, key) {
                    if (value.id === id) {
                        that.weiboList.splice(key, 1);
                    }
                });
            }
        },
        created() {
            let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/user_weibo?name=" + this.userName;
            this.$axios.post(url, {
                name: this.userName
            }).then((res) => {
                this.weiboList = res.data.data;
            });
        }
    }
</script>

<style scoped>
    .userBlog-content {
        width: 100%;
        background-color: rgba(220, 219, 219, 0.38);
    }
    .userBlog-head {
        width: 100%;
        height: 5vh;
        line-height: 5vh;
        font-size: 0.8rem;
    }
    .userBlog-head>div {
        display: inline-block;
        padding: 0 2vw;
    }
    .userBlog-head-first {
        color: #8f8f8f;
    }
    .userBlog-head-right {
        float: right;
        color: #409EFF;
    }
    .userBlog-head-right i {
        font-size: 0.8rem;
    }
</style>