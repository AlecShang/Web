<template>
    <div>
        <van-cell-group>
            <van-field v-model="isShow" placeholder="请输入用户名" />
        </van-cell-group>
        <van-button type="default" @click="changeShow">默认按钮</van-button>
        <div>{{isShow}}</div>
        <div id="myDiv" v-if="isShow" :class="{'background-color':red}"></div>
        <router-view></router-view>
    </div>
</template>
<script scoped>
    import {
        Notify,
    } from 'vant';
    export default {
        props: {},
        data() {
            return {
                myData: '是的',
                isShow: true,
            }
        },
        methods: {
            changeShow: function () {
                let _this = this;
                _this.isShow = "false";
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