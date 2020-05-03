<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in swipeImgs" :key="item.url">
                <van-image width="100%" height="120%" fit="cover" :src="item" />
            </van-swipe-item>
        </van-swipe>
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-icon name="like" size="5rem" />
                <!-- <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" /> -->
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-7.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-5.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-6.jpg" />
            </van-grid-item>
        </van-grid>
        <router-view></router-view>
    </div>
</template>

<script scoped>
    import {
        Notify,
    } from 'vant';

    import ws01 from '../../images/ws01.jpeg';
    import ws02 from '../../images/ws02.jpeg';
    import ws03 from '../../images/ws03.jpeg';
    import ws04 from '../../images/ws04.jpeg';
    export default {
        props: {},
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