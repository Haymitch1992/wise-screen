<template>
    <div class="broadcast-box">
        <div class="broadcast">
            <div class="broadcast-item">
                <span class="broadcast-text">欢迎乘坐深圳地铁</span>
                <span>Welcome to Shenzhen Metro</span>
            </div>
            <div class="broadcast-item">
                <span>晴天 温度 3°~6° 湿度 47%</span>
                <span>Welcome to Shenzhen Metro</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '文字广播'
};
</script>

<style scoped lang="scss">
.broadcast-box {
    border-top: 4px solid #00d900;
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
}
.broadcast {
    background: #000;
    color: #fff;
    height: 76px;
    line-height: 80px;
    font-size: 40px;
    border-top: 4px solid #007015;
}
.broadcast-item {
    display: inline-block;
    width: 100%;
}
.broadcast-text {
    margin-right: 20px;
}
</style>
