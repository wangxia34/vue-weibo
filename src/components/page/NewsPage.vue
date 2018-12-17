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
            <div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news-page",
        data() {
            return {
                isNotice: true,
                isNews: false
            }
        },
        methods: {
            setSelection(index){
                this.isNotice = false;
                this.isNews = false;
                this["is" + index] = true;
            }
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