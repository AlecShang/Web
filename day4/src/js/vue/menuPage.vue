<template>
    <div>


        <van-tree-select height="55em" :items="items" :main-active-index.sync="active">
            <template #content>
                <van-card v-if="active === 0" num="2" price="2.00" desc="描述信息" title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
                <van-card v-if="active === 1" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
            </template>
        </van-tree-select>
        <router-view></router-view>
    </div>
</template>
<script scoped>
    import {
        Notify
    } from 'vant';
    export default {
        props: {},
        data() {
            return {
                activeKey: 0,
                active: 0,
                items: [{
                        text: '鑫的推荐'
                    }, {
                        text: '鑫的衣服'
                    }, {
                        text: '鑫的包包'
                    }, {
                        text: '鑫的鞋子'
                    }, {
                        text: '鑫的手机'
                    }, {
                        text: '鑫的美妆'
                    }, {
                        text: '鑫的护肤'
                    }, {
                        text: '鑫的清洁'
                    }, {
                        text: '鑫的汽车'
                    }, {
                        text: '鑫的超市'
                    }, {
                        text: '鑫的图书'
                    }, {
                        text: '鑫的运动'
                    },
                    {
                        text: '鑫的电竞'
                    },
                    {
                        text: '鑫的旅游'
                    },
                    {
                        text: '鑫的母婴'
                    },
                    {
                        text: '鑫的金融'
                    },
                    {
                        text: '鑫的宠物'
                    },
                ],
            }
        },
        methods: {},
    }
</script>
<style scoped lang="less">
</style>