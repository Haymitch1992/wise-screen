<template>
    <div class="stop-box">
        <div class="stop-item">
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
        <div class="station-box">
            <img src="../assets/station.png" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: '禁止',
    props: {
        stationType: Object
    }
};
</script>

<style lang="scss">
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
        width: 900px;
        display: inline-block;
        vertical-align: top;
    }
    .stop-text-1 {
        font-size: 180px;
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
    .station-box {
        text-align: left;
    }
    .exit-text {
        color: #fdd40d;
    }
}
</style>
