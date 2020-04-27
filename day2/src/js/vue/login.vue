<template>
    <div class="container">
        <div id="d1">
            <div></div>
        </div>
    </div>

</template>
<script scoped>
    $(function () {
        $("#d1").css({
            'backgroundColor': 'red',
            'border': '5px solid',
            // 'width': '600px',
            // 'height': '600px',
            // 'float': left,
        });
        $("#d1 div").css({
            'backgroundColor': 'green',
            'border': '5px solid',
            'width': '200px',
            'height': '200px'
        });
    });
</script>
<style scoped>
</style>