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
                    <img src="" alt="" />
                    <div>
                        <p>开往上芬方向</p>
                        <p>To SHANGFEN</p>
                    </div>
                </div>
                <div class="time-text">1分钟（Min）</div>
            </li>
            <li>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>开往深圳北站方向</p>
                        <p>To Shenzhen North station</p>
                    </div>
                </div>
                <div class="time-text">2分钟（Min）</div>
            </li>
            <li>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>开往红山方向</p>
                        <p>To HONGSHAN</p>
                    </div>
                </div>
                <div class="time-text">4分钟（Min）</div>
            </li>
            <li>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>开往梅林关</p>
                        <p>To MEILINGUAN</p>
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
    },
    methods: {
        getCurrentTime() {
            var dayjs = require('dayjs');
            this.currentTime1 = dayjs()
                .format('YYYY-MM-DD')
                .split('-');
            this.currentTime2 = dayjs().format('HH:mm');
            this.currentTime3 = dayjs().day();
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
    }
}
</style>
