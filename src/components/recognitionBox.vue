<template>
  <div class="danger-box">
    <div class="qr-scanner">
      <div class="box">
        <div class="line"></div>
        <div class="angle"></div>
      </div>
      <div class="tips">
        <div class="recognition-icon active-4"></div>
        <div>
          <h3>召援成功</h3>
          <h4>recognition successful</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recognitionType: Number
  },
  data() {
    return {
      timer: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('changeShowTips', false);
    }, 10000);
  }
};
</script>
<style scoped lang="scss">
.danger-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  .qr-scanner {
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    background-size: 900px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    //44, 216, 254
    background-image: linear-gradient(
        0deg,
        transparent 24%,
        rgba(44, 216, 254, 0.1) 25%,
        rgba(44, 216, 254, 0.1) 26%,
        transparent 27%,
        transparent 74%,
        rgba(44, 216, 254, 0.1) 75%,
        rgba(44, 216, 254, 0.1) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        90deg,
        transparent 24%,
        rgba(44, 216, 254, 0.1) 25%,
        rgba(44, 216, 254, 0.1) 26%,
        transparent 27%,
        transparent 74%,
        rgba(44, 216, 254, 0.1) 75%,
        rgba(44, 216, 254, 0.1) 76%,
        transparent 77%,
        transparent
      );
    background-size: 3rem 3rem;
    background-position: -1rem -1rem;

    background-color: #111;
  }
}
.qr-scanner .box {
  width: 400px;
  height: 400px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border: 0.1rem solid rgba(44, 216, 254, 0.2);
}

.qr-scanner .line {
  height: calc(100% - 2px);
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 255, 51, 0) 43%,
    rgb(44, 216, 254) 211%
  );
  border-bottom: 3px solid rgb(44, 216, 254);
  transform: translateY(-100%);
  animation: radar-beam 2.8s infinite;
  animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
  animation-delay: 0.2s;
}

.qr-scanner .box:after,
.qr-scanner .box:before,
.qr-scanner .angle:after,
.qr-scanner .angle:before {
  content: '';
  display: block;
  position: absolute;
  width: 3vw;
  height: 3vw;
  border: 0.2rem solid transparent;
}

.qr-scanner .box:after,
.qr-scanner .box:before {
  top: 0;
  border-top-color: rgb(44, 216, 254);
}

.qr-scanner .angle:after,
.qr-scanner .angle:before {
  bottom: 0;
  border-bottom-color: rgb(44, 216, 254);
}

.qr-scanner .box:before,
.qr-scanner .angle:before {
  left: 0;
  border-left-color: rgb(44, 216, 254);
}

.qr-scanner .box:after,
.qr-scanner .angle:after {
  right: 0;
  border-right-color: rgb(44, 216, 254);
}

@keyframes radar-beam {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
.tips {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 0px;
  top: 0px;
  h3 {
    color: rgb(44, 216, 254);
    font-size: 30px;
  }
  h4 {
    color: rgb(44, 216, 254);
    margin-top: 10px;
    font-size: 22px;
  }
}
.recognition-icon {
  display: block;
  width: 127px;
  height: 127px;
  margin: 80px auto 20px;
}

.active-4 {
  background: url('../assets/gesture-4.png') no-repeat -5px -5px;
}
</style>
