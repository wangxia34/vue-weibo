<template>
    <div class="userVideo-content">
        <div class="userVideo-zhiding">

        </div>
        <div class="userVideo-Blog">
            <v-page-video v-for="item in videoList"
                          :video="item" @delItem="deleteVideo">
            </v-page-video>
        </div>
    </div>
</template>

<script>
    import vPageVideo from '../common/PageVideo'
    export default {
        name: "user-video",
        props: ['user'],
        components: {
            vPageVideo
        },
        data() {
            return {
                videoList: [],
                userName: this.user,
            }
        },
        methods: {
            deleteVideo(id) {
                let that = this;
                that.videoList.map(function (value, key) {
                    if (value.id === id) {
                        that.videoList.splice(key, 1);
                    }
                });
            },
        },
        created() {
            let url = "https://www.easy-mock.com/mock/5c073d6f44a4ce28155b1d1b/weibo/weibo/user_video?name=" + this.userName;
            this.$axios.post(url, {
                name: this.userName
            }).then((res) => {
                this.videoList = res.data.data;
            });
        }
    }
</script>

<style scoped>

</style>