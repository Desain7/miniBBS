<template>
    <div class="homePage">
        <van-tabs v-model:active="activeTab" color="rgb(20,25,29)" swipeable animated sticky offset-top="48">
            <van-tab v-for="(item, index) in tabPages" :title=item.titleText>
                <HomeCarousel v-if="index == 0"></HomeCarousel>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HomeCarousel from './homeCarousel/HomeCarousel.vue';
interface TabPage {
    titleText: string;
}


let activeTab = ref('1')
let tabPages: Array<TabPage> = [
    { titleText: '全部' },
    { titleText: '盒友杂谈' },
    { titleText: 'PC游戏' },
    { titleText: '主机游戏' },
    { titleText: '数码硬件' },
    { titleText: '情投一盒' },
]
</script>

<style lang="scss" scoped>
</style>