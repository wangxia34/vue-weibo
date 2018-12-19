<template>
    <div class="userArticle-content">
        <div class="userArticle-Article">
            <v-page-article v-for="item in articleList"
                          :article="item">
            </v-page-article>
        </div>
    </div>
</template>

<script>
    import vPageArticle from '../common/PageArticle'
    export default {
        name: "user-article",
        props: ['user'],
        components: {
            vPageArticle
        },
        data() {
            return {
                articleList: [],
                userName: this.user,
            }
        },
        created() {
            let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/article_list?name=" + this.userName;
            this.$axios.post(url, {
                index: this.userName
            }).then((res) => {
                this.articleList = res.data.data;
            })
        }
    }
</script>

<style scoped>

</style>