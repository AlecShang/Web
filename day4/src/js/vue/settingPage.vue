<template>
    <div>
        <van-cell-group>
            <van-field v-model="showValue" placeholder="请输入用户名" />
        </van-cell-group>
        <van-button type="default" @click="changeShow">默认按钮</van-button>
        <div>
            ({{showValue}})
        </div>
        <div>Computed:{{computedValue}}</div>
        <router-view></router-view>
    </div>
</template>
<script scoped>
    import {
        Toast
    } from 'vant';
    export default {
        props: {},
        data() {
            return {
                myNum: 100,
                showValue: '',
            }
        },
        methods: {
            changeShow: function () {
                let _this = this;
                _this.isShow = 'false';
                _this.overLayShow = true;
                Toast({
                    closeOnClick: true,
                    type: 'success',
                    message: '成功啦!',
                });

            }
        },
        computed: {
            computedValue: function () {
                return this.showValue * 2
            }
        },
    }
</script>
<style scoped lang="less">
    #myDiv {
        background-color: green;
        width: 100px;
        height: 100px;
    }

    .bgcolor {
        background-color: red;
    }
</style>