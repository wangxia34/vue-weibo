<template>
    <div class="navigation">
        <ul class="navigation-ul">
            <router-link v-for="item in items" class="navigation-li" tag="li" :to="item.index">
                <i class="icon iconfont" :class="item.icon"></i>
                <div class="navigation-title">{{item.title}}</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        data(){
            return {
                items: [
                    {
                        icon: 'icon-yemian-copy',
                        index: 'homePage',
                        title: '首页'
                    },
                    {
                        icon: 'icon-shipin1',
                        index: 'videoPage',
                        title: '视频'
                    },
                    {
                        icon: 'icon-faxian',
                        index: 'findPage',
                        title: '发现'
                    },
                    {
                        icon: 'icon-xiaoxi',
                        index: 'newsPage',
                        title: '消息'
                    },
                    {
                        icon: 'icon-wo',
                        index: 'myPage',
                        title: '我'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .navigation {
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
    .navigation-ul {
        list-style-type: none;

    }
    .navigation-li {
        display: inline-block;
        width: 20%;
        padding: 10px 0;
    }
</style>