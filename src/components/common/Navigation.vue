<template>
    <div>
        <ul class="navigation-ul">
            <li v-for="item in items" class="navigation-li">
                <i class="icon iconfont" :class="item.icon"></i>
                <div class="navigation-title">{{item.title}}</div>
            </li>
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
                        icon: 'icon-shipin',
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

</style>