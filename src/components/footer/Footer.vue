<template>
    <van-tabbar route  v-model="activeTab" @change="onChange" active-color="rgb(20,25,29)" inactive-color="rgb(150,153,156)">
        <van-tabbar-item  v-for="(item, index) in tabBarItem" :key="index" :icon="item.icon" :to="item.navRoute">{{item.text}}</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts" setup>
    import {ref} from 'vue'
    let tabBarItem:Array<any> = [
        {icon:'wap-home', text:'首页',navRoute:'/'},
        {icon:'friends', text:'社区',navRoute:'/community'},
        {icon:'gift', text:'游戏库',navRoute:'/games'},
        {icon:'smile', text:'我',navRoute:'/personal'},
        ]
    let activeTab = ref('1')
    let onChange = (e:any)=>{
        activeTab = e
    }
</script>

<style lang="sass">
    
</style>