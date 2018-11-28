<template>
    <div>
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive>
                    <router-view> </router-view>
                </keep-alive>
            </transition>
        </div>
        <v-navigation> </v-navigation>
    </div>
</template>

<script>
    import vNavigation from './Navigation.vue';
    export default {
        name: "home",
        components:{
            vNavigation
        },
    }
</script>

<style scoped>

</style>