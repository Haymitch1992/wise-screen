<template>
    <div class="arrived-box">
        <div class="time-item">
            <div class="current-time">
                {{ currentTime1[0] }}年{{ currentTime1[1] }}月{{
                    currentTime1[2]
                }}日
            </div>
            <div class="current-time">
                {{ transformCn[currentTime3] }} {{ currentTime2 }}
            </div>
        </div>
        <img src="../assets/line.png" alt="" />
        <ul>
            <li>
                <div>
                    <img src="../assets/line-6.png" alt="" />
                    <div class="station-info">
                        <p>开往上芬方向</p>
                        <p class="english">To SHANGFEN</p>
                    </div>
                </div>
                <div class="time-text">1分钟（Min）</div>
            </li>
            <li>
                <div>
                    <img src="../assets/line-6.png" alt="" />
                    <div class="station-info">
                        <p>开往深圳北站方向</p>
                        <p class="english">To Shenzhen North station</p>
                    </div>
                </div>
                <div class="time-text">2分钟（Min）</div>
            </li>
            <li>
                <div>
                    <img src="../assets/line-4.png" alt="" />
                    <div class="station-info">
                        <p>开往红山方向</p>
                        <p class="english">To HONGSHAN</p>
                    </div>
                </div>
                <div class="time-text">4分钟（Min）</div>
            </li>
            <li>
                <div>
                    <img src="../assets/line-4.png" alt="" />
                    <div class="station-info">
                        <p>开往梅林关</p>
                        <p class="english">To MEILINGUAN</p>
                    </div>
                </div>
                <div class="time-text">5分钟（Min）</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: '到站提示',
    props: {
        stopObj: Object
    },
    data() {
        return {
            currentTime1: '',
            currentTime2: '',
            currentTime3: '', // 星期几
            transformCn: [
                '星期一',
                '星期二',
                '星期三',
                '星期四',
                '星期五',
                '星期六',
                '星期日'
            ]
        };
    },
    mounted() {
        this.getCurrentTime();
        setInterval(() => {
            this.getCurrentTime();
        }, 1000);
    },
    methods: {
        getCurrentTime() {
            let dayjs = require('dayjs');
            let currnet = dayjs();
            this.currentTime1 = currnet.format('YYYY-MM-DD').split('-');
            this.currentTime2 = currnet.format('HH:mm:ss');
            this.currentTime3 = currnet.day();
        }
    }
};
</script>

<style scoped lang="scss">
.arrived-box {
    width: 394px;
    background: linear-gradient(#000, #383838);
    height: 1080px;
    position: absolute;
    color: #fff;
    right: 0;
    .time-item {
        height: 270px;
        padding-top: 100px;
        box-sizing: border-box;
    }
    .current-time {
        font-size: 36px;
        padding-bottom: 10px;
    }
    .time-text {
        font-size: 40px;
        padding-top: 20px;
        padding-left: 80px;
    }
    li {
        padding: 24px 0;
    }
    .station-info {
        display: inline-block;
        width: 240px;
        color: #838383;
        text-align: left;
        font-size: 30px;
        margin-left: 20px;
        .english {
            font-size: 18px;
        }
    }
}
</style>
