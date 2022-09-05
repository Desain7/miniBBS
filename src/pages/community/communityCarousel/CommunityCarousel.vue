<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in carousel" :key="index">
                <van-image width="100%" height="100" :src="item">
                </van-image>
            </van-swipe-item>
        </van-swipe>
        <van-tabs v-model:active="activeTab" swipeable animated line-width=0 line-height=0>
            <van-tab v-for="(item, index) in tabItems" :key="index" >
                <template #title>
                    <van-image :src="item.icon"></van-image>
                    <div class="titleText">
                        {{item.name}}
                    </div>
                </template>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
interface tabItem {
    name: string,
    icon: string,
}

let carousel: Array<string> = ['']
let activeTab = ref('1')
let tabItems: Array<tabItem> = [
    {
        name: 'PC游戏',
        icon: "url('./imgs/pcyx')",
    },
    {
        name: '主机游戏',
        icon: './imgs/zjyx',
    },
    {
        name: '侠盗猎车手5',
        icon: './imgs/gta5',
    },
    {
        name: '守望先锋',
        icon: './imgs/swxf',
    },
    {
        name: '盒友杂谈',
        icon: './imgs/hyzt',
    },
    {
        name: '数码硬件',
        icon: './imgs/smyj',
    },
]

</script>

<style lang="scss" scoped>
</style>