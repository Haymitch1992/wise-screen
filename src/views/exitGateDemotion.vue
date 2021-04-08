<template>
  <div>
    <headerbox :showTime="true"></headerbox>
    <broadcast></broadcast>
    <entrance :stationType="stationType" fullScreen="true"></entrance>
  </div>
</template>

<script>
import broadcast from '../components/broadcast.vue';
import headerbox from '../components/headerbox.vue';
import entrance from '../components/entrance.vue';
export default {
  name: '出站检票',
  components: {
    broadcast,
    headerbox,
    entrance
  },
  data() {
    return {
      stationType: {
        text1: '出站检票',
        text2: 'Exit Gate'
      }
    };
  }
};
</script>

<style></style>
