<template>
    <div id="d1">
        <div id="d2">
            <div id="page-left">向左浮动</div>
            <div id="page-right">向右浮动</div>
        </div>

        <div id="page-header">未浮动</div>
        <div id="page-footer"></div>
        <router-view></router-view>
    </div>
</template>
<script scoped>
    // import imgUrl from '../images/dog.jpg'
    export default {
        // name: 'UserFace',
        data() {
            return {
                imgUrl: require('../../images/dog.jpg'),
                imgVal: 'this is imgVal',
                arr: ['a', 'b', 'c', 'd', 'e'],
                num: '3.141592653',
                obj: {
                    foo: 'hello',
                    bar: 'hi'
                },
                date: new Date(),
                btnName: '点击试一试',
            }
        },
        methods: {
            // 随机数概率
            getRandom: function () {
                let N = window.prompt('请输入大于等于1的整数n:')
                let A = window.prompt('请输入小于100的整数a0:')
                N = parseInt(N)
                A = parseInt(A)
                var p = 1
                // 判断输入是否正确
                if (N < 1 || A > 100 || isNaN(N) || isNaN(A))
                    alert('错误!请输入正确的数据.');
                var a = [A, ],
                    k = [],
                    i = 0;
                for (let i = 0; i < N; i++) {
                    k[i] = this.randomNum(0, a[i]);
                    // 生成新的区间
                    a[i + 1] = a[i] - k[i];
                    p = (1 / (a[i] + 1)).toPrecision(6)
                }
                console.log('当前an为0的概率为' + p);

            },
            // 生成随机区间的整数
            randomNum: function (min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            },
            // 生成二维随机数组
            defineArray: function (a, b) {
                var arr = new Array([a], [b])
            },
            isBig: function () {

            },
        },
    }
</script>
<style scoped lang="less">
    @baseColor: green;
    @baseFontSize: 5em;

    .widthHeight(@width: 100px, @height: 100px) {
        width: @width;
        height: @height;
    }

    div {
        text-align: center;
    }

    #page-header {
        .widthHeight(100%, 100px);
        background-color: gray;
    }

    #page-left {
        .widthHeight(40%, 200px);
        background-color: red;
        float: left;

    }

    #page-right {
        .widthHeight(40%, 200px);
        background-color: green;
        float: right;
    }


    #page-left:after {
        content: "";
        display: block;
        clear: both;
    }
</style>