<template>
    <div>
        <headerbox showTip="true"></headerbox>
        <div class="screen-C">
            <div class="screen-item">
                <img src="../assets/arrow-left.png" alt="" />
                <img
                    class="distance-img"
                    src="../assets/distance-left.png"
                    alt=""
                />
                <span class="distance-text">12m</span>
                <img
                    src="../assets/subway-icon.png"
                    class="margin-icon"
                    alt=""
                />
                <div class="screent-text-block">
                    <p>乘车</p>
                    <p class="text">To Train</p>
                </div>
            </div>
            <div class="screen-item">
                <img
                    class="margin-icon"
                    src="../assets/information.png"
                    alt=""
                />
                <div class="screent-text-block">
                    <p>综合信息查询</p>
                    <p class="text">Information query</p>
                </div>
                <img src="../assets/arrow-right.png" alt="" />
                <img
                    class="distance-img"
                    src="../assets/distance-right.png"
                    alt=""
                />
                <span class="distance-text">12m</span>
            </div>
            <div class="screen-item">
                <img src="../assets/next.png" alt="" />
                <div class="information-block">
                    <p>本次列表车</p>
                    <p class="text">This Train</p>
                </div>
                <div class="information-block-1 exit-block">
                    <p>列车已进站</p>
                    <p class="text">Arrived</p>
                </div>
                <img src="../assets/next.png" alt="" />
                <div class="information-block">
                    <p>下次列车</p>
                    <p class="text">Next Train</p>
                </div>
                <div class="information-block-1">
                    <p>7分钟</p>
                    <p class="text">7Min</p>
                </div>
            </div>
        </div>
        <broadcast></broadcast>
    </div>
</template>

<script>
import broadcast from '../components/broadcast.vue';
import headerbox from '../components/headerbox.vue';
export default {
    name: '出站检票',
    components: {
        broadcast,
        headerbox
    },
    data() {
        return {
            stationType: {
                text1: '出站检票',
                text2: 'Exit Gate'
            }
        };
    }
};
</script>

<style lang="scss">
.screen-C {
    position: absolute;
    top: 190px;
    width: 100%;
    padding: 0 44px;
    color: #fff;
    box-sizing: border-box;
    .information-block {
        display: inline-block;
        font-size: 34px;
        vertical-align: middle;
        color: #707070;
        margin: 0 100px 0 20px;
        .text {
            font-size: 24px;
        }
    }
    .information-block-1 {
        display: inline-block;
        font-size: 48px;
        vertical-align: middle;
        margin-right: 40px;
    }
    .screen-item {
        border: 2px solid #707070;
        background: #1d1a1b;
        display: inline-block;
        width: 100%;
        border-radius: 20px;
        padding: 30px 0;
        margin-bottom: 30px;
    }
    .screent-text-block {
        display: inline-block;
        font-size: 68px;
        margin-right: 60px;
        text-align: left;
        vertical-align: middle;
        width: 500px;
        .text {
            font-size: 38px;
        }
    }
    .exit-block {
        color: #fdd40d;
    }
    .distance-text {
        font-size: 48px;
        margin-right: 80px;
        margin-left: 12px;
        vertical-align: middle;
    }
    .distance-img {
        margin-left: 20px;
        vertical-align: middle;
    }
    img {
        vertical-align: middle;
    }
    .margin-icon {
        margin: 0 22px;
    }
}
</style>
