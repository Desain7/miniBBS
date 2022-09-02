<template>
    <van-sticky>
        <div class="navBar">
            <div class="content">
                <van-row>
                    <van-col span="10">
                        <div class="left">
                            <div class="navText" v-for="(item, index) in navText" :key="index">{{ item }}</div>
                        </div>
                    </van-col>
                    <van-col span="6"></van-col>
                    <van-col span="8">
                        <div class="right">
                            <div class="icon">
                                <van-icon name="search" size="18" color="rgb(47,52,56)" />
                                <van-icon name="envelop-o" size="18" color="rgb(47,52,56)" />
                            </div>

                        </div>
                    </van-col>
                </van-row>
            </div>
        </div>
    </van-sticky>

</template>

<script lang="ts" setup>
let navText = ['动态', '推荐', '热榜']
</script>

<style lang="scss" scoped>
.navBar {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    .content {
        height: 100%;
        width: 100%;
        display: flex;

        .van-row {
            margin: auto 0;
            width: 100%;

            .left {
                display: inline-block;

                .navText {
                    display: inline-block;
                    margin-left: 1rem;
                }
            }

            .right {
                display: inline-flex;
                float: right;

                .van-icon {
                    margin-right: 0.5rem;
                }
            }
        }

    }

}
</style>