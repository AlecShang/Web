<template>
    <div>
        <router-link to="/register">Register</router-link>
        <router-link to="/exit">Exit</router-link>
        <input type="button" :value="msg">
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style>
    input {
        width: 500px;
        border: 3px solid black
    }
</style>