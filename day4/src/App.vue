<template>
    <div>
        <van-tabbar v-model="active" active-color="#07c160" route>
            <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" replace to="/menuPage">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" replace to="/cartPage">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" replace to="/settingPage">我</van-tabbar-item>
        </van-tabbar>
        <router-view></router-view>
    </div>
</template>
<script scoped>
    export default {
        data() {
            return {
                active: 0,
            }
        },
    }
</script>
<style scoped lang="less">
</style>