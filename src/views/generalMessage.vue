<template>
    <div>
        <div class="general-top">
            <img src="../assets/sreen-logo.png" class="logo-img" alt="" />
            <ul class="general-tab">
                <li
                    :class="currentTab === 1 ? 'active' : ''"
                    @click="changeCurrentTab(1)"
                >
                    线网信息
                </li>
                <li
                    :class="currentTab === 2 ? 'active' : ''"
                    @click="changeCurrentTab(2)"
                >
                    站内导航
                </li>
                <li
                    :class="currentTab === 3 ? 'active' : ''"
                    @click="changeCurrentTab(3)"
                >
                    周边信息
                </li>
            </ul>
            <a href="" class="btn">
                <img src="../assets/voice.png" alt="" />
                音频视频招援
            </a>
        </div>
        <div class="general-content">
            <div class="general-left">
                <img src="../assets/map-1.png" v-if="currentTab === 1" alt="" />
                <img src="../assets/map-2.png" v-if="currentTab === 2" alt="" />
                <img src="../assets/map-3.png" v-if="currentTab === 3" alt="" />
            </div>
            <div class="general-right">
                <p class="text-1">公交信息</p>
                <p class="text-2">Bus information</p>
                <img class="line" src="../assets/line.png" alt="" />
                <div>
                    <img src="../assets/station-A.png" alt="" />
                    <div>
                        <p>海鹰路</p>
                        <p>Haiying Road</p>
                    </div>
                    <div>
                        926路;特快112路;312路;926路;快速直达专线160路；
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTab: 1
        };
    },
    methods: {
        changeCurrentTab(val) {
            this.currentTab = val;
        }
    }
};
</script>

<style scoped lang="scss">
.general-top {
    text-align: left;
    padding: 30px 30px;
    .logo-img {
        vertical-align: top;
    }
}
.btn {
    background: #d30000;
    height: 72px;
    line-height: 72px;
    width: 310px;
    color: #fff;
    font-size: 36px;
    display: inline-block;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    img {
        vertical-align: middle;
    }
}
.general-tab {
    list-style: none;
    display: inline-block;
    text-align: center;
    vertical-align: top;
    margin: 0 236px 0 210px;
    li {
        width: 272px;
        display: inline-block;
        color: #fff;
        border: 1px solid #62d53f;
        height: 57px;
        line-height: 57px;
        box-sizing: border-box;
    }
    li:nth-child(1) {
        position: relative;
        left: 4px;
    }
    li:nth-child(2) {
        border-right: none;
        border-left: none;
    }
    li:nth-child(3) {
        position: relative;
        right: 4px;
    }
    li.active {
        background: url('../assets/tab.png');
        border: none;
    }
}
.general-left {
    width: 1524px;
    height: 918px;
    display: inline-block;
    border: 1px solid #707070;
    border-radius: 20px;
    margin-right: 20px;
    vertical-align: top;
    img {
        height: 100%;
        width: 100%;
    }
}
.general-right {
    width: 310px;
    height: 918px;
    display: inline-block;
    border: 1px solid #707070;
    border-radius: 20px;
    color: #fff;
    vertical-align: top;
    .text-1 {
        font-size: 36px;
    }
    .text-2 {
        font-size: 20px;
    }
    .line {
        display: block;
        width: 100%;
    }
}
</style>
