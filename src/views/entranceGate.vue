<template>
  <div>
    <headerbox></headerbox>
    <broadcast></broadcast>
    <rightinfo></rightinfo>
    <entrance :stationType="stationType"></entrance>
  </div>
</template>

<script>
import broadcast from '../components/broadcast.vue';
import headerbox from '../components/headerbox.vue';
import rightinfo from '../components/rightinfo.vue';
import entrance from '../components/entrance.vue';
export default {
  name: 'jinzhanjianpiao', // 进站检票
  components: {
    broadcast,
    headerbox,
    rightinfo,
    entrance
  },
  data() {
    return {
      stationType: {
        text1: '进站检票',
        text2: 'Entrance Gate'
      }
    };
  }
};
</script>

<style></style>
