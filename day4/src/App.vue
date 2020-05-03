<template>
    <div>
        <van-tabbar v-model="active" active-color="#07c160" route>
            <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
            <van-tabbar-item icon="search" dot replace to="/searchPage">搜索</van-tabbar-item>
            <van-tabbar-item icon="friends-o" replace badge="5" to="/addressPage">通讯录</van-tabbar-item>
            <van-tabbar-item icon="setting-o" replace badge="20" to="/settingPage">设置</van-tabbar-item>
        </van-tabbar>
        <router-view></router-view>
    </div>
</template>
<script scoped>
</script>
<style scoped lang="less">
</style>