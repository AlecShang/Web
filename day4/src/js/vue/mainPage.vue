<template>
    <div>

        <!-- 下拉提示 -->

        <!-- 顶部搜索框 -->
        <div>
            <van-row class="iconBackgroundColor">
                <van-col span="3">
                    <van-icon name="bars" size="2.8rem" />
                </van-col>
                <van-col span="21">
                    <van-search v-model="value" shape="round" background="gray" placeholder="请输入搜索关键词" />
                </van-col>
            </van-row>
        </div>

        <!-- swipe轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in swipeImgs" :key="item.url">
                <van-image width="100%" height="120%" fit="cover" :src="item" />
            </van-swipe-item>
        </van-swipe>

        <!-- 栏目分类 -->
        <van-grid :border="false" :column-num="3">
            <van-grid-item @click="toastPrompt">
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </van-grid-item>
            <van-grid-item @click="toastPrompt">
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item @click="toastPrompt">
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
            <van-grid-item @click="toastPrompt">
                <van-image src="https://img.yzcdn.cn/vant/apple-7.jpg" />
            </van-grid-item>
            <van-grid-item @click="toastPrompt">
                <van-image src="https://img.yzcdn.cn/vant/apple-5.jpg" />
            </van-grid-item>
            <van-grid-item @click="toastPrompt">
                <van-image src="https://img.yzcdn.cn/vant/apple-6.jpg" />
            </van-grid-item>
        </van-grid>


        <!-- 商品信息 -->
        <div>
            <van-row>
                <van-col span="6">秒杀</van-col>
                <van-col span="12">
                    <van-count-down :time="time" format="HH 时 mm 分 ss 秒" />
                </van-col>
                <van-col span="6">更多秒杀
                    <van-icon name="arrow" />
                </van-col>
            </van-row>
            <van-grid icon-size="3rem">
                <van-grid-item icon="https://img.yzcdn.cn/vant/apple-7.jpg" text="$12.3" />
                <van-grid-item icon="https://img.yzcdn.cn/vant/apple-8.jpg" text="$31.2" />
                <van-grid-item icon="https://img.yzcdn.cn/vant/apple-1.jpg" text="$5" />
                <van-grid-item icon="https://img.yzcdn.cn/vant/apple-2.jpg" text="$109" />
            </van-grid>
            <van-row>
                <van-col span="24" align="center">
                    猜你喜欢
                </van-col>
            </van-row>
            <van-row>
                <van-col span="12">
                    <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/apple-3.jpg"
                        description="$31.2 " />
                </van-col>
                <van-col span="12">
                    <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/apple-4.jpg" description="$31.2" />
                </van-col>
            </van-row>
            <van-row>
                <van-col span="12">
                    <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/apple-5.jpg" description="$31.2" />
                </van-col>
                <van-col span="12">
                    <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/apple-6.jpg" description="$31.2" />
                </van-col>
            </van-row>
            <van-row>
                <van-col span="12">
                    <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/apple-1.jpg" description="$31.2" />
                </van-col>
                <van-col span="12">
                    <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/apple-2.jpg" description="$31.2" />
                </van-col>
            </van-row>
        </div>
        <router-view></router-view>
    </div>
</template>

<script scoped>
    import {
        Notify,
        Toast,
    } from 'vant';

    import ws01 from '../../images/ws01.jpeg';
    import ws02 from '../../images/ws02.jpeg';
    import ws03 from '../../images/ws03.jpeg';
    import ws04 from '../../images/ws04.jpeg';
    export default {
        props: {},
        data() {
            return {
                value: '',
                time: 30 * 60 * 60 * 1000,
                swipeImgs: [ws01, ws02, ws03, ws04],
                // b: document.body,
                // c: document.getElementsByTagName('canvas')[0],
                // a: c.getContext('2d'),
            }
        },
        methods: {
            onChange: function (index) {
                // Notify({
                //     type: 'primary',
                //     message: index
                // });
            },
            toastPrompt: function () {
                Toast({
                    message: '小鑫鑫这个栏目还没有做好哦',
                    icon: 'like-o',
                });
            },
            onRefresh: function () {
                setTimeout(() => {
                    Toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 1000);
            },

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

    van-icon,
    van-row,
    .iconBackgroundColor {
        background-color: gray;
        text-align: center;
    }
</style>