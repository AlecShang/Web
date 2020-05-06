<template>
    <div>
        <div>
            <van-row>
                <van-col span="6">
                    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="4rem" />
                </van-col>
                <van-col span="12">
                    <span>王鑫鑫</span>
                </van-col>
                <van-col span="6">
                    <van-icon name="manager-o" size="2rem" />
                    <van-icon name="setting-o" />
                </van-col>
            </van-row>
            <van-row>
                <van-col span="8">span: 8</van-col>
                <van-col span="8">span: 8</van-col>
                <van-col span="8">span: 8</van-col>
            </van-row>
        </div>
        <div></div>
        <div></div>
        <router-view></router-view>
    </div>
</template>
<script scoped>
    import {
        Notify
    } from 'vant';
    export default {
        props: {
            icon: {
                size: "5rem",
            }
        },
        data() {
            return {}
        },
        methods: {},
    }
</script>
<style scoped lang="less">
    .van-row {
        size: 4rem;
    }
</style>