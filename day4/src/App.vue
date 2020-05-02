<template>
    <div>
        <!-- <van-button type="default">默认按钮</van-button> -->
        <!-- <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button> -->
        <van-tabbar v-model="active" active-color="#07c160">
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

        Notify
    } from 'vant';

    export default {
        props: {
            route: true,
        },
        data() {
            return {
                active: 0,
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
</style>