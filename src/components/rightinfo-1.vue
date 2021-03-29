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
                    <img src="../assets/station-A.png" alt="" />
                    <div class="station-info">
                        <p>海鹰路</p>
                        <p class="english">Haiying Road</p>
                    </div>
                </div>
                <div class="car-middle">
                    <span class="car-text">926路</span>
                    <div class="car-info">
                        <p>距海鹰站最近1辆</p>
                        <p class="english">One nearest to Haiying station</p>
                    </div>
                </div>
                <div>
                    <div class="car-status">
                        <img src="../assets/car-1.png" alt="" />
                        <p>1站 1.2公里</p>
                    </div>
                    <span class="car-num">5</span>
                    <div class="car-time">
                        <p>分钟</p>
                        <p>min</p>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/station-B.png" alt="" />
                    <div class="station-info">
                        <p>航丰路</p>
                        <p class="english">Hangfeng Road</p>
                    </div>
                </div>
                <div class="car-middle">
                    <span class="car-text">926路</span>
                    <div class="car-info">
                        <p>距海鹰站最近1辆</p>
                        <p class="english">One nearest to Haiying station</p>
                    </div>
                </div>
                <div>
                    <div class="car-status">
                        <img src="../assets/car-1.png" alt="" />
                        <p>1站 1.2公里</p>
                    </div>
                    <span class="car-num">5</span>
                    <div class="car-time">
                        <p>分钟</p>
                        <p>min</p>
                    </div>
                </div>
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
    .car-status {
        width: 100px;
        display: inline-block;
        margin: 0 20px 0 20px;
    }
    .car-text {
        display: inline-block;
        border: 2px solid #838383;
        border-radius: 8px;
        padding: 4px 10px;
        color: #838383;
        font-size: 30px;
        vertical-align: top;
        margin-left: 24px;
    }
    .car-middle {
        margin: 20px 0;
    }
    .car-info {
        display: inline-block;
        width: 220px;
        color: #838383;
        text-align: left;
        font-size: 25px;
        margin-left: 20px;
        vertical-align: top;
        .english {
            font-size: 14px;
        }
    }
    .car-num {
        color: #fdd40d;
        font-size: 80px;
        display: inline-block;
        width: 88px;
    }
    .car-time {
        display: inline-block;
        width: 100px;
        font-size: 30px;
        padding-left: 30px;
    }
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
        text-align: left;
        font-size: 40px;
        margin-left: 20px;
        margin-bottom: 20px;
        .english {
            font-size: 24px;
        }
    }
}
</style>
