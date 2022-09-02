<template>
    <div class="newsCard" v-for="(item, index) in articleArr" :key="index">
        <div class="newsContent">
            <van-row>
                <van-col span="16">
                    <div class="leftContent">
                        <div class="title">
                            {{ item.title }}
                        </div>
                        <div class="bottomHandle">
                            <div class="text">
                                <div class="time">
                                    {{ item.createTime }}·
                                </div>

                                <div class="category">
                                    {{ item.category }}
                                </div>
                                <van-icon name="close" />
                            </div>
                            <div class="message">
                                <van-icon name="chat" color="rgb(200,205,209)" />
                            </div>
                        </div>
                    </div>
                </van-col>
                <van-col span="8">
                    <div class="rightContent">
                        <div class="imageContent">
                            <van-image width="100%" height="80" fit="cover" :src='item.imgUrl' />
                        </div>

                    </div>
                </van-col>
            </van-row>
        </div>
        <van-divider />
    </div>
</template>

<script lang="ts" setup>
interface articleObj {
    id: number,
    title: string,
    category: string,
    createTime: string,
    imgUrl: string,
}
let articleArr: Array<articleObj> = [
    {
        id: 1,
        title: '《刺客信条:奥特赛》可能即将加入XGP订阅！',
        category: '主机游戏',
        createTime: '',
        imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.gamersky.com%2Fupimg%2Fpic%2F2022%2F09%2F01%2Fsmall_202209011729372012.jpg&refer=http%3A%2F%2Fimg1.gamersky.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664621058&t=1855421fe8274db096355c77a07597b4',
    },
    {
        id: 2,
        title: '《光环：无限》战役合作模式再次延期',
        category: '主机游戏',
        createTime: '',
        imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.zhaosy.com%2Fd%2Ffile%2Fp%2F2021%2F10-18%2Fb3ff756ddf5b4712dba3d808c7269300.jpg&refer=http%3A%2F%2Fwww.zhaosy.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664621247&t=0e8b1a5ec4897b32e09bfb56ec46fa7e',
    },
    {
        id: 3,
        title: '《刺客信条:奥特赛》可能即将加入XGP订阅！',
        category: '',
        createTime: '',
        imgUrl: '',
    },
    {
        id: 4,
        title: '《刺客信条:奥特赛》可能即将加入XGP订阅！',
        category: '',
        createTime: '',
        imgUrl: '',
    },
    {
        id: 5,
        title: '《刺客信条:奥特赛》可能即将加入XGP订阅！',
        category: '',
        createTime: '',
        imgUrl: '',
    },
    {
        id: 6,
        title: '《刺客信条:奥特赛》可能即将加入XGP订阅！',
        category: '',
        createTime: '',
        imgUrl: '',
    },
]
</script>

<style lang="scss" scoped>
.newsCard {
    height: 6.5rem;
    box-sizing: border-box;
    padding: 3% 2% 0 2%;

    .newsContent {

        .leftContent {
            .bottomHandle {
                margin-top: 1rem;

                .text {
                    color: rgb(200, 205, 209);
                    display: inline-block;
                    font-size: 0.5rem;

                    .time {
                        display: inline-block;
                        margin-right: 2px;
                    }

                    .category {
                        display: inline-block;
                        margin-right: 2px;
                    }
                }

                .message {
                    margin-right: 1rem;
                    float: right;
                }
            }
        }

        .rightContent {
            .imageContent {
                .van-image {
                    border-radius: 5%;

                    .van-image__img {
                        border-radius: 5%;
                    }
                }
            }
        }
    }

}
</style>