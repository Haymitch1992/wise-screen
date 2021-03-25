<template>
    <div class="header-box">
        <img
            src="../assets/sreen-logo.png"
            class="screen-logo"
            alt="screen-logo"
        />
        <span class="header-tip" v-if="showTip">
            面向任意摄像头挥手3秒即可招援！ Wave to any camera for 3 seconds!
        </span>
    </div>
</template>

<script>
export default {
    name: 'LOGO',
    props: {
        showTip: Boolean
    }
};
</script>

<style scoped lang="scss">
.header-box {
    width: 100%;
    height: 120px;
    position: absolute;
    padding: 40px 30px;
    box-sizing: border-box;
    text-align: left;
    top: 0;
    .screen-logo {
        width: 283px;
        display: inline-block;
        vertical-align: middle;
    }
    .header-tip {
        width: 1440px;
        display: inline-block;
        font-size: 40px;
        color: #fff;
        border: 2px solid #707070;
        background: #1d1a1b;
        line-height: 74px;
        vertical-align: middle;
        margin-left: 110px;
        text-align: center;
        border-radius: 6px;
    }
}
</style>
