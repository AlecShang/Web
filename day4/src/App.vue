<template>
    <div>
        <!-- <van-button type="default">默认按钮</van-button> -->
        <!-- <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button> -->

        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in swipeImgs" :key="item.url">
                <van-image width="100%" height="10rem" fit="cover" :src="item" />
            </van-swipe-item>
        </van-swipe>
        <van-tabbar v-model="active" active-color="#07c160" route>
            <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
            <van-tabbar-item icon="search" dot replace to="searchPage">搜索</van-tabbar-item>
            <van-tabbar-item icon="friends-o" replace badge="5" to="addressPage">通讯录</van-tabbar-item>
            <van-tabbar-item icon="setting-o" replace badge="20" to="settingPage">设置</van-tabbar-item>
        </van-tabbar>
        <router-view></router-view>
    </div>
</template>
<script scoped>
    import {
        Notify,
    } from 'vant';

    import ws01 from '../src/images/ws01.jpeg';
    import ws02 from '../src/images/ws02.jpeg';
    import ws03 from '../src/images/ws03.jpeg';
    import ws04 from '../src/images/ws04.jpeg';
    export default {
        props: {
            route: true,
        },
        data() {
            return {
                active: 0,
                swipeImgs: [ws01, ws02, ws03, ws04]
            }
        },
        methods: {
            onChange: function (index) {
                // Notify({
                //     type: 'primary',
                //     message: index
                // });
            }
        },
    }
</script>
<style scoped lang="less">
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        /* line-height: 150px; */
        text-align: center;
        height: 10rem;
        /* background-color: #39a9ed; */

    }
</style>