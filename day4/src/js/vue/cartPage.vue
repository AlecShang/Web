<template>
    <div>
        <van-swipe-cell>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <van-swipe-cell>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
        <!-- 提交栏 -->
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
            </template>
        </van-submit-bar>
        <router-view></router-view>
    </div>
</template>
<script scoped>
    import {
        SubmitBar,
    } from 'vant';
    export default {
        props: {},
        data() {
            return {
                checked: false,
            }
        },
        methods: {
            onSubmit: function () {
                return false
            },
            onClickEditAddress: function () {
                return false
            }
        },
    }
</script>
<style scoped lang="less">
    .goods-card {
        margin: 0;
        background-color: white;
    }

    .delete-button {
        height: 100%;
    }

    .van-submit-bar {
        margin-bottom: 3rem;
    }
</style>