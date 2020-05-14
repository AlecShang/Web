<template>
    <div>
        <van-cell-group>
            <van-field v-model="isShow" placeholder="请输入用户名" />
        </van-cell-group>
        <div>{{isShow}}</div>
        <div id="myDiv" v-if="isShow"></div>
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
        methods: {},
    }
</script>
<style scoped lang="less">
    #myDiv {
        background-color: green;
        width: 100px;
        height: 100px;
    }
</style>