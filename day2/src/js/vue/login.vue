<template>
    <div class="container">
        <div id="d1">
            <div></div>
        </div>
    </div>

</template>
<script scoped>
</script>
<style scoped lang="less">
    @baseColor: green;
    @baseFontSize: 5em;

    .widthHeight(@width: 100px, @height: 100px) {
        width: @width;
        height: @height;
    }

    #d1 {
        .widthHeight(400px, 400px);
        background: linear-gradient(90deg, yellow, red);
        border: 5px solid hsla(0, 0%, 100%, 0.5);
        background: black;

    }
</style>