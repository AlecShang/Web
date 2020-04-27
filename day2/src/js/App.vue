<template>
    <div>
        <!-- <h1>this is APP.vue{{a}}</h1> -->
        <!-- <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link> -->
        <div id="imgDiv">
            <input type="button" @click='isBig' :value="btnName">
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ol>
        </div> <!-- <img :src="imgUrl" alt="dog.jpg"> -->
        <router-view></router-view>
    </div>
</template>
<script scoped>
    import imgUrl from '../images/dog.jpg'
    export default {
        // name: 'UserFace',
        data() {
            return {
                imgUrl,
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
                let money = -0;
                let flag = true;
                if (money < 0) {
                    flag = false;
                    money = -money;
                }
                let money2 = Math.floor(money * 100) / 100;
                if (Math.floor(money2) == money2) {
                    money2 = money2 + ".00";
                } else {
                    if ((Math.floor(money2 * 10) == money2 *
                            10)) {
                        money2 = money2 + '0';
                    } else money2 = money2;
                }
                money2 = String(money2);
                let matchMoney = /(\d+)(\d{3})/;
                let formatMoney = String(money2);
                while (matchMoney.test(money2)) {
                    money2 = money2.replace(matchMoney, '$1' + ',' + '$2');
                }
                if (flag == true) {
                    console.log('$' + money2)
                } else console.log('(' + '$' + money2 + ')')
            },
        },
    }
</script>
<style scoped lang="less">
    @baseColor: green;

    img {
        .wh1000()
    }

    li:nth-child(2n),
    .toggleColor {
        background-color: @baseColor;
    }

    .tableCenter() {
        text-align: center;
        display: table;

    }

    .wh1000(@p: 1000) {
        width: @p;
        height: @p;
    }

    #imgDiv {
        .tableCenter();
        .wh1000(1000px);
        background: red;
        line-height: 100px;
        margin-left: 10px;
        padding-left: 20px;

        >input {
            border: 20px solid @baseColor;
            width: 400px;
            height: 400px;
        }
    }
</style>