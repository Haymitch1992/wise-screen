<template>
    <div class="stop-box">
        <div class="stop-item" :class="fullScreen ? 'fullScreen' : ''">
            <img
                src="../assets/entrance.png"
                v-if="stationType.text1 === '进站检票'"
                alt=""
                class="stop-img"
            />
            <img
                src="../assets/exit.png"
                v-if="stationType.text1 === '出站检票'"
                alt=""
                class="stop-img"
            />
            <div
                class="stop-text"
                :class="stationType.text1 === '出站检票' ? 'exit-text' : ''"
            >
                <p class="stop-text-1">{{ stationType.text1 }}</p>
                <p class="stop-text-2">{{ stationType.text2 }}</p>
            </div>
        </div>
        <div class="station-box" :class="fullScreen ? 'fullScreen' : ''">
            <img src="../assets/station.png" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: '禁止',
    props: {
        stationType: Object,
        fullScreen: Boolean
    }
};
</script>

<style lang="scss" scoped>
p {
    margin: 0;
    text-align: left;
    vertical-align: middle;
}
.stop-box {
    position: absolute;
    top: 260px;
    width: 100%;
    color: #fff;
    .stop-item {
        width: 1520px;
    }
    .station-box {
        width: 1520px;
    }
    .fullScreen {
        width: 100%;
    }
    .stop-img {
        display: inline-block;
        margin-right: 100px;
    }
    .arrow-img {
        display: inline-block;
        margin-right: 140px;
        margin-left: 50px;
        margin-top: 40px;
    }
    .stop-text {
        width: 730px;
        display: inline-block;
        vertical-align: top;
    }
    .stop-text-1 {
        font-size: 180px;
        height: 180px;
        line-height: 180px;
    }
    .stop-text-2 {
        font-size: 89px;
    }
    .stop-text-3 {
        font-size: 82px;
    }
    .stop-text-4 {
        font-size: 34px;
    }

    .exit-text {
        color: #fdd40d;
    }
}
</style>
