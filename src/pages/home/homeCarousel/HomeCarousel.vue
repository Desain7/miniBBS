<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in calenderItem" :key="index">
                <van-image width="100%" height="200" :src="item.url" fit="cover" />
                <div class="cTitle">
                    <div class="text"> {{ item.title }}</div>
                </div>
            </van-swipe-item>
        </van-swipe>
        <NewsCard></NewsCard>
    </div>
</template>

<script lang="ts" setup>
import NewsCard from '../newsCard/NewsCard.vue';
interface cItem {
    title: string,
    url: string
}
let calenderItem: Array<cItem> = [
    { title: 'Epic限免喜加一来袭！', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fthing_review%2Fl%2Fpublic%2F1342828.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664618627&t=4805a171c6213a41cf0ba67ec0a1b9a4' },
    { title: '街头bia!bia!bia!', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.muzisoft.com%2Fuploads%2Ftag%2F146500578933.jpg&refer=http%3A%2F%2Fi1.muzisoft.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664619006&t=ecdba918443fb47ad9da45a8f1ee2e76' },
    { title: 'P5R天下第一！', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F643101735d62557766b2e60b4a76000f888e117f.jpg&refer=http%3A%2F%2Fi2.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664619758&t=bb4c65e178ebec13bb4b47bf4cc26956' },
    { title: '塞尔达是天!', url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170629%2Faeee5a4efd0249a5820bc3b30ab15609_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664619213&t=b895c0af5a50a74145d581e029f5436e' },
]
</script>

<style lang="scss" scoped>
.my-swipe {
    .cTitle {
        position: absolute;
        width:100%;
        bottom: 10%;
        text-align: center;
        .text{
            color: #fff;
            text-shadow: #000 1px 1px;
        }
    }
}
</style>